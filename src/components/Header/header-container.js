import React, {Component} from "react";
import {connect} from "react-redux";
import Header from "./header";
import {getAuthThunkCreator} from "../../redux/actions/auth-actions";

class HeaderContainer extends Component {

    componentDidMount() {
        this.props.getAuth()
    }

    render() {
        return <Header {...this.props} isAuth={this.props.isAuth} login={this.props.login}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

const mapDispatchToProps = {
    getAuth: getAuthThunkCreator
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)