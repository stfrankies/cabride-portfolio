import React from 'react'
import { Link } from 'react-router-dom';

const Welcome = ({userobj}) => {
  
    return ( 
    <div>
        <h3 className=''>Hi {userobj.name}, </h3>
        <h3 className='text-success'>Where are you going today?</h3>
        <Link to="/book"><button className='btn btn-success mt-5 m-3 p-3'><h5>Book a ride</h5></button></Link>
        <button className='btn btn-danger mt-5 m-3 p-3'><h5>Cancel a trip</h5></button>
    </div> 
    );
}
 
export default Welcome;