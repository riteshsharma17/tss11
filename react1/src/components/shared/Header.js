import React from 'react'
import{NavLink} from 'react-router-dom'


let Header = ()=>{
    return(
        <>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
  <div className="container-fluid">
    <NavLink className="navbar-brand" href="#">My Sopping App</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    )
}
export default Header;