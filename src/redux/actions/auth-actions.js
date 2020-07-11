import {SET_USERS_DATA} from "../reducers/auth-reducer";
import {authApi} from "../../api/api";


export const setUsersData = (userId, email, login) => ({
    type: SET_USERS_DATA,
    payload: {userId, email, login}
});

export const getAuthThunkCreator = () => {
    return (dispatch) => {
        authApi.getAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    const {id, email, login} = data.data;
                    dispatch(setUsersData(id, email, login))
                }
            })
    }
}
