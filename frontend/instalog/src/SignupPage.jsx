import React, { useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [loading, setLoading] = useState(false); // To control spinner visibility
  const [showPopup, setShowPopup] = useState(false); // To control pop-up visibility
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault()
    setLoading(true); // Show spinner

    // Simulate a server error and show pop-up after 3 seconds
    setTimeout(() => {
      setLoading(false); // Hide spinner
      setShowPopup(true); // Show pop-up with error message
    }, 3000);
  };

  const closePopup = () => {
    setShowPopup(false); // Hide the pop-up
    navigate('/'); // Redirect to login page
  };

  return (
    <div className="signup-page">
      {/* Instagram Logo */}
      <div className="logo-container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
          alt="Instagram Logo"
          className="instagram-logo"
        />
      </div>

      <form className="signup-box" onSubmit={handleSignup}>
        <input type="email" required placeholder="Mobile number or email" />
        <input type="text" required placeholder="Full Name" />
        <input type="text" required placeholder="Username" />
        <input type="password" required placeholder="Password" />
        <button className="signup-btn">
          Sign Up
        </button>
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
            <p>Server error for registration in this web! Try login.</p>
            <button onClick={closePopup} className="close-btn">Login</button>
          </div>
        </div>
      )}

      {/* Login Switch Box */}
      <div className="switch-box">
        Have an account? <a href="/">Log in</a>
      </div>
    </div>
  );
};

export default SignupPage;
