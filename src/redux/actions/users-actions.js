import {
    FOLLOW,
    ON_TOGGLE_FETCH,
    SET_CURRENT_PAGE,
    SET_TOTAL_USERS_COUNT,
    SET_USERS, TOGGLE_IS_FOLLOWING_PROGRESS, UNFOLLOW
} from "../reducers/users-reducer";
import {usersApi} from "../../api/api";

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

export const getUsersThunkCreator = (currentPage, totalUsersCount) => {
    return (dispatch) => {
        dispatch(onToggleFetch(true));
        usersApi.getUsers(currentPage, totalUsersCount).then(data => {
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
            dispatch(onToggleFetch(false));
        })

    };
};

export const followThunkCreator = (id) => {
    return (dispatch) => {
      dispatch(toggleFollowInProgress(true, id));
        usersApi.toggleFollowDel(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unFollow(id))
                }
                dispatch(toggleFollowInProgress(false, id));
            })
    }
}

export const unFollowThunkCreator = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowInProgress(true, id))
        usersApi.toggleFollowPost(id)
            .then(data => {
                if (data.resultCode === 0) {
                  dispatch(follow(id))
                }
              dispatch(toggleFollowInProgress(false, id))
            })
    }
}