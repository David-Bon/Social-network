import React from "react";
import './navbar.css'

const Navbar = () => {
    return <nav className='navbar'>
        <ul>
            <li><a className='navbar-brand' href="#">Profile</a></li>
            <li><a className='navbar-brand' href="#">News</a></li>
            <li><a className='navbar-brand' href="#">Music</a></li>
            <li><a className='navbar-brand' href="#">Settings</a></li>
        </ul>

    </nav>
};

export default Navbar