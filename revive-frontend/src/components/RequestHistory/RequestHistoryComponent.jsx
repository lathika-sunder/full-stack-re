import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { CiNoWaitingSign } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa6";
import './RequestHistory.css'
import axios from "axios";


const RequestHistoryComponent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        axios
            .get("http://localhost:4040/api/v1/individuals/pickup-history", {
                headers: {
                    Authorization: token,
                },
            })
            .then((response) => {
                console.log(response.data);
                setData(response.data);
            })
            .catch((error) => {
                console.log("Error getting user sales history", error);
            });
    }, []);

    return (
        <div className="Main_Container">
            <h1>Your Request History</h1>

            <div className="request-list">
                {data.map((ele, key) => (
                    <RequestElements key={key} ele={ele}></RequestElements>
                ))}
            </div>
        </div>
    );
};

const RequestElements = ({ ele }) => {
    return (
        <div className="Container">
            <div className="image-container">
                {ele.image && ele.image.length > 0 && (
                    <img
                        style={{ padding: "10px" }}
                        width={175}
                        height={150}
                        src={ele.image[0]._id} // Assuming 'url' is the property holding the image URL
                        alt="Requested Item"
                    />
                )}
            </div>
            <div className="x">
                <h2>{ele.description}</h2>
                <p>Created at: {ele.selectedDateTime}</p>
                <p>
                    Tags :{" "}
                    {ele.tags.map((tag, index) => (
                        <span className="waste-tags" key={index}>{tag}, </span>
                    ))}
                </p>
                <p>Quantity: {ele.quantity}</p>
                <p>Address: {ele.address}</p>
            </div>

            <div className="status">
                <p>Request Status</p>
                <div>
                    {ele.requestStatus === "pending" ? (
                        <div className="processing-icon">
                            <FaRegClock className="icon" />
                        </div>
                    ) : (
                        ""
                    )}
                    {ele.requestStatus === "Completed" ? (
                        <div className="completed-icon">
                            <FaCheck className="icon" />
                        </div>
                    ) : (
                        ""
                    )}
                    {ele.requestStatus === "Rejected" ? (
                        <div className="rejected-icon">
                            <CiNoWaitingSign className="icon" />
                        </div>
                    ) : (
                        ""
                    )}
                </div>
                <p>{ele.requestStatus}</p>
            </div>
        </div>
    );
};


export default RequestHistoryComponent;
