import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import InputTag from "./InputTag";
import OrderSummaryComponent from "../RequestPickupComponent/OrderSummaryComponent";
import { useNavigate } from "react-router-dom";
import "./RequestPickupComponent.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";

const RequestPickupComponent = () => {
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

  const postData=()=>{
    axios.post("http://localhost:4040/api/v1/individuals/",{
      image,
      requestStatus:"pending",
      description,
      quantity,
      tags,
      address,
      selectedDateTime
    })
  }

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
          <div className="image-container">
            <p>Upload Image</p>
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
          <p>Description</p>
          <input
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            value={description}
            placeholder="description"
          />
          <p>Quantity</p>
          <div className="quantity-container">
            <Button color="success" onClick={() => handleQuantityChange(-1)}>
              -
            </Button>
            <input
              type="text"
              placeholder="Quantity"
              value={quantity}
              readOnly
              className="quantity-input"
            />
            <Button onClick={() => handleQuantityChange(1)}>+</Button>
          </div>
          <p>Category</p>
          <Autocomplete
            style={{ border: "0" }}
            id="include-input-in-list"
            includeInputInList
            onChange={(event, value) =>
              setTags((prevData) => [...prevData, value.label])
            }
            options={electricProducts}
            isOptionEqualToValue={(option, value) =>
              option.label === value.label
            }
            renderInput={(params) => <TextField {...params} />}
          />
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
            renderInput={(params) => <TextField {...params} />}
          />
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
            renderInput={(params) => <TextField {...params} />}
          />
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
            renderInput={(params) => <TextField {...params} />}
          />
          <p>Address</p>
          <input
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            value={address}
            placeholder="Address"
          />
          <p>Choose Pickup date & time slot</p>
          <div className="date-picker-container">
            <DatePicker
              selected={selectedDateTime}
              onChange={handleTimeChange}
              showTimeSelect
              dateFormat="MMMM d, yyyy h:mm aa"
            />
          </div>
          <br />

          <form className="container" onSubmit={() => navigate("/proceed")}>
            <Button variant="contained" color="success" onClick={handleSubmit}>
              Proceed
            </Button>
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
