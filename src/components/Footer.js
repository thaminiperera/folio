import React from "react";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <div className="footer-container">
      <p>Copyright &copy; {date} Thamini Perera</p>
    </div>
  );
}

export default Footer;
