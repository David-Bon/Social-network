import React from 'react';
import s from './App.module.css';
import Profile from "./components/Profile/profile";
import Header from "./components/Header/header";
import Navbar from "./components/Navbar/navbar";
import Dialogs from "./components/Dialogs/dialogs";
import {Route} from "react-router-dom";

const App = (props) => {
    return (
            <div id="app-wrapper" className={s.appWrapper}>
                <Header/>
                <Navbar/>
                <Route exact path="/profile"
                       render={() => <Profile className={s.content} profilePage={props.state.profilePage} dispatch={props.dispatch} />}/>
                <Route path="/dialogs" render={() => <Dialogs dialogsPage={props.state.dialogsPage} dispatch={props.dispatch}/>}/>

            </div>
    );
};
export default App;