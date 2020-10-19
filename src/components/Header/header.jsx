import React from "react";
import s from './header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <div className={s.top}>
        <div className={s.loginButt}>
            {props.isAuth ? <div>
                <button onClick={() => props.logout()}>Logout</button>
                {props.login} </div> : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </div>
};

export default Header