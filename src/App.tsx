import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.scss";
import "./styles/Root.scss";
import "./styles/Reset.scss";
import HomePage from "./pages/HomePage";
import Layout from "./layouts/Layout";
import useClientWidth from "./utils/useClientWidth";
import SearchTripPage from "./pages/SearchTripPage";
import { ToastContainer } from "react-toastify";
import BookedPage from "./pages/BookedPage";
import { useEffect } from "react";
import { bookTicketAPI } from "./services/customizeAxios.service";
import { setAccessToken } from "./utils/auth";

function App() {
  useEffect(() => {
    const refreshAccessToken = async () => {
      try {
        const res = await bookTicketAPI.get("/user/auth/refresh-token");
        const newToken = res.data.access_token;
        if (newToken) {
          setAccessToken(newToken);
        }
      } catch {
        console.log("Không thể refresh token, cần login lại.");
      }
    };

    refreshAccessToken();
  }, []);

  useClientWidth();

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/tim-kiem"
          element={
            <Layout>
              <SearchTripPage />
            </Layout>
          }
        />
        <Route
          path="/dat-ve"
          element={
            <Layout>
              <BookedPage />
            </Layout>
          }
        />
      </Routes>
      <ToastContainer
        className="custom-toast"
        position="top-right"
        autoClose={700}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Router>
  );
}

export default App;
