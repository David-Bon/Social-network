import React from "react";
import s from './newmessage.module.css'

const Newmessage = () => {
  return <div className={s.content}>
    <input type="text"/>
    <button className='btn btn-outline-secondary'>Send</button>
  </div>
};



export default Newmessage