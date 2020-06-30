import React, {Component} from "react";
import {connect} from "react-redux";
import Profile from "./profile";
import {setUserProfile} from "../../redux/actions/profile-actions";
import * as axios from "axios";
import {withRouter} from "react-router-dom";

class ProfileContainer extends Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId).then(response => {
            this.props.setUserProfile(response.data)
        });
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
    setUserProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(withUrlDataContainerComponent);