import React from 'react';
import {NavLink} from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
const Navbar = () => {
    return (
        <>
        <h1>Pranish's website:</h1>
        <div className='container-fluid'>
            
                <NavLink className="navbar-brand" to="/">Pranish</NavLink>
               
                    <ul className="navbar-nav ml-auto" >
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/home">Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Service">Services</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/About">About</NavLink>
                        </li>
                       
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Contact">Contact</NavLink>
                        </li>
                    </ul>
                    </div>
                    
                   

                
           
        </>
    )
}

export default Navbar;