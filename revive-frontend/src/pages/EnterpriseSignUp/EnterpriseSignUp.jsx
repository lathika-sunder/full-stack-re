import * as React from "react";
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
import "./EnterpriseSignUp.css";
import auth from "../../assets/firebase/setup";
import { ToastContainer, toast } from "react-toastify";
import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function EnterpriseSignUp() {

  const navigate = useNavigate();
  const [isOtpSent, setIsOtpSent] = React.useState(false);
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
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha-container", {});
      console.log(formData);
      const confirmation = await signInWithPhoneNumber(
        auth,
        formData.mobile,
        recaptcha
      );
      if (confirmation) setIsOtpSent(true);
      setUser(confirmation);
    } catch (error) {
      console.log("error",error)
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
        navigate("/login");
        postData();
      }
    } catch (error) {
      toast.error("OTP Incorrect.Try again");
      console.log(error);
    }
  };

  return (
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
            borderRadius: "sm",
            boxShadow: "md",
          }}
          variant="outlined"
        >
          {isOtpSent ? (
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
                  <Input
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
                  <Input
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
                  <Input
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
                  <Input
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
                  <Input
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
                  <Input
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
                  <Input
                    name="address"
                    type="text"
                    placeholder="Your Address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </FormControl>

                <Button
                  type="submit"
                  sx={{ mt: 1, textAlign: "center", backgroundColor: "green" }}
                  onSubmit={handleSubmit}
                >
                  Sign Up
                </Button>
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
  );
}
