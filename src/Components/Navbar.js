import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function Navbar(props) {
  return (

    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.AboutText}</Link>
            </li>

          </ul>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-info" type="submit">Search</button>
          </form> */}

          {/* dark mode options */}
          <div className="btn-toolbar mr-2" role="toolbar" aria-label="Toolbar with button groups">
            <div className="btn-group mr-2" role="group" aria-label="First group">
              <button type="button" onClick={()=>{props.toggleMode('primary')}} className="btn btn-primary mx-2" style={{cursor : 'pointer'}} >1</button>
              <button type="button" onClick={()=>{props.toggleMode('success')}} className="btn btn-success mx-2" style={{cursor : 'pointer'}} >2</button>
              <button type="button" onClick={()=>{props.toggleMode('danger')}} className="btn btn-danger mx-2" style={{cursor : 'pointer'}} >3</button>
              <button type="button" onClick={()=>{props.toggleMode('warning')}} className="btn btn-warning mx-2" style={{cursor : 'pointer'}} >4</button>
              <button type="button" onClick={()=>{props.toggleMode('light')}} className="btn btn-light mx-2" style={{cursor : 'pointer'}} >5</button>
              <button type="button" onClick={()=>{props.toggleMode('dark')}} className="btn btn-dark mx-2" style={{cursor : 'pointer'}} >6</button>
            </div>
          </div>
          {/* <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" onClick={()=>{props.toggleMode(null)}} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle DarkMode</label>
          </div> */}
        </div>
      </div>
    </nav>

  )
}
// Navbar.propTypes = {
//     title: PropTypes.string.isRequired,
//     AboutText: PropTypes.string
//   }; 

Navbar.defaultProps = {
  title: 'Some title here',
  AboutText: 'About'
};
