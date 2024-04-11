import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import axios from "axios";

const OrderSummaryComponent = ({
  selectedDateTime,
  image,
  imageData,
  description,
  tags,
  quantity,
  address,
}) => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    postData();
    console.log("Order submitted");
    navigate("/request-history/individual");
  };
  const postData = () => {
    const token = localStorage.getItem("token");
    const formData = new FormData();

    formData.append("image", image);
    formData.append("requestStatus", "pending");
    formData.append("description", description);
    formData.append("quantity", quantity);
    tags.forEach((tag, index) => {
      formData.append(`tags[${index}]`, tag);
    });
    formData.append("address", address);
    formData.append("selectedDateTime", selectedDateTime);
  
    const headers = {
      Authorization: token,
      "Content-Type": "multipart/form-data",
    };
  
    axios
      .post("http://localhost:4040/api/v1/individuals/request-pickup", formData, { headers })
      .then((response) => {
        console.log("Successfully submitted", response);
      })
      .catch((error) => {
        console.log("Error Submitting form", error);
      });
  };
  

  return (
    <div className="order-pickup-summary">
      <div className="container">
        <h2>Order Summary</h2>
        <p>
          <strong>Selected time slot:</strong> {selectedDateTime.toString()}
        </p>
        <div className="image-container">
          <img
            style={{ padding: "10px" }}
            width={150}
            height={100}
            src={imageData}
            
          />
        </div>
        <p>
          <strong>Description:</strong> {description}
        </p>
        <p>
          <strong>Tags:</strong> {tags.join(", ")}
        </p>
        <p>
          <strong>Quantity:</strong> {quantity}
        </p>
        <p>
          <strong>Address:</strong> {address}
        </p>

        <div className="buttons">
          {/* Submit Button */}
          <Button onClick={handleSubmit}>Submit Order</Button>

          {/* Edit Button */}
          <Link to="/sell-waste/individual">
            <Button>Edit Order</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSummaryComponent;
