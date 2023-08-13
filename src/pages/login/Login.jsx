import './login.css'
import React, { useContext, useRef } from 'react';
import { loginCall } from '../../apiCalls';
import { AuthContext } from '../../context/AuthContext';
import {CircularProgress} from "@mui/material"

export default function Login() {

    const email = useRef();
    const password = useRef();
    const {user,isFetching,error,dispatch} = useContext(AuthContext);

    const handleClick = (e)=>{
        e.preventDefault()
        
        loginCall({email: email.current.value,password:password.current.value},dispatch);
    }

    console.log(user,error)
   
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h4 className="loginLogo">Social</h4>
                <span className="loginDesc">
                    Connect with friends and the world around you on Social.
                </span>
            </div>
            <div className="loginRight">
                <form className="loginBox" onSubmit={handleClick}>
                    <input placeholder=" Email" type='email' required className="loginInput" ref={email}/>
                    <input placeholder=" Password"  type="password" required className="loginInput" minLength={6} ref={password}/>
                    <button className="loginButton" type='submit' disabled={isFetching}>{isFetching? <CircularProgress color="inherit"/> : "Log In"}</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className="loginRegisterButton">{isFetching? <CircularProgress color="inherit"/> : "Create New Account"}</button>
                </form>
            </div>
        </div>
    </div>
  )
}
