import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import logo from '../../Img/logo.png';

export const Navbar = () => {
  return (
    <div className='container fixed-top'>
        <nav className="navbar navbar-expand-lg navbar-light">
			  <div className="container-fluid">
			    <a className="navbar-brand fw-bold" href="#"><img src={logo}></img></a>
			    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
			      <span className="navbar-toggler-icon"></span>
			    </button>
			    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
			      <div className="navbar-nav">
			        <a className="nav-link active" aria-current="page" href="#">Our Service</a>
			        <a className="nav-link" href="#">Why Us</a>
			        <a className="nav-link" href="#">Testimonial</a>
			        <a className="nav-link" href="#">FAQ</a>
			        <button type="button" className="btn btn-success">Register</button>
			      </div>
			    </div>
			  </div>
			</nav>
    </div>
  )
}
