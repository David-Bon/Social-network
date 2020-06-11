import React from "react";
import Dialogs from "./dialogs";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";

const DialogsContainer = (props) => {
    let state = props.store.getState();

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    };

    let messageChange = (message) => {
        props.store.dispatch(updateNewMessageTextActionCreator(message))
    };

    return <div><Dialogs dispatch={props.store.dispatch} newMessageText={state.dialogsPage.newMessageText}
                         peopleData={state.dialogsPage.peopleData} messagesData={state.dialogsPage.messagesData} messageChange={messageChange} addMessage={addMessage} />
    </div>
};


export default DialogsContainer