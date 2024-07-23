import React from "react";
import "../NavbarComp/NavbarComp.css";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import logo from '../../assets/images/revive-favicon.jpg'
const NavbarComp = () => {
  return (
    <div className="navbar whole-container">
      <div className="logo">
        <img src={logo} className="logo-img"/>
      </div>
      <nav>
        <div>
          <ul className="nav-bar-container">
            <img
              className="application-icon"
              src="src/assets/images/Favicon -revive.png"
              alt="Revive Logo"
            />
            <li className="content-navbar">
              <Link to="/">Home</Link>
            </li>
            {/* <li className="content-navbar">
              <Link to="/sign-up">Sign up</Link>
            </li>
            <li className="content-navbar">
              <Link to="/login">Login</Link>
            </li> */}
            <li className="content-navbar">
              <Link to="/scrap-dealers">Scrap Dealers</Link>
            </li>
            <li className="content-navbar">
              <Link to="/recycle-plants">Recycle plants</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavbarComp;
