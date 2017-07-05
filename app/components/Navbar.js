import React, { Component } from 'react'
import { Link } from 'react-router'
// import navbarCSS from './css/Navbar.scss'

const Navbar = props => (
  <div>NAVBAR******
    <div>

      <div className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Projekt</a>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li className="active"><Link to="/home">Home</Link></li>
              <li><Link to="/">All Projects</Link></li>
              <li><Link to="/projects/new">Add a Project</Link></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">My Account<b className="caret"></b></a>
                <ul className="dropdown-menu">
                  <li><Link to="/login">Login</Link></li>
                  <li><Link to="/signup">Signup</Link></li>
                  <li className="divider"></li>

                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Navbar
