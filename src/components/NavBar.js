import React from 'react';
import {Link as RouterLink} from 'react-router-dom';


const Navbar = () => {
    return (
       
        <div className = 'navbar'>
    
         <div className ="links">
         <h3> StackedCash</h3>
    
         </div>
    <a   href= '/home'as ={RouterLink}> Home  </a>
    <a   href= '/companies'as ={RouterLink}> Companies  </a>
    <a   href= '/positions'as ={RouterLink}> Positions  </a>
    <li> <a  href= '/booking'as ={RouterLink}> Booking </a></li>

    
    
      <span className = "logoutlink"> 
     <a  href= '/'as ={RouterLink}> Logout </a>
      </span> 
      
    </div>
    )
    }
    export default Navbar