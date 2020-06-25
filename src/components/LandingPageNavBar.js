import React from 'react';
import {Link as RouterLink} from 'react-router-dom';


const NavbarTwo = () => {
    return (
       
        <div className='landingpage-navbar'>
    
      
    
      <ul>
    <li> <a  href= '/register'as ={RouterLink}> Register </a></li>
    <li> <a  href= '/login'as ={RouterLink}> Login </a></li>
    <li> <a  href= '/about'as ={RouterLink}> About </a></li>
    <li> <a  href= '/contact'as ={RouterLink}> Contact </a></li>
    <li> <a  href= '/booking'as ={RouterLink}> Booking </a></li>

     </ul>
      
    </div>
    )
    }
    export default NavbarTwo;