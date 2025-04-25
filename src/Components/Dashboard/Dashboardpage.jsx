import React from 'react'
import "./Dashboardpage.css"
import Dashboardnavbar from './Dashboardnavbar';
import Dashboardhero from './Dashboardhero';
import Dashboardoverview from './Dashboardoverview';
import Dashboardtransaction from './Dashboardtransaction';
import Dashboardstatistics from './Dashboardstatistics';
import Dashboardsetting from './Dashboardsetting';

const Dashboardpage = () => {
  return (
    <div className="dashboard-container">
      <Dashboardnavbar />
      <Dashboardhero />
      <Dashboardoverview />
      <Dashboardtransaction />
      <Dashboardstatistics />
      <Dashboardsetting />
    </div>
  );
}

export default Dashboardpage