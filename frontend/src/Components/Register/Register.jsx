import "./Register.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import  SetCookie  from "../../Hooks/SetCookie";
export default function Register() {
const navigate = useNavigate()
  const [user, setUser] =useState({
    name:"", username:"", email:"",mobile:"", password:"", confirmPassword:""
  })
  let name, value;
 const handleInput = (e)=>{
  name = e.target.name;
  value = e.target.value;
  setUser({...user, [name]:value})
 }

 const register = () => {
  const { name,username,email, mobile ,password, confirmPassword} = user
  if( username && email && password && (password === confirmPassword)){
      fetch("http://localhost:8000/signin",{
        method: 'POST',
        crossDomain: true,
        headers:{
          'Content-type': "application/json",
          'Access-Control-Allow-Origin':"*",
        },
        body:JSON.stringify({
            name,mobile,username, email, password, confirmPassword
        })
      }).then((res)=>res.json())
      .then((data)=>{
        SetCookie('FinFriend', JSON.stringify(data.token))
        navigate('/')
      })
  } else {
      alert("invlid input")
  }
  setUser({
    name:"", username:"", email:"",mobile:"", password:"", confirmPassword:""
  })
}
  return (
    <div className="RegisterContainer">
      <div className="registerWrapper">
        <div className="registerLeft">
          
        </div>
       
          <div className="registerRight">
            <div className="registerBox">
              <input type="name" value={user.name} name="name" onChange={handleInput} placeholder="name" className="registerInput" />
              <input type="text" value={user.username} name="username" onChange={handleInput} placeholder="Username" className="registerInput" />
              <input type="email" value={user.email} name="email" onChange={handleInput} placeholder="Email" className="registerInput" />
              <input type="mobile" value={user.mobile} name="mobile" onChange={handleInput} placeholder="Phone" className="registerInput" />
              <input type="password" value={user.password} name="password" onChange={handleInput} placeholder="Password" className="registerInput" />
              <input type="password" value={user.confirmPassword} name="confirmPassword" onChange={handleInput} placeholder=" Confirm Password" className="registerInput" />
              <button className="registerButton" onClick={register}>Sign Up</button>
              <NavLink to='/login' className="registerRegisterButton">
                Log into Account
              </NavLink>
            </div>
          </div>
      </div>
    </div>
  );
}
