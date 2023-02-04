import React, { useState } from 'react'
import "../App.css";
import profile from "../images/user.png";
import email from "../images/email.png";
import pass from "../images/pass.png";
import { useAuth0 } from "@auth0/auth0-react";

function Login() {
    const [popupStyle, showPopup] = useState("hide")
    const { loginWithRedirect } = useAuth0()
  
  return (
    <div className="main">
      <div className="sub"></div>
      <div>
        <div className="imgs">
          <div className="container-image">
            <img src={profile} alt="user" className="profile" />
          </div>
        </div>
        <div>
          <h1>Login Page</h1>
          
            </div>
            <div className="login-button">
              <button  onClick={() => loginWithRedirect()}>SignIn/SignOut</button>
            </div>

            <p className="link">
              <a href="/">forgot password ?</a> or<a href="/"> Sign Up </a>
            </p>
            <div className={popupStyle}>
              <h2>Login Failed</h2>
              <p>Username or password incorrect</p>
            </div>
          </div>
        </div>
  )
}

export default Login