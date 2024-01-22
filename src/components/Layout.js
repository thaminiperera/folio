import React from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

function Layout({ children }) {
  return (
    <div className="layout-container">
      <Navbar />
      <div className="layout-mid">
        <div className="content">{children}</div>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
