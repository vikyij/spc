import React from 'react';
import Header from './Header'
import Home from './Home'
import Footer from './Footer'
import {Switch, Route} from 'react-router-dom'

import './App.css';

function App() {
  return (
    <div className="App">  
            <Header />
            <Home />
            <Footer />
    </div>
  );
}

export default App;
