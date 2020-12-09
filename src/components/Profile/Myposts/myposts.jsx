import React from "react";
import s from './myposts.module.css'
import Post from "../Post/post";
import {MyPostReduxForm} from "./MyPostReduxForm/MyPostForm";
import {maxLengthCreator} from "../../../utils/validators/validators";


const MyPosts = (props) => {
    const maxLength10 = maxLengthCreator(10)
    const {addPost, posts} = props;
    const onSubmit = (formData) => {
        addPost(formData.newPostText)
        formData.newPostText = ''
    }
    let postsElements = posts.map(el => <Post key={el.id} text={el.text} likes={el.likes}/>);

    return (
        <div>
            <div className={s.inputGroup}>
                <MyPostReduxForm onSubmit={onSubmit} maxLength10={maxLength10} addPost={addPost}/>
            </div>
            <div className={s.group}>
                {postsElements}
            </div>
            {console.log(props)}
        </div>
        )

};

export default MyPosts