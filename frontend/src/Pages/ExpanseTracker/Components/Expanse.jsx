import React, { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { FaComment } from "react-icons/fa";
import { BsCalendarMinusFill } from "react-icons/bs";
import { FaBitcoin } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Moment from "react-moment";
import { useGlobalContext } from "../../../Context/Expance";

export default function Expanse() {
  const { expenses, getExpenses,deleteExpense, totalExpenses } = useGlobalContext();
  useEffect(() => {
    getExpenses();
  },[]);
  const { addExpense, error, setError } = useGlobalContext();
  const [inputState, setInputState] = useState({
    title: "",
    amount: "",
    date: "",
    category: "",
    description: "",
  });

  const { title, amount, date, category, description } = inputState;

  const handleInput = (name) => (e) => {
    setInputState({ ...inputState, [name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense(inputState);
    setInputState({
      title: "",
      amount: "",
      date: "",
      category: "",
      description: "",
    });
  };

  return (
    <div className="IncomContainer">
      <h1 className="Font4">Expanse</h1>
      <div className="heading">
        <span className="Font4" style={{ color: "rgb(3, 2, 97)" }}>
          Total Expanse :
        </span>
        <span className="Font1" style={{ color: "rgb(236, 20, 13)" }}>
          $ {totalExpenses()}
        </span>
      </div>
      <div className="mainCont">
        <div className="left">
          {error && (
            <p
              className="error Font4"
              style={{ color: "rgb(236, 25, 33)", fontWeight: "800" }}
            >
              {error}
            </p>
          )}
          <input
            type="text"
            value={title}
            name={"title"}
            placeholder="Expense Title"
            onChange={handleInput("title")}
          />
          <input
            value={amount}
            type="text"
            name={"amount"}
            placeholder={"Expense Amount"}
            onChange={handleInput("amount")}
          />
          <DatePicker
            id="date"
            placeholderText="Enter A Date"
            dateFormat="dd/MM/yyyy"
            onChange={(date) => {
              setInputState({ ...inputState, date: date });
            }}
            selected={date}
          />
          <select
            required
            value={category}
            name="category"
            id="category"
            onChange={handleInput("category")}
          >
            <option value="" disabled>
              Select Option
            </option>
            <option value="education">Education</option>
            <option value="groceries">Groceries</option>
            <option value="health">Health</option>
            <option value="subscriptions">Subscriptions</option>
            <option value="takeaways">Takeaways</option>
            <option value="clothing">Clothing</option>
            <option value="travelling">Travelling</option>
            <option value="other">Other</option>
          </select>
          <textarea
            name="description"
            value={description}
            placeholder="Add Refrence"
            onChange={handleInput("description")}
          ></textarea>
          <button onClick={handleSubmit}>Add + </button>
        </div>
        <div className="right">
          {expenses.map((income) => {
            const { _id, title, amount, date, category, description, type } = income;
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
                <div className="delete" onClick={() =>deleteExpense(_id)}>
                  <MdDelete style={{ color: "rgb(236, 20, 13)" }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
