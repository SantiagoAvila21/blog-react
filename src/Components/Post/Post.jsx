import React from 'react'
import './post.css'
import { Link } from 'react-router-dom'

export function Post() {
    return (
        <div className="post">
            <img 
                className="postImg"
                src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Tech</span>
                    <span className="postCat">Life</span>
                </div>
                <Link to="/post/:id" className="link"><span className="postTitle">Sunt ex consequat ad.</span></Link>
                <hr/>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">Commodo Lorem ea cillum incididunt. Proident proident ea exercitation nostrud sunt nisi. Pariatur eu fugiat reprehenderit duis nulla deserunt ipsum aliqua. Laboris Lorem do eu Lorem mollit in excepteur esse irure proident ad fugiat cupidatat. Non do veniam et minim Lorem ad officia aliquip est amet quis esse fugiat exercitation. Mollit in magna pariatur quis ipsum occaecat nostrud. Do consequat et quis minim sint ipsum ex ad ea aliqua ea Lorem. Nulla labore amet id aliquip qui veniam ipsum consectetur ex.</p>
        </div>
    )
}
