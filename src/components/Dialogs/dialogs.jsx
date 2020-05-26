import React from "react";
import s from './dialogs.module.css'
import People from "./People/people";
import Messages from "./Messages/messages";
import Newmessage from "./Newmessage/newmessage";

const Dialogs = (props) => {

    let messageElements = props.messagesData.map(el => <Messages message={el.message} id={el.id}/>);
    let peopleElements = props.peopleData.map(el => <People id={el.id} name={el.name}/>);

    return <div className={s.gridContainer}>
        <div className={s.pe}>{peopleElements}</div>
        <div className={s.me}>{messageElements}</div>
        <Newmessage/>
    </div>
};


export default Dialogs