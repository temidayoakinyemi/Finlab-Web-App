import React, { useState } from "react";
import "./Signup.css";
import loginimage from "../../assets/loginimage.png";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate(); // Initialize navigate hook

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!fullName || !email || !password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email.trim(),
        password
      );
      console.log("Signup successful:", userCredential.user);
      setSuccess(true);
      setFullName("");
      setEmail("");
      setPassword("");

      // Redirect to dashboard after successful signup
      navigate("/dashboard"); // Redirect to the dashboard
    } catch (error) {
      console.error("Signup error:", error.code, error.message);
      if (error.code === "auth/email-already-in-use") {
        setError("Email is already in use.");
      } else if (error.code === "auth/invalid-email") {
        setError("Invalid email address.");
      } else if (error.code === "auth/weak-password") {
        setError("Password should be at least 6 characters.");
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-wrapper">
        <img className="signup-img" src={loginimage} alt="Signup visual" />
        <div className="signup-content">
          <form className="signup-form" onSubmit={handleSignUp}>
            <h2 className="signup-title">Create New Account</h2>
            <p className="signup-para">
              Please register by filling in your personal data
            </p>

            <label className="signup-label">Full Name</label>
            <input
              className="input-signup"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Your name"
              required
            />

            <label className="signup-label">Email</label>
            <input
              className="input-signup"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="yourname@gmail.com"
              required
            />

            <label className="signup-label">Password</label>
            <div className="password-input-wrapper">
              <input
                className="input-signup"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="toggle-password"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            {error && <p className="signup-error">{error}</p>}
            {success && (
              <p className="signup-success">Account created successfully!</p>
            )}

            <button type="submit" className="signup-button">
              Continue
            </button>

            <p className="signup-login-text">
              Already have an account?{" "}
              <Link to="/login" className="signup-login-link">
                Login here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
