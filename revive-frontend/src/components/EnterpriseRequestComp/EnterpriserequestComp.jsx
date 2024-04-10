import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import OrderSummaryComponent from "../RequestPickupComponent/OrderSummaryComponent";
import { useNavigate } from "react-router-dom";
import "./EnterpriserequestComp.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";
import { RiFileUploadLine } from "react-icons/ri";

const EnterpriserequestComp= () => {
  const [electricProducts, setElectricProducts] = useState([]);
  axios
    .get("http://localhost:4040/api/v1/electricProducts")
    .then((response) => {
      setElectricProducts(response.data);
    });

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

  const postData = () => {
    axios.post("http://localhost:4040/api/v1/individuals/", {
      image,
      requestStatus: "pending",
      description,
      quantity,
      tags,
      address,
      selectedDateTime,
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    });
  };

  const handleSubmit = () => {
    // postData()
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
          <div className="form-container">
            <div className="column">
              <div className="image-container">
                <div className="file-input">
                  <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    className="visually-hidden" // Visually hide the input
                  />
                  <label htmlFor="image-upload" className="file-label">
                    <RiFileUploadLine size={24} />
                    <span>Click to Upload Image</span>
                  </label>
                </div>
              </div>

              <div className="input-container">
                <p>Description</p>
                <textarea
                  onChange={(e) => setDescription(e.target.value)}
                  type="text"
                  value={description}
                  placeholder="Describe your waste(optional)..."
                  required
                  className="description-input"
                />
              </div>

              <div className="input-container">
                <p>Quantity</p>
                <div className="quantity-container">
                  <Button
                    color="success"
                    onClick={() => handleQuantityChange(-1)}
                    className="btn-primary"
                  >
                    -
                  </Button>
                  <input
                    type="text"
                    placeholder="Quantity"
                    value={quantity}
                    readOnly
                    className="quantity-input"
                    required
                  />
                  <Button
                    onClick={() => handleQuantityChange(1)}
                    color="success"
                    className="btn-primary"
                  >
                    +
                  </Button>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="input-container">
                <p>Category</p>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={electricProducts}
                  onChange={(event, value) =>
                    setTags((prevData) => [...prevData, value.label])
                  }
                  isOptionEqualToValue={(option, value) =>
                    option.label === value.label
                  }
                  className="category-input"
                  
                  renderInput={(params) => <TextField {...params} />}
                />
              </div>
              <div className="input-container">
                <p>Address</p>
                <textarea
                  onChange={(e) => setAddress(e.target.value)}
                  type="text"
                  value={address}
                  placeholder="Address"
                />
              </div>
              
              <div className="date-picker-container">
              <p>Pickup date <br/>& time </p>
                <DatePicker
                  selected={selectedDateTime}
                  onChange={handleTimeChange}
                  className="custom-date-picker"
                  showTimeSelect
                  dateFormat="MMMM d, yyyy h:mm aa"
                />
              </div>
            </div>
          </div>

          <br />

          <form className="container" onSubmit={() => navigate("/proceed")}>
            <button className="btn-primary" onClick={handleSubmit}>
              Proceed
            </button>
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

export default EnterpriserequestComp;
