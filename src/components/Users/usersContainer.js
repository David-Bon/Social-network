import React, {Component} from "react";
import {connect} from "react-redux";
import {onToggleFetch, onToggleFollow, setCurrentPage, setTotalUsersCount, setUsers} from "../../redux/actions/action";
import Users from "./users";
import * as axios from "axios";
import Preloader from "../common/Preloader/preloader";


class UsersContainer extends Component {

    componentDidMount() {
        this.props.onToggleFetch(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.totalUsersCount}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
            this.props.onToggleFetch(false);
        });
    };

    onPageChanged = (pageNumber) => {
        this.props.onToggleFetch(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.onToggleFetch(false);
            });
    };


    render() {
        const {users, onToggleFollow, setUsers, pageSize, totalUsersCount, currentPage, isFetching} = this.props;
        return <>
            {
                isFetching ? <Preloader/> :
                    <Users users={users} onToggleFollow={onToggleFollow} setUsers={setUsers} pageSize={pageSize}
                           totalUsersCount={totalUsersCount} currentPage={currentPage}
                           onPageChanged={this.onPageChanged} isFetching={isFetching}/>
            }
        </>

    }
}

const mapStateToProps = (state) => ({
    users: state.UsersReducer.users,
    pageSize: state.UsersReducer.pageSize,
    totalUsersCount: state.UsersReducer.totalUsersCount,
    currentPage: state.UsersReducer.currentPage,
    isFetching: state.UsersReducer.isFetching
});

const mapDispatchToProps = {
    onToggleFollow, setUsers, setCurrentPage, setTotalUsersCount, onToggleFetch
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);