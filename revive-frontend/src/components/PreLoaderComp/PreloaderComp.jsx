import "./PreloaderComp.css";
import React, { useEffect, useState } from "react";
import { useIsFetching } from "react-query";
import CircularProgress from '@mui/material/CircularProgress';
import preloader from '../../assets/images/preloader.gif'
const Preloader = () => {
  

  return  (
    <div className="preloader">
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <img src={preloader} style={{height:"20vh"}} />
      </div>
    </div>
  )
};

export default Preloader;
