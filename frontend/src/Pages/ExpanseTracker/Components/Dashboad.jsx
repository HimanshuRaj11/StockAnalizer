import React,{useEffect} from 'react'
import { useGlobalContext } from "../../../Context/Expance";

export default function Dashboad() {
    const {totalExpenses,incomes, expenses, totalIncome, totalBalance, getIncomes, getExpenses } = useGlobalContext()

    useEffect(() => {
        getIncomes()
        getExpenses()
    }, [])
  return (
    <div className='DashboadContainer'>
        <div className="left">
            <h1 className='Font4'>All Transaction</h1>
            <div className="chart">

            </div>
            <div className="transDetail">
                <div className="total ">
                    <h2 className='Font4'>Total Income</h2>
                    <div className='Font1'>$ 55000</div>
                </div>
                <div className="total ">
                    <h2 className='Font4'>Total Expanses</h2>
                    <div className='Font1'style={{color:"rgb(230, 31, 5)"}}>$ 5000</div>
                </div>
                <div className="total ">
                    <h2 className='Font4'>Total Balance</h2>
                    <div className='Font1' style={{color:"rgb(31, 128, 31)"}}>$ 50000</div>
                </div>
                
            </div>
        </div>
        <div className="Right">

        </div>

    </div>
  )
}
