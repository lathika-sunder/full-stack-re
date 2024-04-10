import React from "react";
import "./SignUpPage.css";
import Button from '@mui/material/Button'
import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <div className="sign-up-landing">
      <div className="column">
        <div className="hero-content">
          <h1>Individuals</h1>
          <p>Clear out your clutter and pocket extra cash by selling your old electronics with Revive</p>
          <Link to="/sign-up/individuals">
            <button className="btn-primary" >
              Sign Up
            </button>
          </Link>
        </div>
      </div>
      <div className="line"></div>
      <div className="column">
        <div className="hero-content">
          <h1>Enterprises</h1>
          <p>Maximize returns on your outdated tech assets by partnering with Revive for seamless e-waste management and profitable resale opportunities</p>
          <Link to="/sign-up/enterprises">
            <button className="btn-secondary">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
