import {ADD_MESSAGE, UPDATE_NEW_MESSAGE_TEXT} from "../reducers/dialogs-reducer";
import {ADD_POST, SET_USER_PROFILE, UPDATE_NEW_POST_TEXT} from "../reducers/profile-reducer";

export const addPostActionCreator = () => ({
    type: ADD_POST
});

export const updateNewPostTextActionCreator = (message) => ({
    type: UPDATE_NEW_POST_TEXT, payload: message
});

export const setUserProfile = (id) => ({
    type: SET_USER_PROFILE,
    payload: id
});