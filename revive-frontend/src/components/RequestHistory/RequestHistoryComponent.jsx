import React, { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import { CiNoWaitingSign } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa6";
import "./RequestHistory.css";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import axios from "axios";
import DateGraphComp from "../DateGraphComp/DateGraphComp";
import { useQuery } from "react-query";
import Preloader from "../PreLoaderComp/PreloaderComp";
import { toast, ToastContainer } from "react-toastify";

const RequestHistoryComponent = () => {
  const [updatedData, setUpdatedData] = useState([]);
  const token = localStorage.getItem("token");

  const fetchHistory = async () => {
    const { data } = await axios.get(
      "http://localhost:4040/api/v1/individuals/pickup-history",
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return data;
  };

  const { data, error, isLoading } = useQuery("data", fetchHistory);

  useEffect(() => {
    if (data) {
      const fetchRequestData = async () => {
        const requestData = await Promise.all(
          data.map(async (item) => {
            if (item.status === "accepted") {
              const scrapDealerName = await findAcceptedScrapDealer(item.acceptedBy);
              return { ...item, scrapDealerName };
            } else {
              return { ...item, scrapDealerName: null };
            }
          })
        );
        setUpdatedData(requestData.reverse());
      };
      fetchRequestData();
    }
  }, [data]);

  if (isLoading) return <Preloader />;
  if (error) toast.error(error.message);

  const findAcceptedScrapDealer = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:4040/api/v1/scrap-dealers/find-scrap-dealer?id=${id}`
      );
      return response.data.applicantName;
    } catch (error) {
      console.log("Error finding accepted scrap dealer", error);
      return null;
    }
  };

  return (
    <div className="Main_Container">
      <ToastContainer />
      <div className="history-content">
        <div className="">
          <h4 className="title">My Requests</h4>
          <DateGraphComp data={updatedData} title={"Request History"} />
        </div>

        <div className="request-list">
          {updatedData.map((ele, key) => (
            <RequestElements key={key} ele={ele} />
          ))}
        </div>
      </div>
    </div>
  );
};

const RequestElements = ({ ele }) => {
  return (
    <div className="Container">
      <div className="image-container">
        <img src={ele.image} className="request-img" alt="Request" />
      </div>
      <div className="content">
        <div className="x">
          <h3>{ele.description}</h3>
          <p className="date">
            {new Date(ele.selectedDateTime).toLocaleString().split(",")}
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
          <div>
            {ele.requestStatus === "pending" && (
              <div className="processing-icon">
                <FaRegClock className="icon" color="#E8DF55" />
              </div>
            )}
            {ele.requestStatus === "Completed" && (
              <div className="completed-icon">
                <FaCheck className="icon" color="#00bf00" />
              </div>
            )}
            {ele.requestStatus === "Rejected" && (
              <div className="rejected-icon">
                <CiNoWaitingSign className="icon" color="#ACDA33" />
              </div>
            )}
          </div>
          {ele.requestStatus === "accepted" && (
            <p>Accepted by {ele.scrapDealerName || "John"}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RequestHistoryComponent;
