import './register.css'
import React, { useRef } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const history = useNavigate();

    const handleRegistration = async    (e) =>{
        e.preventDefault()

        if (passwordAgain.current.value !== password.current.value){
            password.current.setCustomValidity("Passwords dont match");
        } else {
            const user = {
                username : username.current.value,
                email:email.current.value,
                password:password.current.value,
            };
            try{
                await axios.post("/auth/register",user);
                history("/login");
            } catch(err){
                console.log(err);
            }
            
        }
    }

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
                <form className="loginBox" onSubmit={handleRegistration}>
                    <input placeholder=" Username" required ref={username} className="loginInput" />
                    <input placeholder=" Email" type='email' required ref={email} className="loginInput" />
                    <input placeholder=" Password" type='password' minLength='6' required ref={password}  className="loginInput" />
                    <input placeholder=" Password Again" type='password' required ref={passwordAgain} className="loginInput" />
                    <button className="loginButton" type='submit'>Sign Up</button>
                   
                    <button className="loginRegisterButton">Log into Account</button>
                </form>
            </div>
        </div>
    </div>
  )
}
