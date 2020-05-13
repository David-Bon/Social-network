import React from 'react';
import s from './App.module.css';
import Profile from "./components/Profile/profile";
import Header from "./components/Header/header";
import Navbar from "./components/Navbar/navbar";
import Dialogs from "./components/Dialogs/dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
            <div id="app-wrapper" className={s.appWrapper}>
                <Header/>
                <Navbar/>
                <div className={s.content}>
                    <Route exact path="/profile" render={()=> <Profile posts={props.state.posts}/>}/>
                    <Route path="/dialogs" render={()=> <Dialogs peopleData={props.state.peopleData} messagesData={props.state.messagesData}/>}/>
                </div>

            </div>
        </BrowserRouter>
    );
};
export default App;