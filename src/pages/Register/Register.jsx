import React from 'react'
import './register.css'
import { Link } from 'react-router-dom'

export function Register() {
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm">
                <label> Email </label>
                <input type="text" placeholder="Enter your email..." className='registerInput' />
                <label> Username </label>
                <input type="text" placeholder="Enter your username..." className='registerInput' />
                <label> Password  </label>
                <input type="password" placeholder="Enter your password..." className='registerInput'/>
                <button className="registerPadButton">Register</button>
            </form>
            <Link className="link" to="/login"><button className="registerLoginButton">Login</button></Link>
        </div>
    )
}
