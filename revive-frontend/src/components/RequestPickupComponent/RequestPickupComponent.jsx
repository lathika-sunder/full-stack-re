import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import InputTag from "./InputTag";
import OrderSummaryComponent from "../RequestPickupComponent/OrderSummaryComponent";
import { useNavigate } from "react-router-dom";
import "./RequestPickupComponent.css";

const RequestPickupComponent = () => {
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [image, setImage] = useState([]);
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [address, setAddress] = useState("");
  const [showSummary, setShowSummary] = useState(false);


  const handleQuantityChange = (amount) => {
    setQuantity((prevQuantity) => prevQuantity + amount);
  };

  const handleTimeChange = (time) => {
    setSelectedDateTime(time);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files);
  };

  const handleSubmit = () => {
    console.log("Selected Date and Time:", selectedDateTime);
    console.log("Image:", image);
    console.log("Description:", description);
    console.log("Tags:", tags);
    console.log("Quantity:", quantity);
    console.log("Address:", address);
    setShowSummary(true);
  };

  const navigate = useNavigate();

  return (
    <div className="request-pickup-container">
      <h1>Request a Pickup</h1>
      {!showSummary ? (
        <>
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
          <input onChange={handleImageChange} multiple type="file" />
          <input
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            value={description}
            placeholder="description"
          />
          <div className="quantity-container">
            <button onClick={() => handleQuantityChange(-1)}>-</button>
            <input
              type="text"
              placeholder="Quantity"
              value={quantity}
              readOnly
              className="quantity-input"
            />
            <button onClick={() => handleQuantityChange(1)}>+</button>
            <div className="quantity-head">Quantity</div>
          </div>
          <InputTag tags={tags} setTags={setTags} />

          <input
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            value={address}
            placeholder="Address"
          />
          <div className="date-picker-container">
            <h4>Choose Pickup date & time slot</h4>
            <DatePicker
              selected={selectedDateTime}
              onChange={handleTimeChange}
              showTimeSelect
              dateFormat="MMMM d, yyyy h:mm aa"
            />
          </div>
          <form className="container" onSubmit={() => navigate("/proceed")}>
            <button onClick={handleSubmit}>Proceed</button>
          </form>
        </>
      ) : (
        <OrderSummaryComponent
          selectedDateTime={selectedDateTime}
          image={image}
          description={description}
          tags={tags}
          quantity={quantity}
          address={address}
        />
      )}
    </div>
  );
};

export default RequestPickupComponent;
