import React from "react";
import { MdDelete } from "react-icons/md";
import { FaComment } from "react-icons/fa";
import { BsCalendarMinusFill } from "react-icons/bs";
import { FaBitcoin } from "react-icons/fa";
export default function ViewTransaction() {
  return (
    <div className="ViewTransaction">
      <h1 className="Font4">View Transaction</h1>
      <div className="card">
        <div className="Icon">
          <FaBitcoin className="icon" />
        </div>
        <div className="details">
          <div className="upper">
            <span className="redDot"> </span>
            <span className="tital Font1">Salary</span>
          </div>
          <div className="lower">
            <div className="Amount Font1">$ 400</div>
            <div className="Date">
              {" "}
              <BsCalendarMinusFill /> 21/52/2008
            </div>
            <div className="msg Font1">
              <FaComment /> My first Income
            </div>
          </div>
        </div>
        <div className="delete">
          {" "}
          <MdDelete />{" "}
        </div>
      </div>
    </div>
  );
}
