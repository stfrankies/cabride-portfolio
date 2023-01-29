import React from 'react';
import {Routes, Route, Link} from "react-router-dom"
import './App.css';
import logo from './assets/images/cabride-logo.png'
import Home from './pages/Home';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <header>
       <Link to="/"><img src={logo} alt="Cabride app logo" width="150px" height="60px"/></Link>
      </header>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
    </div>
  );
}

export default App;
