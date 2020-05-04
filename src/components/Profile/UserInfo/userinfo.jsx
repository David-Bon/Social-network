import React from "react";
import './userinfo.css'

const UserInfo = () => {
    return <div>
        <div className='userinfo card'>
            <div className="card-body"><p className='p'>Status:</p></div>
            <img className='card-img-bottom'
                 src="https://images.unsplash.com/photo-1555445091-5a8b655e8a4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                 alt="avatar"/>
        </div>
    </div>

};

export default UserInfo
