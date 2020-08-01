import React from "react";
import s from './users.module.css'
import userPhoto from '../../assets/users/a9e0549fb28534ed1841202912114913.jpg'
import {NavLink} from "react-router-dom";
import PagesRender from "./pagesRender";

const Users = (props) => {
    const {users, unFollow, follow, followingInProgress, currentPage, pageSize, totalUsersCount, onPageChanged} = props;

    return <div className={s.gridContainer}>
        <PagesRender currentPage={currentPage} pageSize={pageSize} totalUsersCount={totalUsersCount}
                     onPageChanged={onPageChanged}/>
        {
            users.map((item) => {
                const {id, photos, name, followed, status} = item;
                let fStatus = followed ? "Unfollow" : "Follow";
                return <div className={s.userItem} key={id}>
                    <span>{name}</span>
                    <NavLink to={"/profile/" + id}><img src={photos.small != null ? photos.small : userPhoto}
                                                        alt="profile pic" className={s.img}/></NavLink>
                    {
                        followed ?
                            <button disabled={followingInProgress.some(userId => userId === id)} className={s.follow}
                                    onClick={() => {
                                        follow(id)
                                    }}>{fStatus}</button> :
                            <button disabled={followingInProgress.some(cId => cId === id)} className={s.follow}
                                    onClick={() => {
                                        unFollow(id)
                                    }}>{fStatus}</button>
                    }
                    <span className={s.status}>{status}</span>
                </div>
            })
        }
    </div>


};

export default Users