import React from "react";
import "./Dashboardstatistics.css";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);
import info_circle from "../../assets/info-circle.png";
import arrow_down2 from "../../assets/arrow-down2.svg";
import statistics from "../../assets/statistics.png";
import green_dot from "../../assets/green-dot.png";
import red_dot from "../../assets/red-dot.svg";
import blue_dot from "../../assets/blue-dot.svg";
import orange_dot from "../../assets/orange-dot.png";
import arrowup_slant from "../../assets/arrowup-slant.svg";
import arrow_down_slant from "../../assets/arrow-down-slant.svg";
import income_analysis from "../../assets/income-analysis.png";
import expense from "../../assets/expense.png";
import chartbasic from "../../assets/chartbasic.png";
import chartdays from "../../assets/chartdays.png";
import chartnumber from "../../assets/chartnumber.png";
import figma from "../../assets/figma.png";
import adobe from "../../assets/adobe.png";
import five_inter from "../../assets/five-inter.png";

const Dashboardstatistics = () => {
  return (
    <div className="all-rounder-statics">
      <div className="all-expense-ncome-category">
        <div className="analysis-expense2">
          <div className="analysis">
            <div className="h1-analysis">
              <h1 className="analysis-h1">Income Analysis</h1>
              <img src={info_circle} className="info-circle-analysis" />
            </div>
            <h1 className="analysis-h12">$8,527,224</h1>
            <div className="btn-p">
              <button className="analysis-btn">
                <img src={arrowup_slant} alt="" />
                +3.1%
              </button>
              <p className="analysis-p">VS This Month</p>
            </div>
            <img className="income-analysis" src={income_analysis} alt="" />
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
                <img src={arrow_down_slant} alt="" />
                -2.1%
              </button>
              <p className="analysis-p-expn">VS This Month</p>
            </div>
            <img className="income-analysis-expn" src={expense} alt="" />
          </div>
          {/*  */}
        </div>
        <div className="category2">
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
          <div className="statistic-img-p2">
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
            <div className="all-dot-amount2">
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
      </div>
      {/*  */}
      <div className="statics-last-transaction">
        <div className="basic-statics">
          <div className="all-basic-info-img-arrow">
            <div className="basic-info">
              <h1 className="basic-statics-h1">Balance Statistics</h1>
              <img src={info_circle} className="info-circle-plan" />
            </div>
            <div className="p-img-category">
              <p className="p-category">Monthly</p>
              <img src={arrow_down2} className="arrow-down-2" />
            </div>
          </div>
          <div className="chart-basic-day-number">
            <img src={chartnumber} alt="" className="chart-number" />
            <div className="chart-basic-day">
              <img src={chartbasic} alt="" className="chart-basic" />
              <img src={chartdays} alt="" className="chart-days" />
            </div>
          </div>
          {/*  */}
          <div className="last-transaction">
            <div className="all-transaction-info-img-arrow">
              <div className="transaction-info">
                <h1 className="transaction-h1">Last Transaction</h1>
                <img src={info_circle} className="info-circle-plan" />
              </div>
              <div className="p-img-category">
                <p className="p-category">Monthly</p>
                <img src={arrow_down2} className="arrow-down-2" />
              </div>
            </div>
            <div className="all-last-transaction1">
              <div className="name-bc">
                <div className="last-transaction-bc">
                  <img src={figma} className="figma" />
                </div>
                <div className="last-transaction2p">
                  <p className="last-transactionp">Figma Pro</p>
                  <p className="last-transactionp2">Software</p>
                </div>
              </div>
              <div className="last-transaction2pp">
                <p className="last-transactionpp">October 20 , 2022</p>
                <p className="last-transactionp2p">06:02 AM</p>
              </div>
              <p className="last-transaction-amount">-$32.00</p>
              <div className="last-status-type">
                <p className="last-status-type-p">Success</p>
              </div>
            </div>
            <div className="all-last-transaction1">
              <div className="name-bc">
                <div className="last-transaction-bc">
                  <img src={adobe} className="figma" />
                </div>
                <div className="last-transaction2p">
                  <p className="last-transactionp">Adobe Co</p>
                  <p className="last-transactionp2">Software</p>
                </div>
              </div>
              <div className="last-transaction2pp">
                <p className="last-transactionpp">October 20 , 2022</p>
                <p className="last-transactionp2p">06:02 AM</p>
              </div>
              <p className="last-transaction-amount">-$32.00</p>
              <div className="last-status-type">
                <p className="last-status-type-p">Success</p>
              </div>
            </div>
            <div className="all-last-transaction1">
              <div className="name-bc">
                <div className="last-transaction-bc">
                  <img src={five_inter} className="figma2" />
                </div>
                <div className="last-transaction2p">
                  <p className="last-transactionp">Five Inter</p>
                  <p className="last-transactionp2">Freelancer</p>
                </div>
              </div>
              <div className="last-transaction2pp">
                <p className="last-transactionpp">October 20 , 2022</p>
                <p className="last-transactionp2p">06:02 AM</p>
              </div>
              <p className="last-transaction-amount">-$32.00</p>
              <div className="last-status-type">
                <p className="last-status-type-p">Success</p>
              </div>
            </div>
          </div>
        </div>
        {/* end */}
      </div>
    </div>
  );
};

export default Dashboardstatistics;
