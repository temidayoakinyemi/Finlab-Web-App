import React, { useState } from "react";
import loginimage from "../../assets/loginimage.png";
import arrowleft from "../../assets/arrowleft.svg";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";
import { Link } from "react-router-dom";
import "./Forgetpassword.css";

const Forgetpassword = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const cleanedEmail = email.trim().toLowerCase();

    try {
      // Attempt to send the password reset email
      await sendPasswordResetEmail(auth, cleanedEmail);
      setSuccess(true);
    } catch (err) {
      // Handle known errors
      if (err.code === "auth/invalid-email") {
        setError("Please enter a valid email address.");
      } else {
        setError("Something went wrong. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="reset-container">
      <img src={loginimage} className="forgetbackground" />
      <div className="reset-right">
        <div className="reset-box">
          {!success && (
            <Link to="/login">
              <img src={arrowleft} className="arrowleft" alt="Back" />
            </Link>
          )}

          {!success ? (
            <form onSubmit={handleSubmit} className="reset-form">
              <h2 className="reset-title">Reset Your Password</h2>
              <p className="reset-description">
                Input your email address to receive a reset link
              </p>

              <label className="resetlabel">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                placeholder="yourname@gmail.com"
                required
                className="reset-input"
              />
              {error && <p className="reset-error">{error}</p>}

              <button type="submit" className="reset-button" disabled={loading}>
                {loading ? "Sending..." : "Continue"}
              </button>
            </form>
          ) : (
            <div className="success-box">
              <h2 className="reset-title2" style={{ color: "green" }}>
                Password Reset Email Sent
              </h2>
              <p className="reset-description2">
                If your email is registered, you'll receive a reset link
                shortly. Otherwise, please ensure you have an account or sign
                up.
              </p>
              <button className="reset-button2">
                <Link to="/login" className="login-now-link">
                  Login now
                </Link>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Forgetpassword;
