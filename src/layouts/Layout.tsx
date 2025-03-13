import React, { useRef, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/layouts/Layout.scss";
import Navbar from "../components/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [statusNavbar, setStatusNavbar] = useState<boolean>(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  const handleChangeStatusNavbar = (status: boolean) => {
    setStatusNavbar(status);
  };

  return (
    <div className="layout-wrapper">
      <Header
      //  onChangeStatusNavbar={handleChangeStatusNavbar} statusNavbar={statusNavbar}
      />
      {/* {statusNavbar } */}
      <Navbar ref={navbarRef} status={statusNavbar} />
      <main className="content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
