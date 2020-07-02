import {
    FOLLOW,
    ON_TOGGLE_FETCH,
    SET_CURRENT_PAGE,
    SET_TOTAL_USERS_COUNT,
    SET_USERS, TOGGLE_IS_FOLLOWING_PROGRESS, UNFOLLOW
} from "../reducers/users-reducer";

export const follow = (id) => ({
    type: FOLLOW,
    payload: id
})

export const unFollow = (id) => ({
    type: UNFOLLOW,
    payload: id
})

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

export const toggleFollowInProgress = (isFetching, userId) => ({
   type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching, userId
});