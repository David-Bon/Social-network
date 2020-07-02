import React, {Component} from "react";
import {connect} from "react-redux";
import Header from "./header";
import {setUsersData} from "../../redux/actions/auth-actions";
import {authApi} from "../../api/api";

class HeaderContainer extends Component {

    componentDidMount() {
        authApi.getAuth()
            .then(data => {
            if (data.resultCode === 0) {
                const {id, email, login} = data.data;
                this.props.setUsersData(id, email, login)
            }
        })
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
    setUsersData
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)