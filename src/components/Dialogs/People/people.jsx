import React from "react";
import s from './people.module.css'
import {NavLink} from "react-router-dom";

const People = (props) => {
    let path = "/dialogs/" + props.id;
    return <div className={s.content}>
        <ul className={s.ul}><li key={props.id}><NavLink to={path} className={s.btnLink} activeClassName={s.active}>{props.name}</NavLink></li></ul>
    </div>
};


export default People