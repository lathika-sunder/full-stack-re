import "./ScrapDealersDashboard.css";
import React, { useEffect, useState } from "react";
import { FaMoneyCheckAlt, FaPhone } from "react-icons/fa";
import tickIcon from "./../../assets/icons/tick.svg";
import crossIcon from "./../../assets/icons/cross.svg";
import { IoMdContact } from "react-icons/io";
import Button from "@mui/material/Button";
import { setCurrentScreen } from "firebase/analytics";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  "pk_test_51OpkbkSIhC4KUlo2ypJGhU7yjmJ8z2nxXB43dObBsbqNF0X643TXVykNyeQX1BeFoUn5Rixf8YNFUCXu5AqlR2Kv00UZZIqX6e"
);

import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import CheckOutPage from "../CheckOutPage/CheckOutPage";
import ImageUploadDialog from "../../components/ImageUploadDialog/ImageUploadDialog";

export const floatingWindow = () => {
  return (
    <div>
      Hey
      <button onClick={() => setToggle(!toggle)}>Close</button>
    </div>
  );
};

const ScrapDealersDashboard = () => {
  const base_url = "http://localhost:4040/api/v1";
  const [tasks, setTask] = useState([]);
  const [notifications, setNotification] = useState([]);
  const [price, setPrice] = useState(0);
  const [isEditingDp, setIsEditingDp] = useState(false);

  useEffect(() => {
    fetch("http://localhost:4040/api/v1/scrap-dealers/get-all-requests")
      .then((res) => res.json())
      .then((data) => setNotification(data));
    fetch(
      "http://localhost:4040/api/v1/scrap-dealers/get-all-accepted-requests"
    )
      .then((res) => res.json())
      .then((data) => setTask(data));
  }, []);

  const handleTick = async (reqId) => {
    const token = window.localStorage.getItem("token");
    console.log("token: ", token);

    fetch(`${base_url}/scrap-dealers/update-request`, {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        requestId: reqId,
        status: "Accepted",
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .then(toast.success("Accepted Request"))
      .catch((err) => console.log(err));
  };

  const handleCross = () => {
    console.log("Clicked");
  };

  const handlePrompt = () => {
    let price_var = prompt("Enter the quotation: ");
    setPrice(price_var);
    makePayment(price_var);
  };

  const makePayment = async () => {};

  const showUploadDpDialog = () => {
    setIsEditingDp(true);
  };

  return (
    <>
      {isEditingDp ? (
        <ImageUploadDialog  />
      ) : (
        <div className="task-manager">
          <ToastContainer />
          <div className="page-content">
            <div className="header">Schedule - Today Tasks</div>
            <div className="content-categories"></div>

            <div className="tasks-wrapper">
              {tasks.map((task) => (
                <div className="task" key={task.id}>
                  <input
                    className="task-item"
                    name="task"
                    type="checkbox"
                    id={`item-${task.id}`}
                    checked={task.requestStatus !== "Waiting"}
                  />
                  <label htmlFor={`item-${task.id}`}>
                    <span className="label-text">{task.description}</span>
                  </label>
                  <div className="btns">
                    <span className={`tag ${task.requestStatus.toLowerCase()}`}>
                      {task.requestStatus}
                    </span>
                    <a href="http://localhost:3000" target="__blank">
                      {" "}
                      <Button>Complete</Button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="notification-container">
              <div className="header">Notifications</div>
              <div className="tasks-wrapper notifications">
                {notifications.map((notifications) => (
                  <div className="task" key={notifications.id}>
                    <input
                      className="task-item"
                      name="notifications"
                      type="checkbox"
                      id={`item-${notifications.id}`}
                      checked={notifications.status !== "Waiting"}
                    />
                    <label htmlFor={`item-${notifications.id}`}>
                      <span className="label-text">
                        {notifications.description}
                      </span>
                    </label>
                    <span
                      className={`tag ${notifications.requestStatus.toLowerCase()}`}
                    >
                      {notifications.requestStatus}
                    </span>

                    <img
                      src={tickIcon}
                      className="icons"
                      onClick={() => handleTick(notifications._id)}
                    />
                    <img
                      src={crossIcon}
                      className="icons"
                      onClick={handleCross}
                    />

                    {/* <button onClick={() => console.log("Clicked")}>Accept</button>
              <button onClick={() => console.log("Clicked Rejected")}>Reject</button> */}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="right-bar">
            <div className="top-part">
              <IoMdContact
                className="person-icon"
                onClick={showUploadDpDialog}
              />
            </div>
            <div className="header">Schedule</div>
            <div className="right-content">
              <div className="task-box yellow">
                <div className="description-task">
                  <div className="task-name">Contact US</div>
                  <div className="members">
                    <FaPhone />
                  </div>
                </div>
              </div>
              <div className="task-box blue">
                <div className="description-task">
                  <div className="time"></div>
                  <div className="task-name">Auction Status</div>
                </div>
                <div className="more-button"></div>
                <div className="members">
                  <img
                    src="https://images.unsplash.com/photo-1484688493527-670f98f9b195?ixlib=rb-1.2.1&auto=format&fit=crop&w=2230&q=80"
                    alt="member"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
                    alt="member-2"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1455504490126-80ed4d83b3b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
                    alt="member-3"
                  />
                </div>
              </div>
              <div className="task-box red">
                <div className="description-task">
                  <div className="task-name">
                    <Link to="http://localhost:5174/auction-website/admin">
                      Host Auction Now
                    </Link>
                    <div className="more-button"></div>
                    <div className="members">
                      <FaMoneyCheckAlt />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ScrapDealersDashboard;
