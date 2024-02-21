import axios from "axios";
import React, { useEffect, useState } from "react";
import RequestPickupComponent from "../../components/RequestPickupComponent/RequestPickupComponent";
import "./IndividualDashboard.css";
import globeGreen from "../../assets/images/dashboard-img.png";
import { Link } from "react-router-dom";

const IndividualDashboard = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:4040/api/v1/individuals/individual", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log("Error getting user dashboard", error);
      });
  }, []);

  return (
    <div className="individual-dashboard">
      <div className="title-container">
        <h1>
          Welcome <span>{data.name}</span>
        </h1>
      </div>
      <div className="individual-dashboard-content">
        <div className="">
          <img src={globeGreen} className="dashboard-img"></img>
        </div>

        <div class="ag-format-container">
          <div class="ag-courses_box">
            <div class="ag-courses_item">
              <Link to="/sell-waste/individual" class="ag-courses-item_link">
                <div class="ag-courses-item_bg"></div>

                <div class="ag-courses-item_title">Sell Waste</div>

                <div class="ag-courses-item_date-box">
                  Start:
                  <span class="ag-courses-item_date">04.11.2022</span>
                </div>
              </Link>
            </div>

            <div class="ag-courses_item">
              <Link to="/sale-history/individual" class="ag-courses-item_link">
                <div class="ag-courses-item_bg"></div>

                <div class="ag-courses-item_title">Sale History</div>

                <div class="ag-courses-item_date-box">
                  Start:
                  <span class="ag-courses-item_date">04.11.2022</span>
                </div>
              </Link>
            </div>

            <div class="ag-courses_item">
              <a href="#" class="ag-courses-item_link">
                <div class="ag-courses-item_bg"></div>

                <div class="ag-courses-item_title">Notifications</div>

                <div class="ag-courses-item_date-box">
                  Start:
                  <span class="ag-courses-item_date">04.11.2022</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default IndividualDashboard;
