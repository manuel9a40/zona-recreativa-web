import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Route, HashRouter} from "react-router-dom";
import catalog from "./pages/catalog";

import Navigation from './components/Navigation.jsx'

function App() {
    return (<div className="App">
        <HashRouter>
            <Navigation/>
            <div className='content'>
                <Route path="/pages/catalog" component={catalog}/>
            </div>
        </HashRouter>
    </div>);
}

export default App;
