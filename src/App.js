import React from 'react';
import s from './App.module.css';
import Navbar from "./components/Navbar/navbar";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/dialogs-container";
import UsersContainer from "./components/Users/users-container";
import ProfileContainer from "./components/Profile/profile-container";
import HeaderContainer from "./components/Header/header-container";
import LoginPage from "./components/Login/login";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeApp} from "./redux/actions/app-actions";
import Preloader from "./components/common/Preloader/preloader";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div id="app-wrapper" className={s.appWrapper}>
                <HeaderContainer/>
                <Navbar/>
                <Route path="/profile/:userId?"
                       render={() => <ProfileContainer className={s.content}/>}/>
                <Route path="/dialogs"
                       render={() => <DialogsContainer/>}/>
                <Route path="/users"
                       render={() => <UsersContainer/>}/>
                <Route path="/login"
                       render={() => <LoginPage/>}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

const mapDispatchToProps = {
    initializeApp
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(App)