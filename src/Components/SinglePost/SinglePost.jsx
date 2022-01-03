import React from 'react'
import './singlepost.css'

export function SinglePost() {
    return (
        <div className="singlepost">
            <div className="singlePostWrapper">
                <img 
                    className="singlePostImg" 
                    src="https://images.pexels.com/photos/2739013/pexels-photo-2739013.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"  
                    alt="" 
                />
                <h1 className="singlePostTitle">
                 Magna voluptate aute pariatur sunt.
                 <div className="edit">
                    <i className="singlePostIcon fas fa-edit"></i>
                    <i className="singlePostIcon fas fa-trash-alt"></i>
                 </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor"> Author: <b>Isaac</b> </span>
                    <span className="singlePostDate"> 1 hour ago </span>
                </div>
                <p className="singlePostDesc"> 
                    Lillum est esse sint nisi. Do sint sunt Lorem excepteur id laboris magna minim id exercitation laboris amet. Excepteur veniam eu magna aliquip duis minim et dolore.
                    Velit dolore anim velit culpa est labore laborum amet. Et anim cillum deserunt commodo occaecat enim elit ex ad pariatur voluptate non adipisicing. Consectetur non aute voluptate duis ea. Esse dolore anim cillum non tempor cillum veniam ut voluptate. Officia ut culpa dolore esse excepteur. Dolore incididunt nulla aliquip eiusmod reprehenderit occaecat. Do sunt et sit fugiat voluptate nisi consectetur elit.
                    Incididunt ipsum non in mollit. Nostrud consequat sint amet ex sit anim consequat dolor sunt culpa Lorem. Cillum proident amet sint Lorem consectetur ex aliquip est sit. Elit magna reprehenderit eu aute ea ullamco irure voluptate aliquip eu do reprehenderit. Non do excepteur ea sit qui deserunt.
                    Ex anim ex est magna. Deserunt cillum velit eiusmod est qui magna pariatur laboris. Non veniam esse occaecat sint eiusmod. Duis ea veniam sunt ipsum nulla sunt proident pariatur excepteur. Anim ullamco nisi do ex tempor qui magna sit ea. Incididunt excepteur fugiat voluptate adipisicing sit qui elit ea incididunt anim pariatur aliquip.
                    Proident amet enim sunt qui elit id enim quis excepteur sit tempor aute cillum cupidatat. Fugiat minim aliqua enim amet voluptate laboris nulla excepteur qui veniam quis qui irure. Voluptate magna occaecat nostrud adipisicing commodo. Ea consequat officia anim nisi nulla.
                    Fugiat proident eiusmod adipisicing esse qui nisi elit et duis sit laboris est. Et proident enim cillum eu nostrud sit aute amet aliqua sit eiusmod esse occaecat duis. Do exercitation consequat labore veniam dolor amet magna reprehenderit eu ut aliquip duis. Enim est dolore consequat minim excepteur aliqua non aliqua ad cillum qui irure duis sint. Enim labore minim tempor tempor sint fugiat reprehenderit magna eu pariatur velit in Lorem consequat. Commodo officia veniam cillum excepteur nisi qui. Aliqua exercitation in ipsum sit sunt laborum aliqua ipsum voluptate. 
                </p>
            </div>
        </div>
    )
}
