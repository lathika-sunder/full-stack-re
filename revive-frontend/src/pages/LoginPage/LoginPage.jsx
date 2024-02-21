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
        const recaptcha=await sendCaptcha()
        if(recaptcha)
        {
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
            console.log("Error Logging in", error);
          });
        
        }
    
    } catch (error) {
        console.log('Recaptcha Verification failed', error);
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
          <div>
            <div>
              <Typography level="h4" component="h1">
                <b>Login</b>
              </Typography>
              <Typography level="body-sm">Login to your account.</Typography>
              <br/>
            </div>
            <form onSubmit={handleSubmit}>
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

              <Button
                type="submit"
                sx={{ mt: 1, textAlign: "center", backgroundColor: "green" }}
                onSubmit={handleSubmit}
              >
                Login
              </Button>
            </form>
            <Typography
              endDecorator={<Link href="/login">Log in</Link>}
              fontSize="sm"
              sx={{ alignSelf: "center" }}
            >
              Don't have an account?
            </Typography>
            <div id="recaptcha-container"></div>
          </div>
        </Sheet>
      </main>
    </CssVarsProvider>
  );
}
