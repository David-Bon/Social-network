import React from "react";
import s from './users.module.css'
import userPhoto from '../../assets/users/a9e0549fb28534ed1841202912114913.jpg'
import {NavLink} from "react-router-dom";
import {usersApi} from "../../api/api";

const Users = (props) => {
    const {users, unFollow, follow, currentPage, pageSize, totalUsersCount, onPageChanged, followingInProgress, toggleFollowInProgress} = props;

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div className={s.gridContainer}>
        <div>
            {
                pages.map(p => {
                    return <span className={currentPage === p && s.selectedPage}
                                 onClick={() => {
                                     onPageChanged(p);
                                 }}>{p}</span>
                })}
        </div>
        {
            users.map((item) => {
                const {id, photos, name, followed, status} = item;
                let fStatus = followed ? "Unfollow" : "Follow";
                return <div className={s.userItem} key={id}>
                    <span>{name}</span>
                    <NavLink to={"/profile/" + id}><img src={photos.small != null ? photos.small : userPhoto}
                                                        alt="profile pic" className={s.img}/></NavLink>
                    {
                        followed ? <button disabled={followingInProgress.some(userId => userId === id)} className={s.follow} onClick={() => {
                            toggleFollowInProgress(true, id)
                            usersApi.toggleFollowDel(id)
                                .then(data => {
                                    if (data.resultCode === 0) {
                                        unFollow(id)
                                    }
                                    props.toggleFollowInProgress(false, id)
                                })
                        }}>{fStatus}</button> : <button disabled={followingInProgress.some(cId => cId === id)} className={s.follow} onClick={() => {
                            toggleFollowInProgress(true, id)
                            usersApi.toggleFollowPost(id)
                                .then(data => {
                                    if (data.resultCode === 0) {
                                        follow(id)
                                    }
                                    props.toggleFollowInProgress(false, id)
                                })
                        }}>{fStatus}</button>
                    }
                    <span className={s.status}>{status}</span>
                </div>
            })
        }
    </div>


};

export default Users