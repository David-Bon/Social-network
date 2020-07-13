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
import {withAuthRedirect} from "../HOC/isAuthHOC";


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
        return <>
            {
                isFetching ? <Preloader/> :
                    <Users users={users} unFollow={unFollow} follow={follow} setUsers={setUsers} pageSize={pageSize}
                           totalUsersCount={totalUsersCount} currentPage={currentPage}
                           onPageChanged={this.onPageChanged} isFetching={isFetching}
                           toggleFollowInProgress={toggleFollowInProgress} followingInProgress={followingInProgress}/>
            }
        </>

    }
}

const mapStateToProps = (state) => ({
    users: state.UsersReducer.users,
    pageSize: state.UsersReducer.pageSize,
    totalUsersCount: state.UsersReducer.totalUsersCount,
    currentPage: state.UsersReducer.currentPage,
    isFetching: state.UsersReducer.isFetching,
    followingInProgress: state.UsersReducer.followingInProgress
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
    withAuthRedirect
)(UsersContainer)