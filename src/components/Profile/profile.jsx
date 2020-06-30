import React from "react";
import s from './profile.module.css'
import UserInfo from "./UserInfo/userinfo";
import MyPostsContainer from "./Myposts/myposts-container";

const Profile = (props) => {
return <div className={s.content}>
        <UserInfo profile={props.profile}/>
        <MyPostsContainer/>
    { console.log(props) }
    </div>
};

export default Profile