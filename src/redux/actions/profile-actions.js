import {ADD_POST, SET_USER_PROFILE, UPDATE_NEW_POST_TEXT} from "../reducers/profile-reducer";
import {profileApi} from "../../api/api";

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

export const getProfileByUserIdThunkCreator = (userId) => {
    return (dispatch) => {
        profileApi.getIdFromUsers(userId)
            .then(data => {
                dispatch(setUserProfile(data))
            })
        };
    }
