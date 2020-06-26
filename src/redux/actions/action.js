import {ADD_MESSAGE, UPDATE_NEW_MESSAGE_TEXT} from "../reducers/dialogs-reducer";
import {ADD_POST, SET_PROFILE_INFO, SET_USER_PROFILE, UPDATE_NEW_POST_TEXT} from "../reducers/profile-reducer";
import {
    ON_TOGGLE_FETCH,
    ON_TOGGLE_FOLLOW,
    SET_CURRENT_PAGE,
    SET_TOTAL_USERS_COUNT,
    SET_USERS
} from "../reducers/users-reducer";

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

export const setUsers = (users) => ({
    type: SET_USERS,
    payload: users
});

export const setCurrentPage = (pageNumber) => ({
    type: SET_CURRENT_PAGE,
    payload: pageNumber
});

export const setTotalUsersCount = (totalCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    payload: totalCount
});

export const onToggleFetch = (bool) => ({
    type: ON_TOGGLE_FETCH,
    payload: bool
});

export const setUserProfile = (id) => ({
   type: SET_USER_PROFILE,
    payload: id
});