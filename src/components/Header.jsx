import React from "react";
import "./css/header.css";
import logo from "../assets/images/logo.svg";

function Header() {
  return (
    <header className="header-wrapper">
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo" />
      </div>
    </header>
  );
}

export default Header;
