import {SET_USERS_DATA} from "../reducers/auth-reducer";
import {authApi} from "../../api/api";
import {stopSubmit} from "redux-form";


export const setUsersData = (userId, email, login, isAuth) => ({
    type: SET_USERS_DATA,
    payload: {userId, email, login, isAuth}
});

export const getAuthThunkCreator = () => async (dispatch) => {
    let data = await authApi.getAuth();
    if (data.resultCode === 0) {
        const {id, email, login} = data.data;
        dispatch(setUsersData(id, email, login, true))
    }
}

export const loginThunkCreator = (email, password, rememberMe) => async (dispatch) => {
    let response = await authApi.logIn(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(getAuthThunkCreator())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "unknown error, the server may have crashed, please try again later"
        let action = stopSubmit("login", {_error: message})
        dispatch(action)
    }
}

export const logoutTC = () => async (dispatch) => {
    let response = await authApi.logOut();
    if (response.data.resultCode === 0) {
        dispatch(setUsersData(null, null, null, false))
    }
}