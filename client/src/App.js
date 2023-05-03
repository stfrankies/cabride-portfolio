import React, {useEffect, useState} from 'react';
import {Routes, Route, useNavigate} from "react-router-dom"
import {MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'

import Home from './pages/Home';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import { connectApi } from './services/connectApi';
import BookRide from './components/BookRide';
import ProtectRoute from './components/ProtectRoute';
import Notification from './components/Notification';
import Dashboard from './pages/Dashboard';


function App() {

  const [token, setToken] = useState("");
  const [userobj, setUserobj] = useState({})
  const [notify, setNotify] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [position, setPosition] = useState(null)

  const navigate = useNavigate()

  const userLogin = tokenval => {
    if (tokenval !== "") {
      console.log(tokenval)
      window.sessionStorage.setItem("token", tokenval)
      setToken(tokenval);
    }
  }

  const TheBooking = bookdata =>{
    setUserobj({...userobj.bookings, bookdata: bookdata})
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
    navigate("/")
  }

  useEffect(() =>{
    navigator.geolocation.getCurrentPosition((pos) =>{
    setPosition([pos.coords.latitude, pos.coords.longitude])
  })
  }, [])

  if(!position){
    return<div className='App'>Loading current user location</div>
  }
  
  
  return (
    <div className="App">
      <header className='header'>
       <Navbar tokenConfirm = {tokenConfirm} logOut = {logOut}/>
      </header>
      <main className='container vh-100'>
        <Notification notification={notify}/>
        <Routes> 
          <Route path="/" element={<Home userobj={userobj} tokenConfirm={tokenConfirm}/>}/>
          <Route path="/login" element={<Login userLogin={userLogin} setNotify={setNotify}/>}/>
          <Route path="/register" element={<Register userRegister={userRegister} setNotify={setNotify}/>}/>
          <Route path="/bookride" element={<ProtectRoute tokenConfirm={tokenConfirm}>
            <BookRide TheBooking={TheBooking} setNotify={setNotify} setModalVisible={setModalVisible} modalVisible={modalVisible} position={position}/></ProtectRoute>}>
          </Route>
          <Route path="/dashboard" element={<ProtectRoute tokenConfirm={tokenConfirm}>
            <Dashboard userobj={userobj}/></ProtectRoute>}></Route>
        </Routes>
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor:[12, 41]})}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
        </main>
        <footer className='footer text-center'>
          <p className="mt-5 mb-3 text-muted">&copy; cabride 2023</p>
        </footer>
    </div>
  );
}

export default App;