import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { OrganizationContext } from '../../App';
import logo from '../../logos/Group1329.png'

const Nav = () => {
    // nav component
    const [org, setOrg, loggedInUser, setLoggedInUser] = useContext(OrganizationContext)
    return (
        <div>

            <nav className="container navbar navbar-expand-lg navbar-light nav-bg sticky-top" >
                <Link to="/" className="navbar-brand"><img className="logo-width" width="200px"src={logo} alt=""/></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item mr-5">
                                <Link to="/"><span className="nav-link">Home</span></Link>
                            </li>
                            <li className="nav-item mr-5">
                                <Link to="/"><span className="nav-link">Donation</span></Link>
                            </li>
                            <li className="nav-item mr-5">
                                <Link to="/"><span className="nav-link">Event</span></Link>
                            </li>
                            <li className="nav-item mr-5">
                                <Link to="/"><span className="nav-link">Blog</span></Link>
                            </li>
                            <li className="nav-item mr-5">
                                {loggedInUser.email?
                                   <div className="justify-content-start nav-link text-dark">{loggedInUser.name}</div>:
                                    <Link to="/login" className="d-flex justify-content-start"><button className="btn btn-primary nav-link text-white">Register</button></Link>
                                }
                            </li>
                            <li>
             
                                 <Link to="/admin"><span className="d-flex justify-content-start"><div className="btn btn-dark nav-link text-white">Admin</div></span></Link>
                             
                             </li>
                        </ul>
                    </div>
              </nav>
            
            
        </div>
        
    );
};

export default Nav;