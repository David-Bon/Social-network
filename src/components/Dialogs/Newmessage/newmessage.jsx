import React from "react";
import s from './newmessage.module.css'
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/dialogs-reducer";

const Newmessage = (props) => {

  let newMessageElements = React.createRef();

  let addMessage = () => {
    props.dispatch(addMessageActionCreator())
  };

  let onMessageChange = () => {
    let message = newMessageElements.current.value;
    props.dispatch(updateNewMessageTextActionCreator(message))
  };

  return <div className={s.content}>
    <textarea onChange={onMessageChange} ref={newMessageElements} value={props.newMessageText}/>
    <button onClick={addMessage}>Send</button>
  </div>
};



export default Newmessage