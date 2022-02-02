import React from 'react';
import './App.css';
import {Column} from "./Header/Column";
import {MainBlock} from "./MainBlock/MainBlock";
import {Contacts} from "./HomeMenu/Contacts";
import {Info} from "./MainBlock/Info/Info";
import {Projects} from "./Projects/Projects";

function App() {
    return (
        <div className='App'>
            <div className="column">
                <Column/>
            </div>
            <div className='mainBlock'>
                <MainBlock/>
                <Info/>
                <Projects/>
            </div>
            <div className='home'>
                <Contacts/>
            </div>
        </div>
    );
}

export default App;
