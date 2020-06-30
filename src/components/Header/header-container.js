import React, {Component} from "react";
import {connect} from "react-redux";
import Header from "./header";
import * as axios from 'axios'
import {setUsersData} from "../../redux/actions/auth-actions";

class HeaderContainer extends Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(response => {
            if (response.data.resultCode === 0) {
                const {id, email, login} = response.data.data;
                this.props.setUsersData(id, email, login)
            }

        })
    }


    render() {

        return <Header {...this.props} isAuth={this.props.isAuth} login={this.props.login}/>

    }

};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

const mapDispatchToProps = {
    setUsersData
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)