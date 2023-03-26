import React,{useEffect} from "react";
import {FaComment} from 'react-icons/fa'
import {BsCalendarMinusFill} from 'react-icons/bs'
import {SiCommerzbank} from 'react-icons/si'

import Moment from 'react-moment';
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from "../../../Context/Expance";
export default function ViewTransaction() {
  const {viewTransaction,getIncomes,getExpenses} = useGlobalContext()
  const [...transaction] = viewTransaction()
  useEffect(() => {
    getIncomes();
    getExpenses();
  }, []);
  return (
    <div className="ViewTransaction">
      <h1 className="Font4">View Transaction</h1>

      {transaction.map((item) => {
            const { _id, title, amount, date, category, description, type } = item;

            return (
              <div className="card" key={_id} id={_id}>
                <div className="Icon">
                  <SiCommerzbank className="icon" />
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
    </div>
  );
}
