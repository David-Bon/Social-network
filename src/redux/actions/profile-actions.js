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

export const getProfileUserIdTC = (userId) => {
    return (dispatch) => {
        profileApi.getIdFromUsers(userId)
            .then(data => {
                dispatch(setUserProfile(data))
            })
    };
}

export const getUserStatus = (userId) => (dispatch) => {
    profileApi.getStatus(userId)
        .then(response => dispatch(setStatus(response.data)))
}

export const updateStatus = (status) => (dispatch) => {
    profileApi.updateStatus(status)
        .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status))
                }
            }
        )

}