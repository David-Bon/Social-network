import React from "react";
import s from './dialogs.module.css'
import People from "./People/people";
import Messages from "./Messages/messages";
import Newmessage from "./Newmessage/newmessage";

const Dialogs = () => {
  return <div className={s.gridContainer}>
      <People/>
   <Messages/>
    <Newmessage/>
    </div>
};



export default Dialogs