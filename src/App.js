import React from 'react';
import './App.css';
import Content from "./components/Content/content";
import Header from "./components/Header/header";
import Navbar from "./components/Navbar/navbar";

const App = () => {
    return (
        <div className='container-fluid'>
                <Header/>
                <div className='d-flex'>
                    <Navbar/>
                    <Content/>
                </div>
        </div>
    );
};
export default App;