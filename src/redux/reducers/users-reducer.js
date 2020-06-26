export const ON_TOGGLE_FOLLOW = "ON_TOGGLE_FOLLOW";
export const SET_USERS = "SET_USERS";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
export const ON_TOGGLE_FETCH = "ON_TOGGLE_FETCH";
let initialState = {
     users: [ ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
};
export const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ON_TOGGLE_FOLLOW:
            const userIdx = state.users.findIndex(item => item.id === action.payload);
            const userItem = state.users[userIdx];
            const newUsersItem = {...userItem, ['followed'] : !userItem['followed']};
            const newUsersArray = [
                ...state.users.slice(0, userIdx), newUsersItem, ...state.users.slice(userIdx + 1)];
            return {...state, users: newUsersArray};
        case SET_USERS:
            return {...state, users: action.payload};
            default:
            return state;
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.payload};
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.payload};
        case ON_TOGGLE_FETCH:
                return {...state, isFetching: action.payload}


    }
};

export default UsersReducer