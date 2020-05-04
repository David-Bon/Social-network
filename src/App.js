import React from 'react';
import './App.css';
import Profile from "./components/Profile/profile";
import Header from "./components/Header/header";
import Navbar from "./components/Navbar/navbar";

const App = () => {
    return (
        <div className='container-fluid'>
                <Header/>
                <div className='d-flex'>
                    <Navbar/>
                    <Profile/>
                </div>
        </div>
    );
};
export default App;