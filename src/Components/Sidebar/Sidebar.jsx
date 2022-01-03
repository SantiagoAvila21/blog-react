import React from 'react'
import './sidebar.css'

export function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle"> ABOUT ME </span>
                <img className="sidebarImg" src="https://images.pexels.com/photos/5439144/pexels-photo-5439144.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                <p> Aute nostrud mollit ea cillum excepteur culpa nostrud. Nisi incididunt aute tempor exercitation ipsum id et. Nisi laborum do labore quis commodo consectetur tempor ut excepteur. Proident commodo labore eiusmod nisi est non pariatur. Mollit dolor non dolore sit sunt labore sit veniam fugiat. </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle"> CATEGORIES </span>
                <ul className="sidebarList">
                    <li className="sidebarListItem"> Life </li>
                    <li className="sidebarListItem"> Music </li>
                    <li className="sidebarListItem"> Style </li>
                    <li className="sidebarListItem"> Tech </li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle"> FOLLOW US </span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}
