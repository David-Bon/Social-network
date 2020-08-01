import React from "react";
import {Field, reduxForm} from "redux-form";


const DialogsForm = (props) => {
    const {handleSubmit} = props
    return <form onSubmit={handleSubmit}>
        <Field component={"textarea"} placeholder="Enter new message" name="newMessageText"/>
        <button type="submit">Send</button>
    </form>
}

export const DialogsReduxForm = reduxForm({
    form: "dialogsForm"
})(DialogsForm)
