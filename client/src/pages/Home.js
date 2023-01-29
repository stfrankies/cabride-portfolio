import React from 'react'
import { Link } from 'react-router-dom'
import mapImg from '../assets/images/Map-3.jpeg'

const Home = () => { 
    return (
    <div>
      <main>
        <img src={mapImg} alt="Map"/>
        <Link to="/login"><button>Click to Login</button></Link>
        <p>Or connect with...</p>
        <p>Don't have an account yet? <Link to="/register">Sign Up here</Link></p>
      </main>
    </div>
    )
}
 
export default Home;