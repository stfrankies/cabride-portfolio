import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/images/cabride-logo.png'


const Navbar = () => {
    return ( 
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container'>
          <Link to="/" className='navbar-brand'><img src={logo} alt="Cabride app logo" width="150px" height="60px"/></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Login</a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="/">Home</Link></li>
                  <li><Link className="dropdown-item" to="/register">Register</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="/login">Login here</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
     );
}
 
export default Navbar;