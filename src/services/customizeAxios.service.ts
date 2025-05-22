import axios from "axios";
import { toast } from "react-toastify";
import { getAccessToken, setAccessToken, clearAccessToken } from "../utils/auth";

type FailedRequest = {
  resolve: (value?: unknown) => void;
  reject: (error: unknown) => void;
};

let isRefreshing = false;
let failedQueue: FailedRequest[] = [];

const processQueue = (error: unknown, token?: string) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

const createAxiosInstance = () =>
  axios.create({
    baseURL: `https://${import.meta.env.VITE_API_URL}.ngrok-free.app/api`,
    withCredentials: true,
    headers: { "ngrok-skip-browser-warning": "true" },
  });

export const bookTicketAPI = createAxiosInstance();
export const paymentAPI = createAxiosInstance();

bookTicketAPI.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

bookTicketAPI.interceptors.response.use(
  (response) => response.data || [],
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        }).then((token) => {
          originalRequest.headers.Authorization = `Bearer ${token}`;
          return bookTicketAPI(originalRequest);
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const res = await bookTicketAPI.get("/user/auth/refresh-token");
        const newToken = res.data.access_token;
        setAccessToken(newToken);
        processQueue(null, newToken);
        isRefreshing = false;

        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return bookTicketAPI(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError);
        isRefreshing = false;

        clearAccessToken();
        toast.warning("Phiên đăng nhập đã hết hạn, vui lòng đăng nhập lại!");
        window.location.href = "/login";

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

paymentAPI.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

paymentAPI.interceptors.response.use(
  (response) => response.data || [],
  (error) => Promise.reject(error)
);
