import React from "react";
import s from './myposts.module.css'
import Post from "../Post/post";

const MyPosts = () => {
    return <div>
            <div>
                <div className={s.inputGroup}>
                    <input className={s.formControl} type="text" placeholder="Default input"/>
                </div>
                <button className={s.inputGroupText}>Add</button>
            </div>


            <div className={s.group}>
                <Post/>
                <Post/>
                <Post/>
                <Post/>

            </div>
        </div>
};

export default MyPosts