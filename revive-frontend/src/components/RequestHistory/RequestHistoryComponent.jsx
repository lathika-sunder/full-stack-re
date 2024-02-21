import React from "react";
import { FaCheck } from "react-icons/fa";
import { CiNoWaitingSign } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa6";
import './RequestHistory.css'



const RequestElements = ({ele}) =>{
    return(
        <div className="Container">
            <div className="image-container">
                <img
                    style={{ padding: "10px" }}
                    width={175}
                    height={150}
                    src={ele.img[0] ? URL.createObjectURL(ele.img[0]) : null}
                    
                />
            </div>
            <div className="x">
                <h2>{ele.title}</h2>
                <p>Created at: {ele.date.toString()}</p>
                <p>Tags : {ele.tags.map((tag)=> {return(<p>{tag}</p>)})
                }</p>
                <p>Quantity: {ele.qty}</p>
                <p>Description: {ele.desc}</p>
            </div>

            <div  className="status">
                <p>Request Status</p>
                <div>
                    {ele.status === "Pending" ? 
                    <div className="processing-icon">
                        <FaRegClock className="icon"/>
                    </div> : ""
                    }
                    {ele.status === "Completed" ? 
                    <div className="completed-icon">
                        
                        <FaCheck className="icon"/>
                    </div> : ""
                    }
                    {ele.status === "Rejected" ? 
                    <div className="rejected-icon">
                        <CiNoWaitingSign className="icon"/>
                    </div> : ""
                    }
                </div>
                <p>{ele.status}</p>
            </div>
            
        </div>
    )
}

const RequestHistoryComponent = () =>{

    const data = [
        {
          title: "Request 1",
          date: new Date(),
          tags: ["Tag1", "Tag2", "Tag3"],
          qty: 5,
          desc: "Description for Request 1",
          status: "Pending",
          img: [] // You can include image URLs here if needed
        },
        {
          title: "Request 2",
          date: new Date(),
          tags: ["Tag4", "Tag5"],
          qty: 3,
          desc: "Description for Request 2",
          status: "Completed",
          img: [] // You can include image URLs here if needed
        },
        {
          title: "Request 3",
          date: new Date(),
          tags: ["Tag6", "Tag7"],
          qty: 2,
          desc: "Description for Request 3",
          status: "Rejected",
          img: [] // You can include image URLs here if needed
        }
      ];
      

    return(
        <div className="Main_Container">
            <h1>Your Request History</h1>

            <div className="request-list">
                {
                    data.map((ele,key) => {
                        console.log(ele.tags);
                        return (
                            <RequestElements ele = {ele}></RequestElements>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default RequestHistoryComponent;