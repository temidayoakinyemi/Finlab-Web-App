import React, { useState, useEffect } from "react";
import "./Login.css";
import loginimage from "../../assets/loginimage.png";
import finlablogo from "../../assets/finlablogo.svg";
import finlablogotext from "../../assets/finlablogotext.svg";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const navigate = useNavigate(); // Initialize navigate hook

  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");
    const savedRememberMe = localStorage.getItem("rememberMe") === "true";

    if (savedRememberMe) {
      setEmail(savedEmail || "");
      setPassword(savedPassword || "");
      setRememberMe(savedRememberMe);
    }
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (rememberMe) {
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      localStorage.setItem("rememberMe", "true");
    } else {
      localStorage.removeItem("email");
      localStorage.removeItem("password");
      localStorage.removeItem("rememberMe");
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("Login successful:", userCredential.user);
      setMessage("Login successful!");
      setMessageType("success");

      // Redirect to dashboard after successful login
      navigate("/dashboard"); // Redirect to the dashboard
    } catch (error) {
      console.error("Login error:", error);
      switch (error.code) {
        case "auth/user-not-found":
          setMessage("This email is not registered. Please sign up.");
          break;
        case "auth/wrong-password":
          setMessage("Incorrect password. Please try again.");
          break;
        case "auth/invalid-email":
          setMessage("Invalid email address.");
          break;
        case "auth/invalid-credential":
          setMessage("Email or password is incorrect.");
          break;
        default:
          setMessage("Email or Password is incorrect");
      }
      setMessageType("error");
    }
  };

  return (
    <div className="login-container">
      <div className="all2">
        <img className="loginimg" src={loginimage} alt="Login background" />
        <div className="all1">
          <div className="logotext">
            <img src={finlablogo} alt="Logo" />
            <img
              className="finlablogotext"
              src={finlablogotext}
              alt="Finlab Text"
            />
          </div>
          <h1 className="loginh1">Welcome back to Findash</h1>
          <p className="loginp">
            Let’s empower your financial task today with Findash.
          </p>

          <form className="login-form" onSubmit={handleSubmit}>
            <h2 className="loginh2">Login first to your account</h2>

            {message && (
              <p
                className={`login-message ${
                  messageType === "success" ? "success" : "error"
                }`}
              >
                {message}
              </p>
            )}

            <label className="loginlabel">Email</label>
            <input
              className="inputlogin1"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="yourname@gmail.com"
              required
            />

            <label className="loginlabel">Password</label>
            <div className="input-password-wrapper">
              <input
                className="inputlogin2"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="*******"
                required
              />
              <div
                className="show-hide-icon"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                <span>{showPassword ? "Hide" : "Show"}</span>
              </div>
            </div>

            <div className="forgotremember">
              <label className="remember">
                <input
                  className="rememberinput"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                />
                Remember Me
              </label>
              <Link to="/forgot-password" className="forgotpassword">
                Forgot Password?
              </Link>
            </div>

            <button type="submit" className="loginbutton">
              Login
            </button>

            <p className="loginregistar">
              Don’t have an account?{" "}
              <Link to="/" className="loginregisterspan">
                Register Here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
