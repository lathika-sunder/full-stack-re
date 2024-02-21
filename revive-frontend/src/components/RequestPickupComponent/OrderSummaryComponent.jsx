import React from "react";
import { Link } from "react-router-dom";

const OrderSummaryComponent = ({ selectedDateTime, image, description, tags, quantity, address }) => {

  
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

      {/* Submit button */}
      <button onClick={() => console.log("Order submitted")}>Submit Order</button>

      {/* Edit button */}
      <Link to="/requestpickup">
        <button>Edit Order</button>
      </Link>
    </div>
  );
};

export default OrderSummaryComponent;
