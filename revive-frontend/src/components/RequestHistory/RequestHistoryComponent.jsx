import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { CiNoWaitingSign } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa6";
import "./RequestHistory.css";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import axios from "axios";
import DateGraphComp from "../DateGraphComp/DateGraphComp";

const RequestHistoryComponent = () => {
  const [data, setData] = useState([]);

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

        const requestData = response.data.map(async (item) => {
          if (item.status === "accepted") {
            const scrapDealerName = await findAcceptedScrapDealer(
              item.acceptedBy
            );
            return { ...item, scrapDealerName };
          } else {
            return { ...item, scrapDealerName: null };
          }
        });

        const updatedData = await Promise.all(requestData);
        setData(updatedData.reverse());
      } catch (error) {
        console.log("Error getting user sales history", error);
      }
    };

    fetchHistory();
  }, []);

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
      {/* <Breadcrumbs aria-label="breadcrumb">
      <Link color={"#00bf44"} href="/">
        Home
      </Link>
      <Link color={"#00bf44"} href="/dashboard/individual">
        Dashboard
      </Link>
      <Typography color="white"> RequestHistory</Typography>
    </Breadcrumbs> */}

      <div className="history-content">
        <div className="">
          <h1 className="title">Requests</h1>
          <DateGraphComp data={data} title={"Request History"}></DateGraphComp>
        </div>

        <div className="request-list">
          {data.map((ele, key) => (
            <RequestElements key={key} ele={ele}></RequestElements>
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
        <img src={ele.image} className="request-img"></img>
      </div>
      <div className="content">
        <div className="x">
          <h3>{ele.description}</h3>

          <p className="date">
            {" "}
            {new Date(ele.selectedDateTime).toLocaleString().split(",")}
          </p>
          <div className="tags">
            {ele.tags.map((tag, index) => (
              <span className="waste-tags" key={index}>
                {tag}{" "}
              </span>
            ))}
          </div>
          <p>{ele.quantity} units</p>
          <p className="address">{ele.address}</p>
        </div>

        <div className="status">
          <div>
            {ele.requestStatus === "pending" ? (
              <div className="processing-icon">
                <FaRegClock className="icon" color="#E8DF55" />
              </div>
            ) : (
              ""
            )}
            {ele.requestStatus === "Completed" ? (
              <div className="completed-icon">
                <FaCheck className="icon" color="#00bf00" />
              </div>
            ) : (
              ""
            )}
            {ele.requestStatus === "Rejected" ? (
              <div className="rejected-icon">
                <CiNoWaitingSign className="icon" color="ACDA33" />
              </div>
            ) : (
              ""
            )}
          </div>
          {ele.requestStatus === "accepted" && <p>Accepted by John</p>}
        </div>
      </div>
    </div>
  );
};

export default RequestHistoryComponent;
