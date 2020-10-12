import React from 'react';
import Main from './main/Main.jsx';
import logo from '../assets/images/logo.svg';
import '../assets/css/reset.css';
import './App.css';

function App() {
    return (
        <div className="App">
            <header>
                <img src={logo} className="App-logo" alt="logo" />

                Web Checker
            </header>
            <Main />
            <footer>
                2020 Moisés Alcocer - MIT Licence
            </footer>
        </div>
    );
}

export default App;
