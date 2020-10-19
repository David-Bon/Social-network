import React from "react";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../redux/actions/auth-actions";
import Redirect from "react-router-dom/es/Redirect";
import {LoginReduxForm} from "./LoginReduxForm/LoginForm";

const LoginPage = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
        props.loginThunkCreator(formData.email, formData.password, formData.rememberMe)
    }
    return props.isAuth ? <Redirect to={"/profile"}/> : <LoginReduxForm onSubmit={onSubmit} setLoginData={props.loginThunkCreator}/>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {loginThunkCreator})(LoginPage)