import React from "react";
import s from './userinfo.module.css'
import Preloader from "../../common/Preloader/preloader";

const UserInfo = (props) => {
    const {profile} = props;
    if (!profile) return <Preloader/>;


    return <div className={s.userinfo}>
        <img className={s.img} src={!profile.photos.large ? profile.photos.small : profile.photos.large} alt="avatar"/>
        <p>{profile.fullName}</p>
        <p>{profile.aboutMe}</p>
        <div>{profile.contacts.facebook}</div>
        <div> {profile.lookingForAJob ? profile.lookingForAJobDescription : "Работу не ищу, но если буду искать то:   " + profile.lookingForAJobDescription}</div>
    </div>

};

export default UserInfo
