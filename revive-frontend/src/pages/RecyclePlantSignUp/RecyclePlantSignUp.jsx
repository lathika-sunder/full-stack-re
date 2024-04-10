import React from 'react'

import axios from "axios";
import { CssVarsProvider } from "@mui/joy/styles";
import OtpInput from "react-otp-input";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import { CgSpinner } from "react-icons/cg";
import "./RecyclePlantSignUp.css";
import auth from "../../assets/firebase/setup";
import { ToastContainer, toast } from "react-toastify";
import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa";

const RecyclePlantSignUp = () => {
    const navigate = useNavigate();
    const [isOtpSent, setIsOtpSent] = React.useState(false);
    const [isOtpVerified, setIsOtpVerified] = React.useState(true);
    const [otp, setOtp] = React.useState("");
    const [user, setUser] = React.useState(null);
    const [formData, setFormData] = React.useState({
      companyName: "",
      applicantName: "",
      applicantRole: "",
      email: "",
      address: "",
      mobile: "",
      password: "",
      gstNumber: "",
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        // const recaptcha = new RecaptchaVerifier(auth, "recaptcha-container", {});
        console.log(formData);
        const confirmation = await signInWithPhoneNumber(
          auth,
          formData.mobile
        );
        if (confirmation) setIsOtpSent(true);
        setUser(confirmation);
      } catch (error) {
        console.log("error", error);
      }
    };
  
    const postData = (request, response) => {
      axios
        .post("http://localhost:4040/api/v1/enterprises", formData)
        .then((response) => {
          alert("Account Created Successfully");
          navigate("/login");
        })
        .catch((err) => alert(err));
    };
  
    const verifyOTP = async () => {
      try {
        const result = await user.confirm(otp);
        if (result) {
          toast.success("Account Created Successfully");
          setIsOtpVerified(true);
        }
      } catch (error) {
        toast.error("OTP Incorrect.Try again");
        console.log(error);
      }
    };
  
    const verifyGST = () => {
      try {
        if (formData.gstNumber === "abc") {
          console.log("GST Verified");
          postData();
          navigate("/login");
          
        } else {
          toast.error("GST ID Incorrect.Try again");
          
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
      <div className="recycle-plant-signup">
        <CssVarsProvider>
        <ToastContainer />
        <main>
          <Sheet
            sx={{
              width: 300,
              mx: "auto",
              my: 8,
              py: 3,
              px: 6,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              color:"#fff",
              backgroundColor: "#171717",
            }}
          >
            {isOtpSent ? (
              <div className="enterprise-verification">
                <h1>Let us verify you...</h1>
  
                {!isOtpVerified ? (
                  <div className="otp-verification">
                    <div className="verification-container">
                      <p className="otp-confirm-msg">
                        Verify OTP for {formData.mobile}
                      </p>
                      <OtpInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={6}
                        separator={<span> </span>}
                        inputStyle="otp-input"
                        renderInput={(props) => <input {...props} />}
                        containerStyle="otp-container"
                      />
                      <Button color="success" onClick={verifyOTP}>
                        <CgSpinner /> Verify OTP
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="gst-verification">
                    <form onSubmit={verifyGST}>
                      <FormControl>
                        <FormLabel>GST Number</FormLabel>
                        <input
                          name="gstNumber"
                          type="text"
                          value={formData.gstNumber}
                          onChange={handleChange}
                        />
                        <Button onClick={verifyGST}>
                          <FaCheck /> Verify GST
                        </Button>
                      </FormControl>
                    </form>
                  </div>
                )}
              </div>
            ) : (
              <div>
                <div>
                  <Typography level="h4" component="h1">
                    <b>Welcome!</b>
                  </Typography>
                  <Typography level="body-sm">
                    Create an account to start.
                  </Typography>
                </div>
                <form onSubmit={handleSubmit}>
                  <FormControl>
                    <FormLabel>Company Name</FormLabel>
                    <input
                      name="companyName"
                      type="text"
                      placeholder="Your Company's Name"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Applicant Name</FormLabel>
                    <input
                      name="applicantName"
                      type="text"
                      placeholder="Your Name"
                      value={formData.applicantName}
                      onChange={handleChange}
                      required
                    />
                    <FormLabel>Applicant Role</FormLabel>
                  </FormControl>
                  <FormControl>
                    <input
                      name="applicantRole"
                      type="text"
                      placeholder="Your Role"
                      value={formData.applicantRole}
                      onChange={handleChange}
                      required
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Email</FormLabel>
                    <input
                      name="email"
                      type="email"
                      placeholder="johndoe@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Mobile</FormLabel>
                    <input
                      name="mobile"
                      type="phone"
                      placeholder="XXXXXXXXXXX"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                    />
                  </FormControl>
  
                  <FormControl>
                    <FormLabel>Password</FormLabel>
                    <input
                      name="password"
                      type="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Address</FormLabel>
                    <input
                      name="address"
                      type="text"
                      placeholder="Your Address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                    />
                  </FormControl>
  
                  <button
                    type="submit"
                    className='btn-primary'
                    sx={{ mt: 1, textAlign: "center", backgroundColor: "green" }}
                    onSubmit={handleSubmit}
                  >
                    Sign Up
                  </button>
                </form>
                <Typography
                  endDecorator={<Link href="/login">Log in</Link>}
                  fontSize="sm"
                  sx={{ alignSelf: "center" }}
                >
                  Already have an account?
                </Typography>
                <div id="recaptcha-container"></div>
              </div>
            )}
          </Sheet>
        </main>
      </CssVarsProvider>
      </div>
    )
}

export default RecyclePlantSignUp