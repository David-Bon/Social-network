import {
    FOLLOW,
    ON_TOGGLE_FETCH,
    SET_CURRENT_PAGE,
    SET_TOTAL_USERS_COUNT,
    SET_USERS, TOGGLE_IS_FOLLOWING_PROGRESS, UNFOLLOW
} from "../reducers/users-reducer";
import {usersApi} from "../../api/api";

export const unFollow = (id) => ({
    type: UNFOLLOW,
    payload: id
})

export const follow = (id) => ({
    type: FOLLOW,
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

export const getUsersThunkCreator = (currentPage, totalUsersCount) => async (dispatch) => {
    dispatch(onToggleFetch(true));
    let data = await usersApi.getUsers(currentPage, totalUsersCount);
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
    dispatch(onToggleFetch(false));
};

const followUnfollowFlow = async (dispatch, id, apiMethod, actionCreator) => {
    dispatch(toggleFollowInProgress(true, id));
    let data = await apiMethod(id);
    if (data.resultCode === 0) {
        dispatch(actionCreator(id))
    }
    dispatch(toggleFollowInProgress(false, id));
}


export const followThunkCreator = (id) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, id, usersApi.follow.bind(usersApi), follow)
    }
}

export const unFollowThunkCreator = (id) => async (dispatch) => {
    followUnfollowFlow(dispatch, id, usersApi.unfollow.bind(usersApi), unFollow)
}