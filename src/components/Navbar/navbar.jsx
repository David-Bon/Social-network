import React from "react";
import './navbar.css'

const Navbar = () => {
    return <nav className="nav flex-column">
        <ul>
            <li><a className="nav-link active" href="#">Profile</a>
            </li>
            <li><a className="nav-link" href="#">News</a>
            </li>
            <li><a className="nav-link" href="#">Messages</a>
            </li>
            <li><a className="nav-link" href="#">Music</a>
            </li>
            <li><a className="nav-link" href="#">Users</a>
            </li>
            <li><a className="nav-link" href="#">Settings</a>
            </li>
        </ul>
    </nav>
};

export default Navbar