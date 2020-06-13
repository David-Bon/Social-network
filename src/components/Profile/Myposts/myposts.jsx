import React from "react";
import s from './myposts.module.css'
import Post from "../Post/post";


const MyPosts = (props) => {
    const {updateNewPostText, addPost, newPostText, posts} = props;
    let postsElements = posts.map(el => <Post key={el.id} text={el.text} likes={el.likes}/>);
    let newPostElements = React.createRef();

    let onPostChange = () => {
        let text = newPostElements.current.value;
        updateNewPostText(text)
    };
    let onAddPost = () => {
        addPost()
    };
    return <div>
        <div className={s.inputGroup}>
            <textarea className={s.formControl} ref={newPostElements} onChange={onPostChange} value={newPostText}
                      placeholder="Default input"/>
        </div>
        <button className={s.inputGroupText} onClick={onAddPost}>Add</button>
        <div className={s.group}>
            {postsElements}
        </div>
    </div>
};

export default MyPosts