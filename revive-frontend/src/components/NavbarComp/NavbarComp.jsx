import React from "react";
import "../NavbarComp/NavbarComp.css";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import logo from "../../assets/images/revive-favicon.jpg";
import { CgPhone } from "react-icons/cg";
const NavbarComp = () => {
  const token = localStorage.getItem("token");

  return (
    <div className="navbar">
      <Link to="/" className="no-style-link" style={{ border: "none" }}>
        <div className="logo">
          <img src={logo} className="logo-img" />
        </div>
      </Link>
      <nav>
        <div>
          <ul className="nav-bar-container">
            {!token && (
              <li className="content-navbar">
                <div className="">
                  <Link to="/login">Login</Link>
                </div>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavbarComp;
