import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.scss";
import "./styles/Root.scss";
import "./styles/Reset.scss";
import HomePage from "./pages/HomePage";
import Layout from "./layouts/Layout";
import useClientWidth from "./utils/useClientWidth";
import SearchTripPage from "./pages/SearchTripPage";
import { ToastContainer } from "react-toastify";

function App() {
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
          path="/search-trip"
          element={
            <Layout>
              <SearchTripPage />
            </Layout>
          }
        />
      </Routes>
      <ToastContainer
        className="custom-toast"
        position="top-center"
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
