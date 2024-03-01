import "./ScrapDealersDashboard.css";
import React from "react";
import { FaMoneyCheckAlt,  FaPhone } from "react-icons/fa";
import tickIcon from "./../../assets/icons/tick.svg"
import crossIcon from "./../../assets/icons/cross.svg"
import { IoMdContact } from "react-icons/io";

const ScrapDealersDashboard = () => {
  const base_url = "http://localhost:4040/api/v1";

  const tasks = [
    { id: 1, description: "Dashboard Design Implementation", status: "Approved" },
    { id: 2, description: "Create a userflow", status: "In Progress" },
    { id: 3, description: "Application Implementation", status: "In Review" },
    { id: 4, description: "Create a Dashboard Design", status: "In Progress" },
    { id: 5, description: "Create a Web Application Design", status: "Approved" },
  ];
  const notifications = [
    { id: 6, description: "Interactive Design", status: "In Review" },
    { id: 7, description: "Dashboard Design Implementation", status: "Waiting" },
    { id: 8, description: "Create a userflow", status: "Waiting" },
    { id: 9, description: "Application Implementation", status: "Waiting" },
    { id: 10, description: "Create a Dashboard Design", status: "Waiting" },
  ];

  const handleTick = () =>{
        const token = window.localStorage.getItem("token");
        console.log(token);
        fetch(`${base_url}/scrap-dealers/change-request-status`,{
          method: "GET",
          headers: {
            'Authorization' : `${token}`,
          }
        }).then((res)=>res.json()).then((data)=>console.log(data));
          
  }

  const handleCross = () =>{
    console.log("clicked!");
  }


  return (
    <div className="task-manager">
      <div className="page-content">
        <div className="header">Schedule - Today Tasks</div>
        <div className="content-categories">
          <div className="label-wrapper">
            <input className="nav-item" name="nav" type="radio" id="opt-1" />
            <label className="category" for="opt-1">
              Pending
            </label>
            <label className="category" for="opt-1">
              All
            </label>
          </div>
        </div>

        <div className="tasks-wrapper">
          {tasks.map((task) => (
            <div className="task" key={task.id}>
              <input
                className="task-item"
                name="task"
                type="checkbox"
                id={`item-${task.id}`}
                checked={task.status !== "Waiting"}
              />
              <label htmlFor={`item-${task.id}`}>
                <span className="label-text">{task.description}</span>
              </label>
              <span className={`tag ${task.status.toLowerCase()}`}>
                {task.status}
              </span>
            </div>
          ))}
        </div>
        <div className="header">Notifications</div>
        <div className="tasks-wrapper">
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
                <span className="label-text">{notifications.description}</span>
              </label>
              <span className={`tag ${notifications.status.toLowerCase()}`}>
                {notifications.status}
              </span>


              <img src={tickIcon} className="icons" onClick={handleTick}/>
              <img src={crossIcon} className="icons" onClick={handleCross}/>
              
              {/* <button onClick={() => console.log("Clicked")}>Accept</button>
              <button onClick={() => console.log("Clicked Rejected")}>Reject</button> */}
            </div>
          ))}
        </div>
      </div>
      <div className="right-bar">
        <div className="top-part">
        <IoMdContact/>
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
                Host Auction Now
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
  );
};

export default ScrapDealersDashboard;
