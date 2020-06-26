import React from 'react';
import s from './App.module.css';
import Profile from "./components/Profile/profile";
import Header from "./components/Header/header";
import Navbar from "./components/Navbar/navbar";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/dialogs-container";
import UsersContainer from "./components/Users/usersContainer";
import ProfileContainer from "./components/Profile/profile-container"

const App = (props) => {
    return (
        <div id="app-wrapper" className={s.appWrapper}>
            <Header/>
            <Navbar/>
            <Route path="/profile"
                   render={() => <ProfileContainer className={s.content}/>}/>
            <Route path="/dialogs"
                   render={() => <DialogsContainer/>}/>
            <Route path="/users"
                   render={() => <UsersContainer/>}/>

        </div>
    );
};
export default App;