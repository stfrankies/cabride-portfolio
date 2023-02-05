import React from 'react'
import { Link } from 'react-router-dom'
import mapImg from '../assets/images/Map-3.jpeg'


const Home = () => { 
    return (
    <div className='container text-center mt-5'>
        <img src={mapImg} alt="Map" width="800px" height="600px"className='map-bg'/> <br/>
        <p className='lead'>Book a taxi from your every device</p>
        <Link to="/login"><button className='btn btn-primary'>Click to Login</button></Link>
        <p>Or connect with...</p>
        <p>Don't have an account yet? <Link to="/register">Sign Up here</Link></p>
    </div>
    )
}
 
export default Home;