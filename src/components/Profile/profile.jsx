import React from "react";
import s from './profile.module.css'
import MyPosts from "./Myposts/myposts";
import UserInfo from "./UserInfo/userinfo";

const Profile = (props) => {
return <div className={s.content}>
        <UserInfo/>
        <MyPosts posts={props.posts}/>
    </div>
};

export default Profile