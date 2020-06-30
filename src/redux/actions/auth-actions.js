import {SET_USERS_DATA} from "../reducers/auth-reducer";


export const setUsersData = (userId, email, login) => ({
    type: SET_USERS_DATA,
    payload: {userId, email, login}
});