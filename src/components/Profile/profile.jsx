import React from "react";
import s from './profile.module.css'
import UserInfo from "./UserInfo/userinfo";
import MyPostsContainer from "./Myposts/myposts-container";

const Profile = (props) => {
return <div className={s.content}>
        <UserInfo updateStatus={props.updateStatus} status={props.status} profile={props.profile}/>
        <MyPostsContainer/>
    </div>
};

export default Profile