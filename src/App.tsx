import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.scss";
import "./styles/Root.scss";
import "./styles/Reset.scss";
import HomePage from "./pages/HomePage";
import Layout from "./layouts/Layout";
import useClientWidth from "./utils/useClientWidth";
import VerifyOTPPage from "./pages/VerifyOtpPage";

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
          path="/otp"
          element={
            <Layout>
              <VerifyOTPPage />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
