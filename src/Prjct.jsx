import React from "react";
import {Routes, Route ,NavLink} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Navbar from './Navbar';


const Prjct=()=>
{
    return(
        <>
       
        <Routes>
        <Route exact path='/' element={<Navbar/>}/>
            <Route exact path='/home' element={<Home/>}/>
            <Route exact path='/about' element={<About/>}/>
            <Route exact path='/service' element={<Service/>}/>
            <Route exact path='/contact' element={<Contact/>}/>
            
        </Routes>
        <NavLink to='/'>Main page</NavLink>
        
        

        </>
    );
} 

export default Prjct;
