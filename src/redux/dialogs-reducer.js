const ADD_MESSAGE = "ADD-MESSAGE";
let max_id = 6;
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});

export const updateNewMessageTextActionCreator = (message) => ({type: UPDATE_NEW_MESSAGE_TEXT, message});


export const DialogsReducer = (state, action) => {
    switch (action.type) {
        case "ADD-MESSAGE":
            let newMessage = {id: max_id++, message: state.newMessageText};
            state.messagesData.push(newMessage);
            state.newMessageText = '';
            return state;
        case "UPDATE-NEW-MESSAGE-TEXT":
            state.newMessageText = action.message;
            return state;
    }
};