import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'
const Nav = () => {
  return(
      <>
 <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link style={{color:'yellow' }} className="navbar-brand" to="#">Navbar</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link style={{color:'yellow'}} className="nav-link" to="/home">Home </Link>
      </li>
      <li className="nav-item">
        <Link style={{color:'yellow'}} className="nav-link" to="/student">Student</Link>
      </li>
      <li className="nav-item">
        <Link style={{color:'yellow'}} className="nav-link" to="/contact">Contact</Link>
      </li>
    </ul>
  </div>
</nav>
      
      </>
   
  )

}

export default Nav