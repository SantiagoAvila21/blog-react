import React from 'react'
import './settings.css'
import { Sidebar } from '../../Components/Sidebar/Sidebar'

export function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle"> Update Your Account </span>
                    <span className="settingsDeleteTitle"> Delete Account </span>
                </div>
                <form className="settingsForm">
                    <label> Profile Picture </label>
                    <div className="settingsPP">
                        <img 
                            className="profilePicture" 
                            src="https://images.pexels.com/photos/5439144/pexels-photo-5439144.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                            alt="" 
                        />
                        <label htmlFor="fileInput"> 
                            <i className="settingsPPIcon far fa-image"></i> 
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}}/>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder='Isaac' />
                    <label>Email</label>
                    <input type="text" placeholder='Isaac@gmail.com' />
                    <label>Password</label>
                    <input type="password"/>
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
