import React from "react";
import Dialogs from "./dialogs";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {


    return <StoreContext.Consumer>

        {
            (store) => {
                let state = store.getState();

                let addMessage = () => {
                    store.dispatch(addMessageActionCreator())
                };

                let messageChange = (message) => {
                    store.dispatch(updateNewMessageTextActionCreator(message))
                };
                return <Dialogs newMessageText={state.dialogsPage.newMessageText}
                                peopleData={state.dialogsPage.peopleData} messagesData={state.dialogsPage.messagesData}
                                messageChange={messageChange} addMessage={addMessage}/>
            }
        }

    </StoreContext.Consumer>

};


export default DialogsContainer