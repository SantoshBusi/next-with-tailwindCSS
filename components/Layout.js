import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Header";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add("fixed-screen");
    } else {
      document.body.classList.remove("fixed-screen");
    }
  }, [isSidebarOpen]);
  return (
    <>
      <Navbar setSidebarOpen={setSidebarOpen} />
      <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
