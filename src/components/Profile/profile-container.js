import React, {Component} from "react";
import {connect} from "react-redux";
import Profile from "./profile";
import {setUserProfile} from "../../redux/actions/action";
import * as axios from "axios";

class ProfileContainer extends Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data)
        });
    };

    render() {
        const {profile, usersId, isFetching} = this.props;
        return <Profile profile={profile} {...this.props}/>
        }

}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    usersId: state.UsersReducer.users.id,
});

const mapDispatchToProps = {
    setUserProfile,
};
export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);