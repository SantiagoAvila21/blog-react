import React from 'react'
import './writepost.css'

export function WritePost() {
    return (
        <div className="writePost">
            <img 
                className="writeImg"
                src="https://images.pexels.com/photos/2397262/pexels-photo-2397262.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                alt="" 
            />
            <form action="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="fileIcon far fa-plus-square"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}} />
                    <input type="text" placeholder='Title' className="writeInput" autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Tell your story..." type="text" className="writeInput writeText"></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}
