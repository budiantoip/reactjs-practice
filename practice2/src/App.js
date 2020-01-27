import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './Timer.js'
import  Biodata , {Greeting} from './Functions.js';
import Clicker from './Clicker.js';
import Toggle from './Toggle.js';

class App extends React.Component {
    render() {
        return <div className = "App" >
        <header className = "App-header" >
        <img src = { logo } className = "App-logo" alt = "logo" / >
        {/* <Greeting name="Gading" age="25"/>
        <Greeting name="Arva"age="20"/> */}
        {/* <Biodata name="Budianto" age="39" /> */}
        {/* <Timer start="0" /> */}
        {/* <Clicker /> */}
        <Toggle />
        </header >
        </div>;
    }
}

export default App;