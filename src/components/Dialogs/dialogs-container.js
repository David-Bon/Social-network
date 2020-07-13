import React, {Component} from "react";
import Dialogs from "./dialogs";
import {connect} from "react-redux";
import {addMessageActionCreator, updateMessageTextAction} from "../../redux/actions/dialogs-actions";
import {withAuthRedirect} from "../HOC/isAuthHOC";
import {compose} from "redux";

class DialogsContainer extends Component {

    render() {
        const {peopleData, messagesData, newMessageText, updateMessageTextAction, addMessageActionCreator} = this.props;
        return <Dialogs newMessageText={newMessageText}
                        peopleData={peopleData} messagesData={messagesData}
                        messageChange={updateMessageTextAction} addMessage={addMessageActionCreator}/>
    }
}

const mapStateToProps = (state) => ({
    peopleData: state.dialogsPage.peopleData,
    messagesData: state.dialogsPage.messagesData,
    newMessageText: state.dialogsPage.newMessageText
});
const mapDispatchToProps = {
    updateMessageTextAction, addMessageActionCreator
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(DialogsContainer)