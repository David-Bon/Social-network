import {maxLengthCreator, required} from "../../../utils/validators/validators";
import Button from "@material-ui/core/Button";
import React from "react";
import {Field, reduxForm} from "redux-form";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";


const maxLength15 = maxLengthCreator(15)
const maxLength25 = maxLengthCreator(25)


const renderTextField = ({label, input, meta: {touched, invalid, error}}) => (
    <TextField
        label={label}
        error={touched && invalid}
        helperText={touched && error}
        {...input}
    />
)

const renderCheckBox = ({input, label}) => (
    <div>
        <FormControlLabel
            label={label}
            control={
                <Checkbox
                    checked={!!input.value}
                    onChange={input.onChange}
                />
            }/>
    </div>
)

const LoginForm = (props) => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name={"email"} label="Login" component={renderTextField} type="text"
                       validate={[required, maxLength25,]}/>
            </div>
            <div>
                <Field name={"password"} label="Password" component={renderTextField} type="text"
                       validate={[required, maxLength15]}/>
            </div>
            <div>
                <Field name={"rememberMe"} label="remember me" component={renderCheckBox} type="checkbox"/>
            </div>
                {props.error && <div>{props.error}</div>}
            <Button type="submit" color="primary" variant="contained">Log in</Button>
        </form>
    )
};

export const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)