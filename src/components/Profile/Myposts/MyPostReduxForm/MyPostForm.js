import React from "react";
import {Field, reduxForm} from "redux-form";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


const renderTextField = ({input, meta: {touched, invalid, error}}) => (
    <TextField
        variant="filled"
        multiline
        placeholder="enter your text here..."
        error={touched && invalid}
        helperText={touched && error}
        {...input}
    />

)


const MyPostForm = (props) => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit}>
            <Field name="newPostText" component={renderTextField} type="text"/>
            <Button variant="contained" color="primary" type="submit">Submit</Button>
            {console.log(props)}
        </form>
    )
}

export const MyPostReduxForm = reduxForm({
    // a unique name for the form
    form: 'newPost'
})(MyPostForm)
