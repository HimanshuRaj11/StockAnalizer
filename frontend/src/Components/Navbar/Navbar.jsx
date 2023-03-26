import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { ImHome } from "react-icons/im";
import { MdAccountCircle, MdDashboard } from "react-icons/md";
import GetCookie from "../../Hooks/GetCookie";
import RemoveCookie from "../../Hooks/RemoveCookie";

export default function Navbar() {
  const [Cookie, setCookie] = useState(null);
  const logout =()=>{
    fetch("http://localhost:8000/logout",{
        method: 'POST',
        crossDomain: true,
        headers:{
          'Content-type': "application/json",
          'Access-Control-Allow-Origin':"*",
        },
        body:JSON.stringify({
          Cookie
        })
      }).then((res)=>res.json())
      .then((data)=>{
        // RemoveCookie('FinFriend')
      })
  }
  useEffect(() => {
    fetch('http://localhost:8000', {
      method: 'GET',
      credentials: 'include'
    })
    const cookie = GetCookie("FinFriend");
    setCookie(cookie);
    document.cookie = cookie;
    console.log(cookie);
  }, []);
  return (
    <>
      <div className="Navbar">
        <div className="MainNavbar">
          <div className="Logo">
            <span className="LogoName1 Font1">Fin</span>
            <span className="LogoName2 Font5">FRIEND</span>
          </div>
          <div className="serach">
            <input type="search" placeholder="Search" />
          </div>
          <div className="links">
            <NavLink className="link HomeIcon" to="/">
              <ImHome />
            </NavLink>
            <span className="link">NEWS </span>
            <span className="link">STOCKS</span>
            <NavLink className="link" to="/watchlist">
              WATCHLIST
            </NavLink>
            <NavLink className="link" to="/portfolio">
              PORTFOLIO
            </NavLink>
            <NavLink className="link" to="course">
              COURSE
            </NavLink>
          </div>
          <div className="TopIcons">
            <NavLink className="link tracker" to="/expense_tracker/Dashboad">
              <MdDashboard />
            </NavLink>
            <NavLink className="link Account" to="/account">
              <MdAccountCircle />
            </NavLink>
          {
            Cookie !== null ? (
              <NavLink onClick={logout} className="auth logout">
                 Logout
            </NavLink>
            ):(
                <>
              <NavLink className="auth" to="/login">
              Login
            </NavLink>
            <NavLink className="auth" to="/register">
              SignIn
            </NavLink>
                </>
            )
          }
          </div>
        </div>
      </div>
    </>
  );
}
