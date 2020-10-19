export const SET_USERS_DATA = "SET_USERS_DATA";
let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};
export const AuthReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USERS_DATA:
            return {
                ...state, ...action.payload
            };
        default:
            return state;
    }
};