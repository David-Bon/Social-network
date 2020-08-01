import {ADD_MESSAGE} from "../reducers/dialogs-reducer";


export const addMessageActionCreator = (message) => ({
    type: ADD_MESSAGE,
    payload: message
});
