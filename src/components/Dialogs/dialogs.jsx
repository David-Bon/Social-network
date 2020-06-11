import React from "react";
import s from './dialogs.module.css'
import People from "./People/people";
import Messages from "./Messages/messages";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
    const {messagesData, peopleData, newMessageText, addMessage, messageChange} = props;
    let messageElements = messagesData.map(el => <Messages message={el.message} id={el.id}/>);
    let peopleElements = peopleData.map(el => <People id={el.id} name={el.name}/>);

    let newMessageElements = React.createRef();

    let onAddMessage = () => {
        addMessage()
    };

    let onMessageChange = () => {
        let message = newMessageElements.current.value;
        messageChange(message)
    };

    return <div className={s.gridContainer}>
        <div className={s.pe}>{peopleElements}</div>
        <div className={s.me}>{messageElements}</div>
        <div className={s.content}><textarea onChange={onMessageChange} ref={newMessageElements} value={newMessageText}/>
            <button onClick={onAddMessage}>Send</button></div>

    </div>
};


export default Dialogs