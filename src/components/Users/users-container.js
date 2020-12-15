import React, {Component} from "react";
import {connect} from "react-redux";
import {
    followThunkCreator,
    onToggleFetch,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    unFollowThunkCreator,
    getUsersThunkCreator
} from "../../redux/actions/users-actions";
import Users from "./users";
import Preloader from "../common/Preloader/preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/selectors/users-selectors";

class UsersContainer extends Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.totalUsersCount)
    };

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize)
    };

    render() {
        const {users, unFollow, follow, setUsers, pageSize, totalUsersCount, currentPage, isFetching, toggleFollowInProgress, followingInProgress} = this.props;
        return (
            <>
                {
                    isFetching ? <Preloader/> :
                        <Users users={users} unFollow={unFollow} follow={follow} setUsers={setUsers} pageSize={pageSize}
                               totalUsersCount={totalUsersCount} currentPage={currentPage}
                               onPageChanged={this.onPageChanged} isFetching={isFetching}
                               toggleFollowInProgress={toggleFollowInProgress}
                               followingInProgress={followingInProgress}/>
                }
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
});

const mapDispatchToProps = {
    follow: followThunkCreator,
    unFollow: unFollowThunkCreator,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    onToggleFetch,
    getUsers: getUsersThunkCreator,
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(UsersContainer)