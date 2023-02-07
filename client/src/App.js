import React, {useState} from 'react';
import {Routes, Route} from "react-router-dom"
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

import Home from './pages/Home';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import { connectApi } from './services/connectApi';

function App() {

  const [token, setToken] = useState("");
  const [userobj, setUserobj] = useState({})


  const userLogin = tokenval => {
    if (tokenval !== "") {
      console.log(tokenval)
      window.sessionStorage.setItem("token", tokenval)
      setToken(tokenval);
    }
  }

  const userRegister = details => {
    const { /*user*/ token = "" } = details
    if (token !== "") {
      window.sessionStorage.setItem("token", token)
      setToken(token);
    }
  }

  const getUser = (tkn) => {
    if (!userobj.hasOwnProperty('name')) {
      new connectApi().setHeaders({ 'x-auth-token': tkn, "content-type": "application/json" }).get('/users/me').then((res) => {
        //console.log(res)
        setUserobj(res)
      })
    }
  }

  const tokenConfirm = () => {
    if (token !== "") {
      getUser(token)
      return true
    }
    const tok = window.sessionStorage.getItem('token')
    if (tok && tok !== "") {
      setToken(tok)
      getUser(tok)
      return true;
    }
    return false
  }

  const logOut = () =>{
    setToken("")
    setUserobj({})
    window.sessionStorage.removeItem("token")
  }

  return (
    <div className="App">
      <header className='header'>
       <Navbar tokenConfirm = {tokenConfirm} logOut = {logOut}/>
      </header>
      <main className='container'>
        <Routes>
          <Route path="/" element={<Home userobj={userobj} tokenConfirm={tokenConfirm}/>}/>
          <Route path="/login" element={<Login userLogin={userLogin} />}/>
          <Route path="/register" element={<Register userRegister={userRegister} />}/>
        </Routes>
        </main>
        <footer className='footer text-center'>
          <p className="mt-5 mb-3 text-muted">&copy; cabride 2023</p>
        </footer>
    </div>
  );
}

export default App;
