import "./Login.css";
import { NavLink,useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
    const navigate= useNavigate()
const [user, setUser] = useState({email:"", password:""})
  let name, value;
  const LoginInput = (e)=>{
    name = e.target.name;
    value = e.target.value;
    setUser({...user, [name]:value })
  }
  const submit= async()=>{
    const {email, password }= user;

    const res = await fetch('http://localhost:8000/login', {
      method: "POST",
      crossDomain: true,
      headers:{
        'Content-Type':"application/json",
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({email, password})
    })
    .then((response) =>response.json())
    .then((data) => console.log(data));
    // setUser({email:"", password:""})
  }

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input type='text' value={user.email} placeholder="Email" name='email' onChange={LoginInput} className="loginInput" />
            <input  vlaue={user.password} placeholder="Password" name='password' onChange={LoginInput} className="loginInput" />
            <button className="loginButton" onClick={submit}>Log In</button>
            <NavLink><span className="loginForgot">Forgot Password?</span></NavLink>
            <NavLink to='/register' className="loginRegisterButton">
                Sign In
              </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
