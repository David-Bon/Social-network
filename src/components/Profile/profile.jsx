import React from "react";
import './profile.css'
import MyPosts from "./Myposts/myposts";
import UserInfo from "./UserInfo/userinfo";

const Profile = () => {
return <div className='content container-fluid'>
        <UserInfo/>
        <MyPosts/>
    </div>
};

export default Profile