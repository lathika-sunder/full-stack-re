import React from "react";
import "./HomePage.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import homeImg from "../../assets/images/home-img.png";
import responsiveHomeImg from "../../assets/images/responsive-home-img.png";
import logo from "../../assets/images/revive-logo.png";
import { CgPhone } from "react-icons/cg";
const HomePage = () => {
  return (
    <div className="home">
      <div className="hero-content">
        <h1>
          Turn your <span>Waste </span>
          into <span>Wealth</span> Now
        </h1>
        <p>
          We help you sell your old electronics for good money. With our app,
          you can easily get rid of your unused gadgets and make some cash. Just
          tell us about your device, and we'll find buyers who'll give you the
          best price. No more keeping old stuff lying use our app now and turn
          your electronic clutter into cash!
        </p>
        <div className="buttons">
          <Link to="/sign-up">
            <Button className="btn-secondary">Sign Up</Button>
          </Link>
          <Link to="/login">
            <Button variant="contained" className="btn-primary">
              Login
            </Button>

            <Link to="/contact-us">
              <Button  className="btn-secondary">
                Contact Us <CgPhone />
              </Button>
            </Link>
          </Link>
        </div>
      </div>
      <div className="image-container">
        <img className="home-img" src={homeImg}></img>
      </div>
    </div>
  );
};

export default HomePage;
