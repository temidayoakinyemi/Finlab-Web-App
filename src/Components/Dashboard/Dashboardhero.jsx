import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Dashboardhero.css";
import { auth } from "../firebase";
import arrow_right_text from "../../assets/arrow-right-text.svg";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

// Import shadcn/ui components using relative paths
import { Button } from "../../Components/ui/button";
import { Calendar } from "../../Components/ui/calendar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "../../Components/ui/popover";

const Dashboardhero = () => {
  const [userName, setUserName] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const location = useLocation();

  useEffect(() => {
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
          <div className="arrow-overview">
          Dashboard 
            <img src={arrow_right_text} className="arrow-right" />{" "}
            <span className="hero-p-span">overview</span>
          </div>
        </p>
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

          <Popover className="date-picker-container">
            <PopoverTrigger asChild>
              <Button className="date-picker-button">
                <CalendarIcon className="calendar-icon" />
                {selectedDate ? (
                  format(selectedDate, "PPP")
                ) : (
                  <span className="date-placeholder">Pick a date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="date-picker-popover">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default Dashboardhero;
