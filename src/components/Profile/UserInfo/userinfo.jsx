import React from "react";
import s from './userinfo.module.css'

const UserInfo = () => {
    return <div>
        <div className={s.userinfo}>
            <img className={s.img}
                 src="https://images.unsplash.com/photo-1555445091-5a8b655e8a4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                 alt="avatar"/>
        </div>
    </div>

};

export default UserInfo
