import React from "react";
import s from './dialogs.module.css'
import People from "./People/people";
import Messages from "./Messages/messages";
import {DialogsReduxForm} from "./DialogsReduxForm/dialogsForm";

const Dialogs = (props) => {
    const {messagesData, peopleData, addMessage} = props;
    let messageElements = messagesData.map(el => <Messages key={el.id} message={el.message} id={el.id}/>);
    let peopleElements = peopleData.map(el => <People key={el.id} id={el.id} name={el.name}/>);

    const onSubmit = (formData) => {
        addMessage(formData.newMessageText)
        formData.newMessageText= ""
    }

    return <div className={s.gridContainer}>
        <div className={s.pe}>{peopleElements}</div>
        <div className={s.me}>{messageElements}</div>
        <div className={s.content}><DialogsReduxForm onSubmit={onSubmit}/></div>

    </div>
};


export default Dialogs