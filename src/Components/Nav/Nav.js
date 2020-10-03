import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logos/Group1329.png'

const Nav = () => {
    return (
        <div>

            <nav className="container navbar navbar-expand-lg navbar-light nav-bg sticky-top" >
                <Link to="/" className="navbar-brand"><img className="logo-width" width="200px"src={logo} alt=""/></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item mr-5">
                                <span className="nav-link">Home</span>
                            </li>
                            <li className="nav-item mr-5">
                                <span className="nav-link">Donation</span>
                            </li>
                            <li className="nav-item mr-5">
                                <span className="nav-link">Event</span>
                            </li>
                            <li className="nav-item mr-5">
                                <span className="nav-link">Blog</span>
                            </li>
                            <li className="nav-item mr-5">
                                <span className="d-flex justify-content-end"><button className="btn btn-primary nav-link text-white">Register</button></span>
                            </li>
                            <li className="nav-item mr-5">
                                <Link to="/addevent"><span className="d-flex justify-content-end"><button className="btn btn-dark nav-link text-white">Admin</button></span></Link>
                            </li>
                        </ul>
                    </div>
              </nav>
            
            
        </div>
        
    );
};

export default Nav;