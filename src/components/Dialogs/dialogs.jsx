import React from "react";
import s from './dialogs.module.css'
import People from "./People/people";
import Messages from "./Messages/messages";
import Newmessage from "./Newmessage/newmessage";

const Dialogs = (props) => {

    let messageElements = props.dialogsPage.messagesData.map(el => <Messages message={el.message} id={el.id}/>);
    let peopleElements = props.dialogsPage.peopleData.map(el => <People id={el.id} name={el.name}/>);

    return <div className={s.gridContainer}>
        <div className={s.pe}>{peopleElements}</div>
        <div className={s.me}>{messageElements}</div>
        <Newmessage dispatch={props.dispatch} newMessageText={props.dialogsPage.newMessageText}/>
    </div>
};


export default Dialogs