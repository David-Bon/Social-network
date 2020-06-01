import React from "react";
import s from './myposts.module.css'
import Post from "../Post/post";
import {} from "../../../redux/state";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";


const MyPosts = (props) => {
    let postsElements = props.posts.map(el => <Post text={el.text} likes={el.likes}/>);

    let newPostElements = React.createRef();

let addPost = () => {
    props.dispatch(addPostActionCreator());
};
let onPostChange = () => {
    let text = newPostElements.current.value;
    props.dispatch(updateNewPostTextActionCreator(text))
};



    return <div>
        <div className={s.inputGroup}>
            <textarea className={s.formControl} ref={newPostElements} onChange={onPostChange} value={props.newPostText} placeholder="Default input"/>
        </div>
        <button className={s.inputGroupText} onClick={addPost} >Add</button>
        <div className={s.group}>
            {postsElements}
        </div>
    </div>
};

export default MyPosts