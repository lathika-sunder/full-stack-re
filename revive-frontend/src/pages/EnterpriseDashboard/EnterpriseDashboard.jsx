import "./EnterpriseDashboard.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import globeGreen from "../../assets/images/dashboard-img-e.png";
import { Link } from "react-router-dom";
import { FaFileUpload, FaHistory, FaPersonBooth, FaUser } from "react-icons/fa";

const EnterpriseDashboard = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:4040/api/v1/enterprises/enterprise", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log("Error getting enterprise dashboard", error);
      });
  }, []);

  return (
    <div className="enterprise-dashboard">
      <div className="title-container">
        <img src={globeGreen} className="dashboard-img"></img>
      </div>

      <div className="column">
        <div className="ag-format-container">
          <div className="row">
            <div className="ag-courses_box">
              <div className="ag-courses_item">
                <Link
                  to="/sell-waste/enterprise"
                  className="ag-courses-item_link"
                >
                  <div className="ag-courses-item_bg"></div>

                  <div className="ag-courses-item_title">Sell Waste</div>

                  <div className="ag-courses-item_date-box">
                    <FaFileUpload size={"6vh"}/>
                  </div>
                </Link>
              </div>

              <div className="ag-courses_item">
                <Link
                  to="/request-history"
                  className="ag-courses-item_link"
                >
                  <div className="ag-courses-item_bg"></div>

                  <div className="ag-courses-item_title">Sale History</div>

                  <div className="ag-courses-item_date-box">
                    <FaHistory  size={"6vh"} />
                  </div>
                </Link>
              </div>
            </div>
            <div className="ag-courses-box">
              <div className="notification-container">
              <div className="title-container">
                <div className="row">
                  <FaUser size={"3vh"} style={{ marginRight: "2vh" }} />
                  <h4>{data.companyName}</h4>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseDashboard;
