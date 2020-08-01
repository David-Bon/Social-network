import React, {Component} from "react";
import Dialogs from "./dialogs";
import {connect} from "react-redux";
import {addMessageActionCreator} from "../../redux/actions/dialogs-actions";
import {withAuthRedirect} from "../HOC/isAuthHOC";
import {compose} from "redux";

class DialogsContainer extends Component {

    render() {
        const {peopleData, messagesData, addMessageActionCreator} = this.props;
        return <Dialogs peopleData={peopleData} messagesData={messagesData} addMessage={addMessageActionCreator}/>
    }
}

const mapStateToProps = (state) => ({
    peopleData: state.dialogsPage.peopleData,
    messagesData: state.dialogsPage.messagesData,
});
const mapDispatchToProps = {
    addMessageActionCreator
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(DialogsContainer)