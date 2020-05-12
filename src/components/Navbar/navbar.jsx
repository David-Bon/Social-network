import React from "react";
import s from './navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <nav className={s.nav}>
        <ul className={s.ul}>
            <li><NavLink className={s.btnLink} activeClassName={s.active} to="/profile">Profile</NavLink>
            </li>
            <li><NavLink className={s.btnLink} activeClassName={s.active} to="/news">News</NavLink>
            </li>
            <li><NavLink to="/dialogs" className={s.btnLink} activeClassName={s.active}>Messages</NavLink>
            </li>
            <li><NavLink className={s.btnLink} activeClassName={s.active} to="/music">Music</NavLink>
            </li>
            <li><NavLink className={s.btnLink} activeClassName={s.active} to="/users">Users</NavLink>
            </li>
            <li><NavLink className={s.btnLink} activeClassName={s.active} to="/settings">Settings</NavLink>
            </li>
        </ul>
    </nav>
};

export default Navbar