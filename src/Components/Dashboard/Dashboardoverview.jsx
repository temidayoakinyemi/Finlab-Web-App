import React from "react";
import "./Dashboardoverview.css";
import { Pie } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

import info_circle from "../../assets/info-circle.png";
import atmcard_logo from "../../assets/atmcard-logo.svg";
import transfer_icon from "../../assets/transfer-icon.svg";
import recieve_icon from "../../assets/recieve-icon.svg";
import arrow_right_plan from "../../assets/arrow-right-plan.svg";
import car_plans from "../../assets/car-plans.png";
import console_plan from "../../assets/console-plan.png";
import saving_plan from "../../assets/saving-plan.png";
import wedding_plan from "../../assets/wedding-plan.png";
import arrow_down from "../../assets/arrow-down.svg";
import arrow_down2 from "../../assets/arrow-down2.svg";
import green_dot from "../../assets/green-dot.png";
import red_dot from "../../assets/red-dot.svg";
import blue_dot from "../../assets/blue-dot.svg";
import orange_dot from "../../assets/orange-dot.png";
import arrowup_slant from "../../assets/arrowup-slant.svg";
import figma from "../../assets/figma.png";
import adobe from "../../assets/adobe.png";
import five_inter from "../../assets/five-inter.png";
import star_bucks from "../../assets/star-bucks.png";
import country1 from "../../assets/country1.svg";
import country2 from "../../assets/country2.svg";
import country3 from "../../assets/country3.svg";
import arrow_down_slant from "../../assets/arrow-down-slant.svg";

const Dashboardoverview = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        label: "Income",
        data: [4000, 6500, 5000, 8500],
        backgroundColor: "#10B981",
        borderRadius: 5,
        barThickness: 30,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { stepSize: 2000 },
      },
    },
  };

  return (
    <div className="overview">
      <div className="all">
        <div className="all-balance-plans">
          <div className="balance">
            <div className="h1-atm">
              <div className="h1-info">
                <h1 className="balance-h1">Total Balance</h1>
                <img src={info_circle} className="info-circle" />
              </div>
              <div className="atm-logo-number">
                <img src={atmcard_logo} className="atm-logo" />
                <p className="atm-number">**** 7189</p>
              </div>
            </div>
            <h1 className="balance-remain">$12,456,315</h1>
            <div className="btn2">
              <button className="transfer-btn">
                <div className="icon-p">
                  <img src={transfer_icon} className="transfer-icon" />
                  <p className="btn-pa">Transfer</p>
                </div>
              </button>
              <button className="recieve-btn">
                <div className="icon-p2">
                  <img src={recieve_icon} className="recieve-icon" />
                  <p className="btn-p2">Recieve</p>
                </div>
              </button>
            </div>
          </div>
          {/*  */}
          <div className="plans">
            <div className="h1-p">
              <div className="h1-plan">
                <h1 className="plan-h1">My Pocked Plans</h1>
                <img src={info_circle} className="info-circle-plan" />
              </div>
              <div className="p-img-plan">
                <p className="p-plan">See more</p>
                <img src={arrow_right_plan} className="arrow-right-plan" />
              </div>
            </div>
            <div className="divplan2">
              <div className="plan2">
                <div className="plan2-div">
                  <img className="car" src={car_plans} alt="" />
                </div>
                <p className="car-p">New Car</p>
                <p className="car-p2">$5.000,00</p>
              </div>
              <div className="plan3">
                <div className="plan3-div">
                  <img className="car2" src={console_plan} alt="" />
                </div>
                <p className="car-p">New Console</p>
                <p className="car-p3">$5.000,00</p>
              </div>
            </div>
            <div className="divplan2">
              <div className="plan4">
                <div className="plan4-div">
                  <img className="car3" src={saving_plan} alt="" />
                </div>
                <p className="car-p">Savings</p>
                <p className="car-p4">$5.000,00</p>
              </div>
              <div className="plan5">
                <div className="plan5-div">
                  <img className="car4" src={wedding_plan} alt="" />
                </div>
                <p className="car-p">Wedding</p>
                <p className="car-p5">$5.000,00</p>
              </div>
            </div>
            <div className="p-arrow-down">
              <p className="plan-load">Load more</p>
              <img src={arrow_down} alt="" className="arrow-down" />
            </div>
          </div>
        </div>
        {/*  */}
        <div className="all-category-analysis-expense">
          <div className="category1">
            <div className="h1-p-category">
              <div className="h1-category">
                <h1 className="category-h1">Expense Catergory</h1>
                <img src={info_circle} className="info-circle-plan" />
              </div>
              <div className="p-img-category">
                <p className="p-category">Monthly</p>
                <img src={arrow_down2} className="arrow-down-2" />
              </div>
            </div>
            <div className="statistic-img-p1">
              <div>
                <Pie
                  data={{
                    labels: ["Subscribed", "Taxs", "Bills", "Others"],
                    datasets: [
                      {
                        data: [40.1, 25, 6.1, 19.2],
                        borderWidth: 1,
                      },
                    ],
                  }}
                  options={{
                    plugins: {
                      legend: {
                        display: false,
                      },
                    },
                    responsive: true,
                    maintainAspectRatio: false,
                  }}
                />
              </div>
              <div className="all-dot-amount1">
                <div className="dot-p-all">
                  <div className="dot-p">
                    <img className="dot" src={green_dot} alt="" />
                    <p className="dot-para">Subscribed (40.1%)</p>
                  </div>
                  <div className="dot-p">
                    <img className="dot" src={orange_dot} alt="" />
                    <p className="dot-para">Taxs (25%)</p>
                  </div>
                  <div className="dot-p">
                    <img className="dot" src={red_dot} alt="" />
                    <p className="dot-para">Taxs (6.1%)</p>
                  </div>
                  <div className="dot-p">
                    <img className="dot" src={blue_dot} alt="" />
                    <p className="dot-para">Others (19.2%)</p>
                  </div>
                </div>
                <div className="allamountall">
                  <p className="amountall">$500.000</p>
                  <p className="amountall">$1000.000</p>
                  <p className="amountall">$345.000</p>
                  <p className="amountall">$234.098</p>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="analysis-expense2">
            <div className="analysis-expense2">
              <div className="analysis">
                <div className="h1-analysis">
                  <h1 className="analysis-h1">Income Analysis</h1>
                  <img src={info_circle} className="info-circle-analysis" />
                </div>
                <h1 className="analysis-h12">$8,527,224</h1>
                <div className="btn-p">
                  <button className="analysis-btn">
                    <div className="p-arrowup-slant">
                      <img src={arrowup_slant} alt="" />
                      +3.1%
                    </div>
                  </button>
                  <p className="analysis-p">VS This Month</p>
                </div>
                <div className="income-analysis">
                  <Bar data={data} options={options} />
                </div>
              </div>
            </div>
            {/*  */}
            <div className="analysis-expense">
              <div className="h1-analysis-expn">
                <h1 className="analysis-h1-expn">Expense Analysis</h1>
                <img src={info_circle} className="info-circle-analysis" />
              </div>
              <h1 className="analysis-h12-expn">$2,056,123</h1>
              <div className="btn-p-expn">
                <button className="analysis-btn-expn">
                  <div className="p-arrowup-slant">
                    <img src={arrow_down_slant} alt="" />
                    -2.1%
                  </div>
                </button>
                <p className="analysis-p-expn">VS This Month</p>
              </div>
              <div className="income-analysis-expn">
                <Bar
                  data={{
                    labels: ["Jan", "Feb", "Mar", "Apr"],
                    datasets: [
                      {
                        label: "Expenses",
                        data: [3000, 2000, 4500, 3500],
                        backgroundColor: "#EF4444",
                        borderRadius: 5,
                        barThickness: 30,
                      },
                    ],
                  }}
                  options={{
                    responsive: true,
                    plugins: {
                      legend: { display: false },
                    },
                    scales: {
                      y: {
                        beginAtZero: true,
                        ticks: { stepSize: 1000 },
                      },
                    },
                  }}
                />
              </div>
            </div>
            {/*  */}
          </div>
        </div>
        {/*  */}
        <div className="all-activity-currency">
          <div className="activity">
            <div className="h1-p-activity">
              <div className="h1-activity">
                <h1 className="activity-h1">Recent Activiy</h1>
                <img src={info_circle} className="info-circle-plan" />
              </div>
              <div className="p-img-activity">
                <p className="p-activity">See more</p>
                <img src={arrow_right_plan} className="arrow-right-activity" />
              </div>
            </div>
            <div>
              <div className="all-bglogo-pppp">
                <div className="bg-logo">
                  <img className="bg-logo-img" src={figma} alt="" />
                </div>
                <div className="activity2222">
                  <div className="activityp2">
                    <p className="activity-p">Figma Pro</p>
                    <p className="activity-p2">-$23.21</p>
                  </div>
                  <div className="activityp3">
                    <p className="activity-p3">Subscriptions</p>
                    <p className="activity-p3">10/02/22 - 15.34</p>
                  </div>
                </div>
              </div>
              <div className="all-bglogo-pppp">
                <div className="bg-logo">
                  <img className="bg-logo-img" src={adobe} alt="" />
                </div>
                <div className="activity2222">
                  <div className="activityp2">
                    <p className="activity-p">Adobe Collection</p>
                    <p className="activity-p2">-$50.21</p>
                  </div>
                  <div className="activityp3">
                    <p className="activity-p3">Subscriptions</p>
                    <p className="activity-p3">10/02/22 - 15.34</p>
                  </div>
                </div>
              </div>
              <div className="all-bglogo-pppp">
                <div className="bg-logo">
                  <img className="bg-logo-img-3" src={five_inter} alt="" />
                </div>
                <div className="activity2222">
                  <div className="activityp2">
                    <p className="activity-p">Five Inter</p>
                    <p className="activity-p2">+$100.00</p>
                  </div>
                  <div className="activityp3">
                    <p className="activity-p3">Recieve</p>
                    <p className="activity-p3">10/02/22 - 15.34</p>
                  </div>
                </div>
              </div>
              <div className="all-bglogo-pppp">
                <div className="bg-logo">
                  <img className="bg-logo-img" src={star_bucks} alt="" />
                </div>
                <div className="activity2222">
                  <div className="activityp2">
                    <p className="activity-p">Starbucks</p>
                    <p className="activity-p2">-$50.00</p>
                  </div>
                  <div className="activityp3">
                    <p className="activity-p3">Transfer</p>
                    <p className="activity-p3">10/02/22 - 15.34</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="currency">
            <div className="h1-currency">
              <h1 className="currency-h1">Currency</h1>
              <img src={info_circle} className="info-circle-plan" />
            </div>

            <div className="currency-ppp">
              <div className="country-name">
                <img src={country1} className="country-img" alt="" />
                <p className="countryname">Rulpah</p>
              </div>
              <div className="p2-country">
                <p className="currency-p1">15425,15</p>
                <p className="currency-p2">IDR</p>
              </div>
            </div>

            <div className="currency-ppp">
              <div className="country-name">
                <img src={country2} className="country-img" alt="" />
                <p className="countryname">Euro</p>
              </div>
              <div className="p2-country">
                <p className="currency-p1">0,95</p>
                <p className="currency-p2">EUR</p>
              </div>
            </div>
            <div className="currency-ppp">
              <div className="country-name">
                <img src={country3} className="country-img" alt="" />
                <p className="countryname">Chinese Yuan</p>
              </div>
              <div className="p2-country">
                <p className="currency-p1">7,06</p>
                <p className="currency-p2">CNY</p>
              </div>
            </div>
          </div>
        </div>
        {/* end */}
      </div>
    </div>
  );
};

export default Dashboardoverview;
