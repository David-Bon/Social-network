import React from "react";
import s from './messages.module.css'

const Messages = (props) => {
  return <div className={s.content}>
  <p>{props.message}</p>
  </div>
};



export default Messages