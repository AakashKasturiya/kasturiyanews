import React from 'react';
import './Navbar.css';
import logo from '../images/Logo.png'
import {NavLink} from "react-router-dom";
import Hamburger from './Hamburger';

const Navbar = () =>{

    return(
        <>
        <div className="nav">
        <div className="icon"><Hamburger/></div>
        
        <div className="logo-content">
        
        <div style={{display:'flex',justifyContent:'center'}}>

        <NavLink to="/" >   
      <img src={logo} style={{cursor:"pointer",width:"40px",height:"25px",marginTop:"12px",paddingRight:"5px"}} alt="logo"/></NavLink><h3>KasturiyaNewsApp</h3>
</div>
  
        </div>
        </div>
        </>
    );
}

export default Navbar;