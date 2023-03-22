import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

import {ImHome} from 'react-icons/im'
import {MdAccountCircle, MdDashboard} from 'react-icons/md'

export default function Navbar() {
  return (
    <div className='Navbar'>
        <div className="MainNavbar">
            <div className="Logo">
               <span className='LogoName1 Font1'>Fin</span><span className='LogoName2 Font5'>FRIEND</span>
            </div>
            <div className="serach"><input type="search" placeholder='Search' /></div>
            <div className="links">
                <NavLink className='link HomeIcon' to="/"><ImHome/></NavLink>
                <span className='link'>NEWS </span>
                <span className='link'>STOCKS</span>
                <NavLink className='link' to='/watchlist'>WATCHLIST</NavLink>
                <NavLink className='link' to='/portfolio'>PORTFOLIO</NavLink>
                <NavLink className='link' to="course">COURSE</NavLink>
            </div>
            <div className="TopIcons">
            <NavLink className='link tracker' to='/expanse_tracker/Dashboad'><MdDashboard /></NavLink>
            <NavLink className='link Account' to='/account'><MdAccountCircle /></NavLink>
            </div>
        </div>
    </div>
  )
}
