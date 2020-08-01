import React from "react";
import  {LoginReduxForm} from "./LoginForm/loginForm";


const LoginPage = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }


    return <LoginReduxForm onSubmit={onSubmit}/>
};

export default LoginPage