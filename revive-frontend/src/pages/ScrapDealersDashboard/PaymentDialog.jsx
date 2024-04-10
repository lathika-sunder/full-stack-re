import React from "react";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutPage from "./CheckOutPage"; // Assuming the path is correct

const PaymentDialog = ({ open, handleClose, stripePromise }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Checkout</DialogTitle>
      <DialogContent>
        <Elements stripe={stripePromise}>
          <CheckOutPage />
        </Elements>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentDialog;
