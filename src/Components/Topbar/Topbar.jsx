import React from 'react'
import './topbar.css'
import {Link} from 'react-router-dom'

export function Topbar() {
    let user = false;
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList"> 
                    <li className="topListItem"> 
                        <Link className="link" to="/">HOME</Link> 
                    </li>  
                    <li className="topListItem"> 
                        <Link className="link" to="/">ABOUT</Link> 
                    </li>  
                    <li className="topListItem"> 
                        <Link className="link" to="/">CONTACT</Link> 
                    </li>  
                    <li className="topListItem"> 
                        <Link className="link" to="/write">WRITE</Link> 
                    </li>  
                    <li className="topListItem"> 
                        {user && <Link className="link" to="/">LOGOUT</Link> }
                    </li>  
                </ul>
            </div>
            <div className="topRight">
                {(user) ? (
                    <img
                    className="topImg" 
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                    alt="" 
                />) : (
                    <ul className="topList">
                        <li className="topListItem"> 
                            <Link className="link" to="/login">LOGIN</Link>  
                        </li> 
                        <li className="topListItem"> 
                            <Link className="link" to="/register">REGISTER</Link>  
                        </li> 
                    </ul>
                )}
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
