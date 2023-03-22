import React,{useState, useEffect} from 'react'
import {MdDelete} from 'react-icons/md'
import {FaComment} from 'react-icons/fa'
import {BsCalendarMinusFill} from 'react-icons/bs'
import {FaBitcoin} from 'react-icons/fa'
import DatePicker from "react-datepicker";

import Moment from 'react-moment';
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from "../../../Context/Expance";
export default function Income() {
    const {addIncome,incomes, getIncomes, deleteIncome, totalIncome,setError, error} = useGlobalContext()
    useEffect(() =>{
        getIncomes()
    }, [])
    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: '',
    })

    const { title, amount, date, category,description } = inputState;

    const handleInput = name => e => {
        setInputState({...inputState, [name]: e.target.value})
        setError('')
    }

    const handleSubmit = e => {
        e.preventDefault()
        addIncome(inputState)
        setInputState({
            title: '',
            amount: '',
            date: '',
            category: '',
            description: '',
        })
    }

  return (
    <div className='IncomContainer'>
        <h1 className='Font4'>Incomes</h1>
        <div className="heading">
            <span className='Font4' style={{color: "rgb(3, 2, 97)"}}>Total Income : </span>
            <span className='Font1' style={{color: "rgb(31, 128, 31)"}}> $ {totalIncome()}</span>
        </div>
        <div className="mainCont">
            <div className="left">
                <input type="text" 
                    value={title}
                    name={'title'} 
                    placeholder="Income Title"
                    onChange={handleInput('title')}/>
                <input value={amount}  
                    type="text" 
                    name={'amount'} 
                    placeholder={'Income Amount'}
                    onChange={handleInput('amount')} 
                />
                <DatePicker 
                    id='date'
                    placeholderText='Enter A Date'
                    selected={date}
                    dateFormat="dd/MM/yyyy"
                    onChange={(date) => {
                        setInputState({...inputState, date: date})
                    }}
                />
                <select required value={category} name="category" id="category" onChange={handleInput('category')}>
                    <option value=""  disabled >Select Option</option>
                    <option value="salary">Salary</option>
                    <option value="freelancing">Freelancing</option>
                    <option value="investments">Investiments</option>
                    <option value="stocks">Stocks</option>
                    <option value="bitcoin">Bitcoin</option>
                    <option value="bank">Bank Transfer</option>  
                    <option value="youtube">Youtube</option>  
                    <option value="other">Other</option>  
                </select>
                <textarea name="description" value={description} placeholder='Add A Reference'onChange={handleInput('description')}></textarea>
            <button onClick={handleSubmit}>Add + </button>
            </div>
            <div className="right">
            {incomes.map((income)=>{
            const { _id, title, amount, date, category, description, type } = income;
            return(
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
                     
                      <BsCalendarMinusFill style={{margin: "0 5px"}}/> 
                      <Moment format="DD MMM YYYY">{date}</Moment>
                    </div>
                    <div className="msg Font1">
                      <FaComment /> {description}
                    </div>
                  </div>
                </div>
                <div className="delete" onClick={() =>deleteIncome(_id)}>
                  <MdDelete style={{color: "rgb(236, 20, 13)"}}/>
                </div>
              </div>
            )
          })}
            </div>
        </div>
    </div>
  )
}
