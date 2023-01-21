import React from 'react'
import logo from '../assets/images/cabride-logo.png'
import mapImg from '../assets/images/Map-3.jpeg'

const Home = () => {
    return (
    <div>
    <header>
        <img src={logo} alt="Cabride app logo" width="150px" height="60px"/>
      </header>
      <main>
        <img src={mapImg} alt="Map Image" width="" height="813px"/>
        <h1>Order a rider</h1>
        <h4>Create an account and order a ride from the comfort of your device today!</h4>
        <button>Get Started</button>
      </main>
    </div>
    )
}
 
export default Home;