import { BrowserRouter as Router, Routes, Route } from "react-router";
import "./App.scss";
import "./styles/Root.scss";
import "./styles/Reset.scss";
import HomePage from "./pages/HomePage";
import Layout from "./layouts/Layout";
import useClientWidth from "./utils/useClientWidth";

function App() {
  useClientWidth();
  return (
    <Router>
      <Routes>
        <Route
          index
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
