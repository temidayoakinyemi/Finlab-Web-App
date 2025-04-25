import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom"; // Remove unused Link import
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Forgetpassword from "./Components/ForgetPassword/Forgetpassword";
import { auth } from "./Components/firebase";
import Dashboardtransaction from "./Components/Dashboard/Dashboardtransaction";
import Dashboardnavbar from "./Components/Dashboard/Dashboardnavbar";
import Dashboardhero from "./Components/Dashboard/Dashboardhero";
import Dashboardoverview from "./Components/Dashboard/Dashboardoverview";
import Dashboardstatistics from "./Components/Dashboard/Dashboardstatistics"; // Import your Statistics component
import Dashboardsetting from "./Components/Dashboard/Dashboardsetting"; // Import Settings component

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<Forgetpassword />} />

      {/* Conditional routing for Dashboardoverview (on login) */}
      <Route
        path="/dashboard"
        element={
          user ? (
            <div>
              <Dashboardnavbar />
              <Dashboardhero />
              <Dashboardoverview />
            </div>
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      {/* Only show Dashboardtransaction when explicitly navigated */}
      <Route
        path="/transaction"
        element={
          user ? (
            <div>
              <Dashboardnavbar />
              <Dashboardhero />
              <Dashboardtransaction />
            </div>
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      {/* Statistics route */}
      <Route
        path="/statistics"
        element={
          user ? (
            <div>
              <Dashboardnavbar />
              <Dashboardhero />
              <Dashboardstatistics />
            </div>
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      {/* Settings route */}
      <Route
        path="/settings"
        element={
          user ? (
            <div>
              <Dashboardnavbar />
              <Dashboardhero />
              <Dashboardsetting />
            </div>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
    </Routes>
  );
};

export default App;
