import React from 'react';
import logo from '../airbnb 1.png'
import './Navbar.css'

export default function Navbar(){
    return(
        <nav>
            <img src={logo} className='nav-logo'/> 
        </nav>
    )
}