import "./ScrapDealersHome.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ScrapDealersHome = () => {
  const navigate = useNavigate();
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    console.log("Mobile:" + mobile + " Password:" + password);
    try {
      axios
        .post("http://localhost:4040/api/v1/scrap-dealers/login", {
          mobile: mobile,
          password: password,
        })
        .then((response) => {
          if (response.status === 201) {
            const { token, role } = response.data;
            localStorage.setItem("token", token);

            navigate("/dashboard/scrap-dealers");

            alert("Scrap Dealer Logged In Successfully");
            toast.success("Login successful");
          }
        })
        .catch((error) => {
          console.log("Error Logging in", error);
        });
    } catch (error) {}
  };

  return (
    <div className="scrap-dealers-home">
      <div className={` container ${isSignUpMode ? "sign-up-mode" : ""}`}>
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form" onSubmit={handleSubmit}>
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  placeholder="Mobile"
                  name="mobile"
                  value={mobile}
                  onChange={handleMobileChange}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <input type="submit" value="Login" className="btn solid" />
            </form>
            <form action="#" className="sign-up-form">
              <h2 className="title">Join Us</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="phone" placeholder="Mobile" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" className="btn" value="Sign up" />
              <p className="social-text">Our Team will Contact You Soon</p>
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New to our community ?</h3>
              <p>Join us now, Enjoy more profit and be more sustainable</p>
              <button className="btn transparent" onClick={handleSignUpClick}>
                Join Us
              </button>
            </div>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/man-waste-and-throwing-money-9496840-7746442.png"
              className="image"
              alt=""
            />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of Our Valued Members</h3>
              <p>Thank you for being part of us. Sign in Now!</p>
              <button className="btn transparent" onClick={handleSignInClick}>
                Sign in
              </button>
            </div>
            <img
              src="https://static.vecteezy.com/system/resources/previews/022/952/904/original/man-throw-waste-in-recycle-bin-3d-character-illustration-png.png"
              className="image"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrapDealersHome;
