import React from "react";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import './CheckOutPage.css'
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { Button } from "@mui/material";
import axios from "axios";

const CheckOutPage = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handlePayment = async (event) => {
    event.preventDefault();
    const response = await axios.post(
      `http://localhost:4040/api/v1/scrap-dealers/create-payment-intent`,
      {
        amount: 1000, // Hardcoded amount, you may replace this with a dynamic value
      }
    );
    if (response.status === 200) {
      const confirmPayment = await stripe.confirmCardPayment(
        response.data.client_secret,
        {
          payment_method: {
            card: elements.getElement(CardNumberElement),
          },
        }
      );
      if (confirmPayment.paymentIntent.status === "succeeded") {
        console.log("payment confirmed");
      }
    }
  };

  return (
    <form onSubmit={handlePayment} className="checkout-form">
      <div className="form-row">
        <label>Card Number</label>
        <CardNumberElement className="card-element" />
      </div>
      <div className="form-row">
        <label>Expiry Date</label>
        <CardExpiryElement className="card-element" />
      </div>
      <div className="form-row">
        <label>CVC</label>
        <CardCvcElement className="card-element" />
      </div>
      <Button variant="contained" color="primary" type="submit">
        Confirm Payment
      </Button>
    </form>
  );
};

export default CheckOutPage;
