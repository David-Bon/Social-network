import React from "react";
import s from './messages.module.css'

const Messages = (props) => {
    return <div className={s.content}>
        <span className={s.sho} key={props.id}>{props.message}</span>
    </div>
};


export default Messages