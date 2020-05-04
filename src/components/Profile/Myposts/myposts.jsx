import React from "react";
import './myposts.css'
import Post from "../Post/post";

const MyPosts = () => {
    return <div>

            <div>
                <div className="input-group input-group-lg">
                    <input className="form-control" type="text" placeholder="Default input"/>
                </div>
                <button className="input-group-text">Add</button>
            </div>


            <div className='group'>
                <Post/>,
                <Post/>,
                <Post/>,
                <Post/>

            </div>
        </div>
};

export default MyPosts