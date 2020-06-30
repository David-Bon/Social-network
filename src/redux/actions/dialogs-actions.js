import {ADD_MESSAGE, UPDATE_NEW_MESSAGE_TEXT} from "../reducers/dialogs-reducer";


export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE
});

export const updateMessageTextAction = (message) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    payload: message
});
