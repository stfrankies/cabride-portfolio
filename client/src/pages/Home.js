import React from 'react'
import { Link } from 'react-router-dom'
import mapImg from '../assets/images/Map-3.jpeg'

const Home = () => { 
    return (
    <div>
        <img src={mapImg} alt="Map" width="800px" height="600px"className='map-bg'/> <br/>
        <Link to="/login"><button className='btn-info'>Click to Login</button></Link>
        <p>Or connect with...</p>
        <p>Don't have an account yet? <Link to="/register">Sign Up here</Link></p>
    </div>
    )
}
 
export default Home;