import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import { FaRegClock, FaCheck } from "react-icons/fa";
import { CiNoWaitingSign } from "react-icons/ci";
import "./CompletedTransactionsIndidviduals.css";

const CompletedTransactionsIndividuals = () => {
  const [pickupRequests, setPickupRequests] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "http://localhost:4040/api/v1/individuals/pickup-history",
          {
            headers: {
              Authorization: token,
            },
          }
        );
        setPickupRequests(response.data);
      } catch (error) {
        console.log("Error getting user pickup history", error);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div className="transactions-individuals">
      <h1>Completed Transactions</h1>
      <Grid container spacing={2} className="container">
        {pickupRequests.map(
          (ele, index) =>
            (ele.requestStatus === "Completed" || ele.requestStatus==="Accepted") && (
              <Grid item xs={22} sm={26} md={5} key={index}>
                <div className="Container">
                  <div className="image-container">
                    <img
                      src={ele.image}
                      className="transaction-img"
                      alt="Request"
                    />
                  </div>
                  <div className="content">
                    <div className="x">
                      <h3>{ele.description}</h3>
                      <p className="date">
                        {new Date(ele.selectedDateTime)
                          .toLocaleString()
                          .split(",")}
                      </p>
                      <div className="tags">
                        {ele.tags.map((tag, index) => (
                          <span className="waste-tags" key={index}>
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p>{ele.quantity} units</p>
                      <p className="address">{ele.address}</p>
                    </div>
                    <div className="status">
                      <div className="completed-icon">
                        <FaCheck className="icon" color="#00bf00" />
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
            )
        )}
      </Grid>
      {/* Add an empty state message or component here */}
    </div>
  );
};

export default CompletedTransactionsIndividuals;
