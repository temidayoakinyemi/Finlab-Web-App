import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import "./Dashboardhero.css";
import { auth } from "../firebase";
import arrow_right_text from "../../assets/arrow-right-text.svg";
import calendar from "../../assets/calendar.svg";


const Dashboardhero = () => {
  const [userName, setUserName] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  const location = useLocation(); // Use the location to track the active link

  useEffect(() => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    setCurrentDate(formattedDate);

    const user = auth.currentUser;
    if (user) {
      const emailName = user.email.split("@")[0];
      setUserName(emailName);
    }
  }, []);

  return (
    <div className="hero">
      <div className="all-hero">
        {userName && (
          <h1 className="welcome-message">Welcome back, {userName} 👏🏻</h1>
        )}
        <p className="hero-p">
          Dashboard <img src={arrow_right_text} className="arrow-right" />{" "}
          <span className="hero-p-span">overview</span>
        </p>
        <button className="navbar-item2" onClick={() => setMobileMenu(false)}>
          <Link to="/Login" className="link">
            Log Out
          </Link>
        </button>
        <div className="p2-date">
          <div className="hero-p-all">
            <Link to="/dashboard" className="hero-link">
              <p
                className={`hero-p-2 ${
                  location.pathname === "/dashboard" ? "active" : ""
                }`}
              >
                Overview
              </p>
            </Link>

            <Link to="/transaction" className="hero-link">
              <p
                className={`hero-p-2 ${
                  location.pathname === "/transaction" ? "active" : ""
                }`}
              >
                Transaction
              </p>
            </Link>

            <Link to="/statistics" className="hero-link">
              <p
                className={`hero-p-2 ${
                  location.pathname === "/statistics" ? "active" : ""
                }`}
              >
                Statistics
              </p>
            </Link>
          </div>

          <div className="date-div">
            <img src={calendar} alt="" />
            <p className="current-date">{currentDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboardhero;
