export const SET_USERS_DATA = "SET_USERS_DATA";


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};
export const AuthReducer = (state = initialState, action) => {
    debugger
    switch (action.type) {

        case SET_USERS_DATA:
            return {
                ...state, ...action.payload,
                isAuth: true
            };
        default:
            return state;
    }

};