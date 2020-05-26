import React from "react";
import s from './profile.module.css'
import MyPosts from "./Myposts/myposts";
import UserInfo from "./UserInfo/userinfo";

const Profile = (props) => {
return <div className={s.content}>
        <UserInfo/>
        <MyPosts posts={props.posts} newPostText={props.newPostText} updateNewPostText={props.updateNewPostText} addPost={props.addPost}/>
    </div>
};

export default Profile