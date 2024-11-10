import React from "react";
import "./SignUpPage.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { CgArrowRight, CgArrowsExpandRight, CgPhone } from "react-icons/cg";

const SignUpPage = () => {
  return (
    <div className="sign-up-landing">
      <div className="row">
        <div className="column">
          <div className="hero-content">
            <h1>Individuals</h1>
            <p>
              Clear out your clutter and pocket extra cash by selling your old
              electronics with Revive
            </p>
            <Link to={{
        pathname: "/sign-up/individuals",
        role:'individual'
      }}>
              <button className="btn-primary"><CgArrowRight/></button>
            </Link>
          </div>
        </div>
        <div className="column">
          <div className="hero-content">
            <h1>Enterprises</h1>
            <p>
              Maximize returns on your outdated tech assets by partnering with
              Revive for seamless e-waste management and profitable resale
              opportunities
            </p>
            <Link to={{
        pathname: "/sign-up/enterprises",
        role:'enterprise'
      }}>
              <button className="btn-secondary"><CgArrowRight/></button>
            </Link>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <div className="hero-content">
            <h1>Recycle Plant</h1>
            <p>
              Clear out your clutter and pocket extra cash by selling your old
              electronics with Revive
            </p>
            <Link to={{
        pathname: "/sign-up/recycle-plants",
        role:'enterprise'
      }}>
              <button className="btn-primary"><CgArrowRight/></button>
            </Link>
          </div>
        </div>
        <div className="column">
          <div className="hero-content">
            <h1>Scrap Dealers</h1>
            <p>
              Maximize returns on your outdated tech assets by partnering with
              Revive for seamless e-waste management and profitable resale
              opportunities
            </p>
            <Link to={{
        pathname: "/contact-us",
        role:'scrapDealer'
      }}>
              <button className="btn-secondary">Contact us <CgPhone/></button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
