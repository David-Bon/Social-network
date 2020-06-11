import React from 'react';
import s from './App.module.css';
import Profile from "./components/Profile/profile";
import Header from "./components/Header/header";
import Navbar from "./components/Navbar/navbar";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/dialogs-container";

const App = (props) => {
    return (
            <div id="app-wrapper" className={s.appWrapper}>
                <Header/>
                <Navbar/>
                <Route exact path="/profile"
                       render={() => <Profile className={s.content}/>}/>
                <Route path="/dialogs" render={() => <DialogsContainer/>}/>

            </div>
    );
};
export default App;