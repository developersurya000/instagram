import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "./App.css";

const LoginPage = () => {
  const [loading, setLoading] = useState(false); // To control spinner visibility
  const [showPopup, setShowPopup] = useState(false); // To control pop-up visibility
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: '',
    password: ''
  });

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true); // Show spinner
    setShowPopup(false); // Hide pop-up initially

    // Simulate a login process (replace this with your actual login logic)
    axios.post('http://localhost:4040/login', values)
      .then((res) => {
        if (res.data.status === "success") {
          navigate('/home');
        } else if (res.data.status === "invalid username!") {
          alert("Invalid username!");
        } else {
          alert(res.data.status);
        }
      })
      .catch((err) => {
        setTimeout(() => {
          setLoading(false); // Hide spinner after the request is complete
          alert("Data not sent!");
          console.log(err);
        }, 5000);
      });
  };

  const handleFacebookLogin = () => {
    setShowPopup(true); // Show the pop-up when Facebook login is clicked

    // Hide the pop-up after some time if you want it to disappear automatically
    setTimeout(() => {
      setShowPopup(false); // Hide the pop-up after 3 seconds
    }, 3000);
  };

  const closePopup = () => {
    setShowPopup(false); // Hide the pop-up when user closes it
  };

  return (
    <div className="login-page">
      {/* Instagram Logo */}
      <div className="logo-container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
          alt="Instagram Logo"
          className="instagram-logo"
        />
      </div>

      <form className="login-box" onSubmit={handleLogin}>
        <input
          type="text"
          name="username"
          placeholder="Phone number, username, or email"
          required
          onChange={(e) => {
            setValues({ ...values, username: e.target.value });
          }}
        />
        <input
          type="password"
          name="password"
          required
          placeholder="Password"
          onChange={(e) => {
            setValues({ ...values, password: e.target.value });
          }}
        />
        <button className="login-btn">
          Log In
        </button>

        <div className="divider">
          <hr />
          <span>OR</span>
          <hr />
        </div>

        <button className="fb-login-btn" onClick={handleFacebookLogin}>
          Log in with Facebook
        </button>
        <a href="#" className="forgot-password">
          Forgot password?
        </a>
      </form>

      {/* Spinner (conditionally render when loading is true) */}
      {loading && (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      )}

      {/* Pop-up Message */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>Temporarily this service is facing problems.</p>
            <button onClick={closePopup} className="close-btn">Close</button>
          </div>
        </div>
      )}

      {/* Sign Up Switch Box */}
      <div className="switch-box">
        Don't have an account? <a href="/signup">Sign up</a>
      </div>
    </div>
  );
};

export default LoginPage;
