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
import "./LoginPage.css";
import auth from "../../assets/firebase/setup";
import { ToastContainer, toast } from "react-toastify";
import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

export default function LoginPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = React.useState({
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

  const sendCaptcha= async ()=>{
    const recaptcha = new RecaptchaVerifier(auth, "recaptcha-container", {});
    recaptcha.render()
    return recaptcha
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        
          axios.post('http://localhost:4040/api/v1/users/login', formData)
          .then((response) => {
            if (response.status === 201) {
              const { token,role } = response.data; 
              localStorage.setItem('token', token);

              if(role==="individual")
              {
                navigate('/dashboard/individuals')
              }
              else{
                navigate('/dashboard/enterprises')
              }
              alert("User Logged In Successfully");
              toast.success("Login successful");
            }
          })
          .catch((error) => {
            toast.error("Invalid  Credentials")
            console.log("Error Logging in", error);
          });
        
        
    
    } catch (error) {
        console.log('Recaptcha Verification failed', error);
    }
  };

  return (
   <div className="login-form">
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
            backgroundColor:"#171717"
          }}
         
        >
          <div>
            <div>
              <Typography level="h4" component="h1">
                <b>Login</b>
              </Typography>
              
              <br/>
            </div>
            <form onSubmit={handleSubmit}>
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

              <button
                type="submit"
                onSubmit={handleSubmit}
                className="btn-primary"
              >
                Login
              </button>
            </form>
            <br></br>
            <Typography
              endDecorator={<Link href="/sign-up">Sign Up</Link>}
              fontSize="sm"
              sx={{ alignSelf: "center" }}
            >
              Don't have an account?
            </Typography>
            {/* <div id="recaptcha-container" className="recaptcha-container"></div> */}
          </div>
        </Sheet>
      </main>
    </CssVarsProvider>
   </div>
  );
}
