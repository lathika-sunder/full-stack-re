import React, { useEffect, useRef, useState } from "react";
import "./NavbarComp.css";
import { FaBars, FaTimes } from "react-icons/fa";
import logoDark from "../../assets/images/revive-logo-dark.png"
import { Link } from "react-router-dom";
const NavbarComp = () => {

   
  const [showResponsiveNav, setShowResponsiveNav] = useState(false);

  const showNavbar = () => {
    setShowResponsiveNav(!showResponsiveNav);
  };

  return (
    <>
      <div className="header-container">
      <img src={logoDark}/>

        <nav className="navbar"  style={{ display: showResponsiveNav ? "none" : "" }}>
          <Link to='/'>Home</Link>
          <Link to='/sign-up'>Sign up</Link>
          <Link to='/login'>Login</Link>
          <a href="/contact">Contact Us</a>
        </nav>

        <div className="responsive-navbar-container">
        <button onClick={showNavbar} className="menubar-icon">
            {showResponsiveNav ? <FaTimes /> : <FaBars />}
          </button>
        <nav
          className="responsive-navbar"
          style={{ display: showResponsiveNav ? "flex" : "none" }}
        >
          <Link to='/'>Home</Link>
          <Link to='/sign-up'>Sign up</Link>
          <Link to='/login'>Login</Link>
          <a href="/project">Project</a>
          <a href="/contact">Contact Us</a>
          
        </nav>
       
        </div>
      </div>
    </>

  )
}

export default NavbarComp