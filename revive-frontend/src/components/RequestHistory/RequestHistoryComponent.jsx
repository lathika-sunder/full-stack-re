import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { CiNoWaitingSign } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa6";
import './RequestHistory.css'
import axios from "axios";


const RequestHistoryComponent = () => {
    // const [data, setData] = useState([]);
    // const [acceptedScrapDealer,setAcceptedScrapDealer]=useState("")
   
    // const findAcceptedScrapDealer = (id) => {
    //     console.log("Scrap dealer",id); 
    //     axios.get(`http://localhost:4040/api/v1/scrap-dealers/find-scrap-dealer?id=${id}`)
    //         .then((response) => {
    //             setAcceptedScrapDealer(response.data.applicantName)
    //             console.log(response.data.applicantName)
    //         })
    //         .catch(err => console.log(err));
    // }
    
    // useEffect(() => {
    //     const token = localStorage.getItem("token");
    //     axios.get("http://localhost:4040/api/v1/individuals/pickup-history", {
    //             headers: {
    //                 Authorization: token,
    //             },
    //         })
    //         .then((response) => {
    //             setData(response.data.map(item => ({
    //                 ...item,
    //                 scrapDealerName: item.status === "accepted" ? findAcceptedScrapDealer(item.acceptedBy) : null
    //             })));
    //         })
    //         .catch((error) => {
    //             console.log("Error getting user sales history", error);
    //         });
    // }, []);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get("http://localhost:4040/api/v1/individuals/pickup-history", {
                    headers: {
                        Authorization: token,
                    },
                });

                const requestData = response.data.map(async (item) => {
                    if (item.status === "accepted") {
                        const scrapDealerName = await findAcceptedScrapDealer(item.acceptedBy);
                        return { ...item, scrapDealerName };
                    } else {
                        return { ...item, scrapDealerName: null };
                    }
                });

                const updatedData = await Promise.all(requestData);
                setData(updatedData);
            } catch (error) {
                console.log("Error getting user sales history", error);
            }
        };

        fetchHistory();
    }, []);

    const findAcceptedScrapDealer = async (id) => {
        try {
            const response = await axios.get(`http://localhost:4040/api/v1/scrap-dealers/find-scrap-dealer?id=${id}`);
            return response.data.applicantName;
        } catch (error) {
            console.log("Error finding accepted scrap dealer", error);
            return null;
        }
    }

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
       
            <div className="x">
                <h2>{ele.description}</h2>
                <p>Created at: {ele.selectedDateTime}</p>
                <p>
                    Tags :{" "}
                    {ele.tags.map((tag, index) => (
                        <span className="waste-tags" key={index}>{tag} </span>
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
                {
                    ele.requestStatus === 'accepted' && 
                    <p>Accepted by John</p>
                }
            </div>
        </div>
    );
};


export default RequestHistoryComponent;
