import React from 'react'
import './single.css'
import {Sidebar} from '../../Components/Sidebar/Sidebar'
import {SinglePost} from '../../Components/SinglePost/SinglePost'

export function Single() {
    return (
        <div className="single">
            <SinglePost />
            <Sidebar />
        </div>
    )
}
