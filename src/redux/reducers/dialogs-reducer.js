export const ADD_MESSAGE = "ADD_MESSAGE";
let max_id = 6;
export const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

let initialState = {
    peopleData: [
        {id: 1, name: "Alex"},
        {id: 2, name: "Viktor"},
        {id: 3, name: "Oleh"},
        {id: 4, name: "Sonya"},
        {id: 5, name: "Anatoliy"}
    ],
    messagesData: [
        {id: 1, message: "hi how are you?"},
        {id: 2, message: "i'm fine"},
        {id: 3, message: "let's go outside"},
        {id: 4, message: "no! Bill Gates create coronavirus!"},
        {id: 5, message: "maaan are you seriously?"}
    ],
    newMessageText: ''
};


export const DialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {id: max_id++, message: state.newMessageText};
            debugger
            return {
                ...state, messagesData: [...state.messagesData, newMessage], newMessageText: ''
            };
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state, newMessageText: action.payload
            };
        default:
            return state;
    }
}