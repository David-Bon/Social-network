import React from 'react';
import s from './App.module.css';
import Profile from "./components/Profile/profile";
import Header from "./components/Header/header";
import Navbar from "./components/Navbar/navbar";
import Dialogs from "./components/Dialogs/dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div id="app-wrapper" className={s.appWrapper}>
                <Header/>
                <Navbar/>
                <div className={s.content}>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/dialogs" component={Dialogs}/>
                </div>

            </div>
        </BrowserRouter>
    );
};
export default App;