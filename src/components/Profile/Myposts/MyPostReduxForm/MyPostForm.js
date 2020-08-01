import React from "react";
import {Field, reduxForm} from "redux-form";


const MyPostForm = (props) => {
    const {handleSubmit} = props
    return <form onSubmit={handleSubmit}>
        <Field placeholder="Enter text here" name="newPostText" component="textarea" type="text"/>
        <button type="submit">Submit</button>
        {console.log(props)}
    </form>
}

export const MyPostReduxForm = reduxForm({
    // a unique name for the form
    form: 'newPost'
})(MyPostForm)
