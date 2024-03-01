import React, { useState } from 'react';

function PaymentModule() {
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount === "") {
      alert("Please enter amount");
    } else {
      var options = {
        key: "rzp_test_RWjJ4m72mTVAS8",
        key_secret: "wlgHB4mWJutN1GdyGKh4UJHD",
        amount: amount * 100,
        currency: "INR",
        name: "STARTUP_PROJECTS",
        description: "for testing purpose",
        handler: function (response) {
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name: "Velmurugan",
          email: "mvel1620r@gmail.com",
          contact: "7904425033"
        },
        notes: {
          address: "Razorpay Corporate office"
        },
        theme: {
          color: "#3399cc"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
      pay.on('payment.failed',function(response){
        console.log(response);
      });
      pay.on('payment.captured',function(response){
        console.log("captured");
        console.log(response);
      });
      pay.on('payment.authorized',function(response){
        console.log("authorized");
        console.log(response);
      });
      alert(`Payment initiated for amount: ${amount}`);
    }
  };

  return (
    <div className="App">
      <h2>Razorpay Payment Integration Using React</h2>
      <br />
      <input
        type="text"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <br /><br />
      <button onClick={handleSubmit}>Pay now</button>
    </div>
  );
}

export default PaymentModule;
