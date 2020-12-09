import React, {Component} from "react";
import {connect} from "react-redux";
import Header from "./header";
import {logoutTC} from "../../redux/actions/auth-actions";

class HeaderContainer extends Component {

    render() {
        return (
            <Header {...this.props} isAuth={this.props.isAuth} login={this.props.login} logout={this.props.logout}/>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

const mapDispatchToProps = {
    logout: logoutTC
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)