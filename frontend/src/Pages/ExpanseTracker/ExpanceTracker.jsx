import React from 'react'
import './ExpanseTracker.css'
import {NavLink,Outlet} from 'react-router-dom'
import {AiFillDashboard} from 'react-icons/ai'
import {BsCreditCardFill} from 'react-icons/bs'
import {GiTakeMyMoney,GiMoneyStack} from 'react-icons/gi'

export default function ExpanceTracker() {
  return (
    <div className='TrackerContainer'>
      <div className="sidebar">
        <div className="profile">
          <div className="pic">
            <img src="https://www.pngkey.com/png/detail/119-1195779_steve-thompson-man-icon-png-png.png" alt="" />
          </div>
          <div className="intro">
            <h2 className='Font3'>Name</h2>
            <h3 className='Font3'>Your Money</h3>
          </div>
        </div>
        <div className="menu">
          <ul className="menuLists">
           <NavLink to='/expanse_tracker/Dashboad' className={`menuList Font3 `}> <AiFillDashboard className='menuListIcon' /> Dashboard</NavLink>
           <NavLink to="/expanse_tracker/ViewTransection" className={`menuList Font3`}> <BsCreditCardFill className='menuListIcon'/> View Transactions</NavLink>
           <NavLink to="/expanse_tracker/income" className={`menuList Font3`}> <GiTakeMyMoney className='menuListIcon' /> Incomes</NavLink>
           <NavLink to="/expanse_tracker/expanse" className={`menuList Font3`}><GiMoneyStack className='menuListIcon' /> Expances</NavLink>
          </ul>
        </div>
      </div>
      <div className="mainBox">
     <Outlet />
    </div>
    </div>
  )
}
