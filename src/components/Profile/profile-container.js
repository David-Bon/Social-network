import React, {Component} from "react";
import {connect} from "react-redux";
import Profile from "./profile";
import {getProfileByUserIdThunkCreator} from "../../redux/actions/profile-actions";
import {withRouter} from "react-router-dom";

class ProfileContainer extends Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.getProfileUserId(userId)
    };

    render() {
        const {profile} = this.props;
        return <Profile profile={profile} {...this.props}/>
    }

}

let withUrlDataContainerComponent = withRouter(ProfileContainer);

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    usersId: state.UsersReducer.users.id,
});

const mapDispatchToProps = {
     getProfileUserId: getProfileByUserIdThunkCreator
};

export default connect(mapStateToProps, mapDispatchToProps)(withUrlDataContainerComponent);