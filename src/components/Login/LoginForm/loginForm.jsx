import React from "react";
import {Field, reduxForm} from "redux-form";


const LoginForm = (props) => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder="Login" name={"login"} component="input" type="text"/>
            </div>
            <div>
                <Field placeholder="Password" name={"password"} component="input" type="text"/>
            </div>
            <div>
                <Field name={"rememberMe"} component="input" type="checkbox"/>
            </div>
            <button type="submit">Log in</button>
        </form>
    )
};

export const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm)
