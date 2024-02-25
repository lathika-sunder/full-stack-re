import React, { useEffect } from "react";
import { Link ,useNavigate} from "react-router-dom";
import Button from '@mui/material/Button'
import axios from "axios";

const OrderSummaryComponent = ({ selectedDateTime, image, description, tags, quantity, address }) => {

  const navigate =useNavigate()
 

  const handleSubmit=() => {
    postData()
    console.log("Order submitted")
    navigate('/request-history/individual')
  }
  const postData = () => {
    const token = localStorage.getItem('token');
    


    const headers = {
        'Authorization': token
    };

    const requestData = {
        image,
        requestStatus: "pending",
        description,
        quantity,
        tags,
        address,
        selectedDateTime
    };

    axios.post("http://localhost:4040/api/v1/individuals/request-pickup", requestData, { headers })
        .then((response) => {
            console.log("Successfully submitted", response);
            
        })
        .catch((error) => {
            console.log(error);
        });
        
};



  return (
    <div className="container">
      <h2>Order Summary</h2>
      <p><strong>Selected time slot:</strong> {selectedDateTime.toString()}</p>
      <div className="image-container">
        {Array.from(image).map((item, index) => (
          <span key={index}>
            <img
              style={{ padding: "10px" }}
              width={150}
              height={100}
              src={item ? URL.createObjectURL(item) : null}
              alt={`Product ${index + 1}`}
            />
          </span>
        ))}
      </div>
      <p><strong>Description:</strong> {description}</p>
      <p><strong>Tags:</strong> {tags.join(", ")}</p>
      <p><strong>Quantity:</strong> {quantity}</p>
      <p><strong>Address:</strong> {address}</p>

      {/* Submit Button */}
      <Button onClick={handleSubmit}>Submit Order</Button>

      {/* Edit Button */}
      <Link to="/sell-waste/individual">
        <Button >Edit Order</Button>
      </Link>
    </div>
  );
};

export default OrderSummaryComponent;
