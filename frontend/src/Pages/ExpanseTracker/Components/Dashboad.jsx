import React, { useEffect } from "react";
import { useGlobalContext } from "../../../Context/Expance";
import { MdDelete } from "react-icons/md";
import { FaComment } from "react-icons/fa";
import { BsCalendarMinusFill } from "react-icons/bs";
import { FaBitcoin } from "react-icons/fa";

import Moment from "react-moment";
import "react-datepicker/dist/react-datepicker.css";
import ChartData from "./ChartData";
export default function Dashboad() {
  const {
    transactionHistory,
    totalExpenses,
    incomes,
    expenses,
    totalIncome,
    totalBalance,
    getIncomes,
    getExpenses,
  } = useGlobalContext();
  const [...history] = transactionHistory();
  useEffect(() => {
    getIncomes();
    getExpenses();
  }, []);
  return (
    <div className="DashboadContainer">
      <div className="left">
        <h1 className="Font4">All Transaction</h1>
        <div className="chart">
          <ChartData/>
        </div>
        <div className="transDetail">
          <div className="total ">
            <h2 className="Font4">Total Income</h2>
            <div className="Font1" style={{ color: "rgb(31, 128, 31)" }}>
              $ {totalIncome()}
            </div>
          </div>
          <div className="total ">
            <h2 className="Font4">Total Expanses</h2>
            <div className="Font1" style={{ color: "rgb(230, 31, 5)" }}>
              $ {totalExpenses()}
            </div>
          </div>
          <div className="total ">
            <h2 className="Font4">Total Balance</h2>
            <div className="Font1">$ {totalBalance()}</div>
          </div>
        </div>
      </div>
      <div className="Right">
        <div className="history-con">
          <h2>Recent History</h2>
          {history.map((item) => {
            const {  _id, title, amount, date, category, description, type} = item;
            return (
                <div className="card" key={_id} id={_id}>
                  <div className="Icon">
                    <FaBitcoin className="icon" />
                  </div>
                  <div className="details">
                    <div className="upper">
                      <span className={`${type}`}> </span>
                      <span className="tital Font1">{title}</span>
                    </div>
                    <div className="lower">
                      <div className="Amount Font1">$ {amount} </div>
                      <div className="Date">
                        <BsCalendarMinusFill style={{ margin: "0 5px" }} />
                        <Moment format="DD MMM YYYY">{date}</Moment>
                      </div>
                      <div className="msg Font1">
                        <FaComment /> {description}
                      </div>
                    </div>
                  </div>
                </div>
            );
          })}
          <h2 className="salary-title Font3" style={{color:'rgb(3, 2, 97)'}}>
            Min <span style={{color:'rgb(31, 128, 31)'}} >Income</span>Max
          </h2>
          <div className="salary-item Font2" style={{color:'rgb(68, 86, 146)'}}>
            <p>${Math.min(...incomes.map((item) => item.amount))}</p>
            <p>${Math.max(...incomes.map((item) => item.amount))}</p>
          </div>
          <hr className="lineHr"/>
          <h2 className="salary-title Font3" style={{color:'rgb(3, 2, 97)'}}>
            Min <span style={{ color: "rgb(230, 31, 5)" }}>Expense</span>Max
          </h2>
          <div className="salary-item Font2" style={{color:'rgb(68, 86, 146)'}}>
            <p>${Math.min(...expenses.map((item) => item.amount))}</p>
            <p>${Math.max(...expenses.map((item) => item.amount))}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
