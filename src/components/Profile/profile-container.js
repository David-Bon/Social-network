import React, {Component} from "react";
import {connect} from "react-redux";
import Profile from "./profile";
import {
    getProfileUserIdTC,
    getUserStatus,
    updateStatus
} from "../../redux/actions/profile-actions";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            debugger
            userId = this.props.authorized
        }
        this.props.getProfileUserIdTC(userId)
        this.props.getUserStatus(userId)
    };


    render() {
        const {profile, status, updateStatus} = this.props;
        return (
            <Profile updateStatus={updateStatus} profile={profile} status={status} {...this.props}/>
        )

    }

}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    usersId: state.UsersReducer.users.id,
    status: state.profilePage.status,
    authorized: state.auth.userId,
    isAuth: state.auth.isAuth
});

const mapDispatchToProps = {
    getProfileUserIdTC,
    getUserStatus, updateStatus
};
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
)(ProfileContainer)