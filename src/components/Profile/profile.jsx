import React from "react";
import s from './profile.module.css'
import MyPosts from "./Myposts/myposts";
import UserInfo from "./UserInfo/userinfo";

const Profile = () => {
return <div className={s.content}>
        <UserInfo/>
        <MyPosts/>
    </div>
};

export default Profile