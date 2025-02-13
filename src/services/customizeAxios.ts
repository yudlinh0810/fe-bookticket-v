import axios from 'axios';

const bookTicketsAPI = axios.create({
  baseURL: `https://${import.meta.env.VITE_API_URL}.ngrok-free.app/api`,
  withCredentials: true,
  headers: { 'ngrok-skip-browser-warning': 'true' },
});

bookTicketsAPI.interceptors.response.use(
  (response) => {
    return response.data || [];
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default bookTicketsAPI;
