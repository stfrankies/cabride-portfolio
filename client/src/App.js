import React from 'react';
import {Routes, Route} from "react-router-dom"
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

import Home from './pages/Home';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header className='header'>
       <Navbar />
      </header>
        <main className='container'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
        </main>
        <footer className='footer text-center'>
          <p className="mt-5 mb-3 text-muted">&copy; cabride 2023</p>
        </footer>
    </div>
  );
}

export default App;
