import React from "react";
import "./Dashboardtransaction.css";
import filter_icon from "../../assets/filter-icon.svg";
import export_icon from "../../assets/export-icon.svg";
import swap_icon from "../../assets/swap-icon.svg";
import figma from "../../assets/figma.png";
import adobe from "../../assets/adobe.png";
import five_inter from "../../assets/five-inter.png";
import star_bucks from "../../assets/star-bucks.png";
import shopify from "../../assets/shopify.png";
import kfc from "../../assets/kfc.png";
import eye from "../../assets/eye.png";
import trash from "../../assets/trash.png";

const Dashboardtransaction = () => {
  return (
    <div className="transaction">
      <div className="search-btn">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search anything here"
            className="search-input2"
          />
        </div>
        <div className="btn22">
          <button className="transaction-btn1">
            <div className="icon-p">
              <img src={filter_icon} className="filtericon" alt="" />
              Filter
            </div>
          </button>
          <button className="transaction-btn2">
            <div className="icon-2">
              <img src={export_icon} className="exporticon" alt="" />
              Export
            </div>
          </button>
        </div>
      </div>

      <div className="all-rounder">
        <div className="all-checkbox">
          <div className="checkbox-div">
            <input className="select-input" type="checkbox" />
          </div>
          <div className="all-checkbox2">
            <input className="select-input1" type="checkbox" />
            <input className="select-input2" type="checkbox" />
            <input className="select-input2" type="checkbox" />
            <input className="select-input2" type="checkbox" />
            <input className="select-input2" type="checkbox" />
            <input className="select-input2" type="checkbox" />
          </div>
        </div>
        {/*  */}
        <div className="all-invoice">
          <div className="invoice">
            <div className="invoice-p-icon">
              <p className="invoice-p">Invoice</p>{" "}
              <img src={swap_icon} className="swap-icon" />
            </div>
          </div>
          <div className="all-ppp">
            <p className="invoice-pp">B12341</p>
            <p className="invoice-pp1">B12341</p>
            <p className="invoice-pp1 invoice-pp2">B12341</p>
            <p className="invoice-pp1 invoice-pp2">B12341</p>
            <p className="invoice-pp1 invoice-pp2">B12341</p>
            <p className="invoice-pp1 invoice-pp2">B12341</p>
          </div>
        </div>
        {/*  */}
        <div className="all-buisness">
          <div className="buisness">
            <div className="buisness-p-icon">
              <p className="buisness-p">Name/ Business</p>{" "}
              <img src={swap_icon} className="swap-icon" />
            </div>
          </div>
          <div className="all-bg-pp-2-buisness">
            <div className="bg-logo-buisness">
              <img className="bg-logo-img-buisness" src={figma} alt="" />
            </div>
            <div className="pp-2-buisness">
              <p className="logo-img-p">Figma Pro</p>
              <p className="logo-img-p-2">Software </p>
            </div>
          </div>
          <div className="all-bg-pp-2-buisness">
            <div className="bg-logo-buisness">
              <img className="bg-logo-img-buisness" src={adobe} alt="" />
            </div>
            <div className="pp-2-buisness">
              <p className="logo-img-p">Adobe Collection</p>
              <p className="logo-img-p-2">Software </p>
            </div>
          </div>
          <div className="all-bg-pp-2-buisness">
            <div className="bg-logo-buisness">
              <img className="bg-logo-img-buisness1" src={five_inter} alt="" />
            </div>
            <div className="pp-2-buisness">
              <p className="logo-img-p">Fiver International</p>
              <p className="logo-img-p-2">Freelance platform</p>
            </div>
          </div>
          <div className="all-bg-pp-2-buisness">
            <div className="bg-logo-buisness">
              <img className="bg-logo-img-buisness" src={star_bucks} alt="" />
            </div>
            <div className="pp-2-buisness">
              <p className="logo-img-p">Starbucks</p>
              <p className="logo-img-p-2">Coffehouse</p>
            </div>
          </div>
          <div className="all-bg-pp-2-buisness">
            <div className="bg-logo-buisness">
              <img className="bg-logo-img-buisness" src={kfc} alt="" />
            </div>
            <div className="pp-2-buisness">
              <p className="logo-img-p">KFC Paris</p>
              <p className="logo-img-p-2">Fast Food Restaurant</p>
            </div>
          </div>
          <div className="all-bg-pp-2-buisness">
            <div className="bg-logo-buisness">
              <img className="bg-logo-img-buisness" src={shopify} alt="" />
            </div>
            <div className="pp-2-buisness">
              <p className="logo-img-p">Shopify</p>
              <p className="logo-img-p-2">E-Commerce Company</p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="all-transaction-type">
          <div className="transaction-type">
            <p className="transaction-type-p">Transaction type</p>
          </div>
          <div className="transaction-type-div">
            <p className="transaction-type-div-p">Subscribe</p>
          </div>
          <div className="transaction-type-div">
            <p className="transaction-type-div-p">Subscribe</p>
          </div>
          <div className="transaction-type-div">
            <p className="transaction-type-div-p">Recieve</p>
          </div>
          <div className="transaction-type-div">
            <p className="transaction-type-div-p">TRANSFER</p>
          </div>
          <div className="transaction-type-div">
            <p className="transaction-type-div-p">TRANSFER</p>
          </div>
          <div className="transaction-type-div">
            <p className="transaction-type-div-p">Subscribe</p>
          </div>
        </div>
        {/*  */}
        <div className="all-date-time">
          <div className="date-time">
            <div className="date-time-p-icon">
              <p className="date-time-p">Date & Time</p>
              <img src={swap_icon} className="swap-icon" />
            </div>
          </div>
          <div className="time-date-pp">
            <p className="date-p">January 01 , 2025</p>
            <p className="time-p">01:32 PM</p>
          </div>
          <div className="time-date-pp">
            <p className="date-p">January 05 , 2025</p>
            <p className="time-p">02:30 PM</p>
          </div>
          <div className="time-date-pp">
            <p className="date-p">January 07 , 2025</p>
            <p className="time-p">01:40 PM</p>
          </div>
          <div className="time-date-pp">
            <p className="date-p">January 09 , 2025</p>
            <p className="time-p">03:40 PM</p>
          </div>
          <div className="time-date-pp">
            <p className="date-p">February 16 , 2025</p>
            <p className="time-p">06:02 AM</p>
          </div>
          <div className="time-date-pp">
            <p className="date-p">February 16 , 2025</p>
            <p className="time-p">06:05 AM</p>
          </div>
        </div>
        {/*  */}
        <div className="all-amount">
          <div className="amount">
            <div className="amount-p-icon">
              <p className="amount-p">Amount</p>
              <img src={swap_icon} className="swap-icon" />
            </div>
          </div>
          <p className="amount-pp">-$32.00</p>
          <p className="amount-pp1">-$64.00</p>
          <p className="amount-pp1">+$100.00</p>
          <p className="amount-pp1">-$50.00</p>
          <p className="amount-pp1">-$32.00</p>
          <p className="amount-pp1">-$50.00</p>
        </div>
        {/*  */}
        <div className="all-status">
          <div className="status">
            <p className="status-p">Status</p>
          </div>
          <div className="status-type">
            <p className="status-type-p">Success</p>
          </div>
          <div className="status-type3">
            <p className="status-type-p">Success</p>
          </div>
          <div className="status-type3">
            <p className="status-type-p">Success</p>
          </div>
          <div className="status-type3">
            <p className="status-type-p">Success</p>
          </div>
          <div className="status-type1">
            <p className="status-type-p1">pending</p>
          </div>
          <div className="status-type2">
            <p className="status-type-p2">canceled</p>
          </div>
        </div>
        {/*  */}
        <div className="all-action">
          <div className="action">
            <p className="action-p">Action</p>
          </div>
          <div className="eye-trash-icon">
            <img src={eye} className="icon-eye" />
            <img src={trash} className="icon-trash" />
          </div>
          <div className="eye-trash-icon1">
            <img src={eye} className="icon-eye" />
            <img src={trash} className="icon-trash" />
          </div>
          <div className="eye-trash-icon1">
            <img src={eye} className="icon-eye" />
            <img src={trash} className="icon-trash" />
          </div>
          <div className="eye-trash-icon1">
            <img src={eye} className="icon-eye" />
            <img src={trash} className="icon-trash" />
          </div>
          <div className="eye-trash-icon1">
            <img src={eye} className="icon-eye" />
            <img src={trash} className="icon-trash" />
          </div>
          <div className="eye-trash-icon1">
            <img src={eye} className="icon-eye" />
            <img src={trash} className="icon-trash" />
          </div>
        </div>
      </div>

      {/* end */}
    </div>
  );
};

export default Dashboardtransaction;
