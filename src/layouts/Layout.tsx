import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/layouts/Layout.scss";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <Header />
      <main className="content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
