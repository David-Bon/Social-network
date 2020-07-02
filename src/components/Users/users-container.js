import React, {Component} from "react";
import {connect} from "react-redux";
import {
    follow, followInProgress,
    onToggleFetch,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowInProgress, unFollow
} from "../../redux/actions/users-actions";
import Users from "./users";
import Preloader from "../common/Preloader/preloader";
import {usersApi} from "../../api/api";


class UsersContainer extends Component {

    componentDidMount() {
        this.props.onToggleFetch(true);
        usersApi.getUsers(this.props.currentPage, this.props.totalUsersCount).then(data => {
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
            this.props.onToggleFetch(false);
        })
    };

    onPageChanged = (pageNumber) => {
        this.props.onToggleFetch(true);
        this.props.setCurrentPage(pageNumber);
        usersApi.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.setUsers(data.items);
            this.props.onToggleFetch(false);
        })
    };

    render() {
        const {users, unFollow, follow, setUsers, pageSize, totalUsersCount, currentPage, isFetching, toggleFollowInProgress, followingInProgress} = this.props;
        return <>
            {
                isFetching ? <Preloader/> :
                    <Users users={users} unFollow={unFollow} follow={follow} setUsers={setUsers} pageSize={pageSize}
                           totalUsersCount={totalUsersCount} currentPage={currentPage}
                           onPageChanged={this.onPageChanged} isFetching={isFetching} toggleFollowInProgress={toggleFollowInProgress} followingInProgress={followingInProgress} />
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
    follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, onToggleFetch, toggleFollowInProgress
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);