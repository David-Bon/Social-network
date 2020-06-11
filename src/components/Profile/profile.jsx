import React from "react";
import s from './profile.module.css'
import MyPosts from "./Myposts/myposts";
import UserInfo from "./UserInfo/userinfo";
import MyPostsContainer from "./Myposts/myposts-container";

const Profile = (props) => {
return <div className={s.content}>
        <UserInfo/>
        <MyPostsContainer store={props.store}/>
    </div>
};

export default Profile