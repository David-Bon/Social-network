import React from "react";
import s from './userinfo.module.css'
import Preloader from "../../common/Preloader/preloader";

const UserInfo = (props) => {
   if(!props.profile) return <Preloader/>


    return <div className={s.userinfo}>

        <img className={s.img}
             src={props.profile.photos.large}
             alt="avatar"/>
    </div>

};

export default UserInfo
