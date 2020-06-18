import {ADD_MESSAGE, UPDATE_NEW_MESSAGE_TEXT} from "../reducers/dialogs-reducer";
import {ADD_POST, UPDATE_NEW_POST_TEXT} from "../reducers/profile-reducer";
import {ON_TOGGLE_FOLLOW, SET_USERS} from "../reducers/users-reducer";

export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE
});

export const updateMessageTextAction = (message) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    payload: message
});

export const addPostActionCreator = () => ({
    type: ADD_POST
});

export const updateNewPostTextActionCreator = (message) => ({
    type: UPDATE_NEW_POST_TEXT, payload: message
});

export const onToggleFollow = (id) => ({
   type: ON_TOGGLE_FOLLOW,
    payload: id
});

export const setUsersActionCreator = (users) => ({
   type: SET_USERS,
    payload: users
});