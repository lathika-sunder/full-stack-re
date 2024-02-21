import React from "react";
import zombie from "../../assets/images/zombie-costume.gif";
import { FaArrowLeft } from "react-icons/fa";
import Button from '@mui/material/Button'
import { Link } from "react-router-dom";
const ErrorComp = () => {
  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <img src={zombie} style={{ height: "30vh" }} />
        <p>Oops! You have taken the wrong route</p>
        <Link to='/'><Button color="success"><FaArrowLeft/>{"  "} Go to Home</Button></Link>
      </div>
    </div>
  );
};

export default ErrorComp;
