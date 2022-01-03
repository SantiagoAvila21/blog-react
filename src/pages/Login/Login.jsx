import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'

export function Login() {
    return (
        <div className="login">
        <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label> Email </label>
                <input type="text" placeholder="Enter your email..." className='loginInput' />
                <label> Password  </label>
                <input type="password" placeholder="Enter your password..." className='loginInput'/>
                <button className="loginPadButton">Login</button>
            </form>
            <Link className="link" to="/register"><button className="loginRegisterButton">Register</button></Link>
        </div>
    )
}
