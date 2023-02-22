import React from 'react'
import { Link } from 'react-router-dom'
import Welcome from './Welcome';


const Home = ({userobj, tokenConfirm}) => { 
    return (
    <div className='container text-center mt-5'>
        {(!tokenConfirm()) ? (<><h1 className='h1'>Book a taxi from your every device</h1>
        <Link to="/login"><button className='btn btn-primary'>Click to Login</button></Link>
        <p>Or connect with...</p>
        <p>Don't have an account yet? <Link to="/register">Sign Up here</Link></p></>):(<Welcome userobj={userobj}/>)}
    </div>
    )
}
 
export default Home;