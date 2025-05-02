import React, { useState } from "react";
import "./Dashboardnavbar.css";
import finlablogo from "../../assets/finlablogo.svg";
import finlablogotext from "../../assets/finlablogotext.svg";
import notification from "../../assets/notification.svg";
import menufinlab from "../../assets/menufinlab.png";
import { Link } from "react-router-dom";

const Dashboardnavbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    setMobileMenu((prev) => !prev);
  };

  return (
    <div className="alldash">
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-left">
            <div className="logo-container">
              <img src={finlablogo} className="logo" alt="Logo" />
              <img
                className="finlablogotextdash"
                src={finlablogotext}
                alt="Finlab"
              />
            </div>

            <ul
              className={`navbar-list ${mobileMenu ? "" : "hide-mobile-menu"}`}
            >
              <li className="navbar-item" onClick={() => setMobileMenu(false)}>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li className="navbar-item">Wallets</li>
              <li className="navbar-item">Help Center</li>
            </ul>
          </div>

          <div className="navbar-right">
            <div className="search-container">
              <input
                type="text"
                placeholder="Search anything here"
                className="search-input"
              />
            </div>
            <div className="notification-icon">
              <img
                src={notification}
                className="notification"
                alt="Notification"
              />
            </div>
            <img
              src={menufinlab}
              className="menu-icon"
              alt="Menu"
              onClick={toggleMenu}
            />
            <Link to="/Login" className="link">
              <button
                className="navbar-item2"
                onClick={() => setMobileMenu(false)}
              >
                Log Out
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Dashboardnavbar;
