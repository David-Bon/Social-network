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
                <Route exact path="/profile"
                       render={() => <Profile className={s.content} newPostText={props.newPostText}
                                              updateNewPostText={props.updateNewPostText}
                                              posts={props.store.profilePage.posts} addPost={props.addPost}/>}/>
                <Route path="/dialogs" render={() => <Dialogs peopleData={props.state.dialogsPage.peopleData}
                                                              messagesData={props.state.dialogsPage.messagesData}/>}/>

            </div>
        </BrowserRouter>
    );
};
export default App;