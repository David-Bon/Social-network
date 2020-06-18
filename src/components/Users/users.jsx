import React from "react";
import s from './users.module.css'

const Users = (props) => {

    const {users, onToggleFollow} = props;
    return <div className={s.gridContainer}>
        {
            users.map((item) => {
                const {id, photoUrl, name, followed, status, location} = item;
                let fStatus = followed ? "Unfollow" : "Follow";
                return <div className={s.userItem} key={id}>
                    <span>{name}</span>
                    <img src={photoUrl} alt="profile pic" className={s.img}/>
                    <button className={s.follow} onClick={() => onToggleFollow(id)}>{fStatus}</button>
                    <span className={s.status}>{status}</span>
                    <span className={s.location}>location</span>
                </div>
            })
        }
    </div>


};

export default Users