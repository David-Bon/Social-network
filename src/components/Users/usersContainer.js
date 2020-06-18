import React, {Component} from "react";
import {connect} from "react-redux";
import {onToggleFollow, setUsersActionCreator} from "../../redux/actions/action";
import Users from "./users";


class UsersContainer extends Component {



    render() {
        const {users, onToggleFollow, setUsersActionCreator} = this.props;
        return <Users users={users} onToggleFollow={onToggleFollow} setUsers={setUsersActionCreator}/>
    }
}

const mapStateToProps = (state) => ({
    users: state.UsersReducer.users
});

const mapDispatchToProps = {
    onToggleFollow, setUsersActionCreator
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);