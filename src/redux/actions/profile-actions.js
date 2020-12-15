import {ADD_POST, SET_STATUS, SET_USER_PROFILE} from "../reducers/profile-reducer";
import {profileApi} from "../../api/api";

export const addPostActionCreator = (newPostText) => ({
    type: ADD_POST,
    payload: newPostText
});

export const setUserProfile = (id) => ({
    type: SET_USER_PROFILE,
    payload: id
});

export const setStatus = (status) => ({
    type: SET_STATUS,
    payload: status
})

export const getProfileUserIdTC = (userId) => async (dispatch) => {
    let data = await profileApi.getIdFromUsers(userId)
    dispatch(setUserProfile(data))
}

export const getUserStatus = (userId) => async (dispatch) => {
    let response = await profileApi.getStatus(userId);
    dispatch(setStatus(response.data))
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileApi.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}