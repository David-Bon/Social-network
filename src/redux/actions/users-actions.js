import {
    ON_TOGGLE_FETCH,
    ON_TOGGLE_FOLLOW,
    SET_CURRENT_PAGE,
    SET_TOTAL_USERS_COUNT,
    SET_USERS
} from "../reducers/users-reducer";


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
