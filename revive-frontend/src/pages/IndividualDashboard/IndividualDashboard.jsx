import axios from "axios";
import React, { useEffect, useState } from "react";
import RequestPickupComponent from "../../components/RequestPickupComponent/RequestPickupComponent";
import "./IndividualDashboard.css";
import globeGreen from "../../assets/images/dashboard-img.png";
import { Link } from "react-router-dom";
import DateGraphComp from "../../components/DateGraphComp/DateGraphComp";

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
     
      <div className="individual-dashboard-content">
        <div className="">
          <img src={globeGreen} className="dashboard-img"></img>
        </div>

        <div className="ag-format-container">
          
          <div className="ag-courses_box">
            <div className="ag-courses_item">
              <Link
                to="/sell-waste/individual"
                className="ag-courses-item_link"
              >
                <div className="ag-courses-item_bg"></div>

                <div className="ag-courses-item_title">Sell Waste</div>

                <div className="ag-courses-item_date-box">
                  Upload
                  <span className="ag-courses-item_date"> Waste Details</span>
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
                  Start:
                  <span className="ag-courses-item_date">04.11.2022</span>
                </div>
              </Link>
            </div>

            {/* <div className="ag-courses_item">
              <Link
                to="/completed-transactions/individual"
                className="ag-courses-item_link"
              >
                <div className="ag-courses-item_bg"></div>

                <div className="ag-courses-item_title">
                  Completed Transactions
                </div>

                <div className="ag-courses-item_date-box">
                  Start:
                  <span className="ag-courses-item_date">04.11.2022</span>
                </div>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualDashboard;
