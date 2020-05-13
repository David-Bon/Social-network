import React from "react";
import s from './myposts.module.css'
import Post from "../Post/post";

const MyPosts = (props) => {

let postsElements = props.posts.map(el => <Post text={el.text} likes={el.likes}/>);
    return <div>
                <div className={s.inputGroup}>
                    <input className={s.formControl} type="text" placeholder="Default input"/>
                </div>
                <button className={s.inputGroupText}>Add</button>
            <div className={s.group}>
                { postsElements }
            </div>
        </div>
};

export default MyPosts