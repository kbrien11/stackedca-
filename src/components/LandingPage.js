import React,{useState,useEffect} from 'react';
import { Link as RouterLink} from 'react-router-dom';

import { useHistory } from 'react-router-dom';
import LandingText from './LandingPageText';
import NavbarTwo from './LandingPageNavBar';
import LandingTests from './LandingTestimonials'
// import {FaMoneyBillAlt,FaWindows,FaPersonBooth} from 'react-icons/fa'

function Landing() {
  



  return (
      <div >
          <NavbarTwo/>
     <div className="wrapper">
       <div className='showcase-container'>
         <div className='showcase-content'>
     <h1> <span className='showcase-h1'> Stacked</span>Cash</h1>
   
     <h3 className='showcase-h3'> Sign up for free to find which companies, positions and cities pay the most</h3>
     <a href= 'about' as ={RouterLink}> Learn More </a>
         </div>
         </div>
     </div>
     < section id="landing-info">

    <div className='info-img'>

    </div>
    <div className='info-content'>
    <h2><span className='showcase-h1'>How</span> it works?</h2>
     <h5> Step 1. Register for the app</h5>
     <h5> Step 2. Fill out your personal/company info</h5>
     <h5>Step 3. Search for salary/company info on the app</h5>
    </div>

    </section> 

    {/* <section className = 'flex-columns'>
     <div className = 'landing-row'>

     <div  className='landing-column'>

        <div className ='landing-column-1'>
       <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQkpc8hmSNAAUYxmexlACLLW8SvuFfZeM3x9KqbLr3mc_Emf43p&amp;usqp=CAU" />

        </div>
        <div className ='landing-column-2'>
        <h2><span className='showcase-h1'>How</span> it works?</h2>
     <h5> Step 1. Register for the app</h5>
     <h5> Step 2. Fill out your personal/company info</h5>
     <h5>Step 3. Search for salary/company info on the app</h5>
     
        </div>
    </div>
     </div>
    </section> */}
    
    <section id='landing-test'>
     <div className = 'test-content'>

      <h1> What are customers Say</h1>

         <div class = 'testimonial'>
        <h2>Keith Brien</h2>
        <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" height='200' />
        <h4>Software Engineer <span className='showcase-h1'>Gemini.</span> </h4>
        <h4>"StackedCash helped me find the right companies to interview for by helping me negoiate my salary."</h4>
        </div>
        <div class = 'testimonial'>
        <h2>Sam Brien</h2>
        <img src="https://static01.nyt.com/images/2019/11/17/books/review/17Salam/Salam1-superJumbo.jpg" height='200' />
        <h4>Senior Manager <span className='showcase-h1'>Kate Spade.</span> </h4>
        <h4>"StackedCash helped me find which companies to avoid and which to apply to."</h4>
        </div>

     </div>

    </section>
    
    <section id='features'>
      <div className ='box'>
      {/* <span className='fa'> <FaMoneyBillAlt /></span> */}
         <h3> Salary</h3>
         <h5>Find the right salary you deserve</h5>
      </div>
      <div className ='box box-2'>
     {/* <span className='fa'><FaWindows /></span>  */}
      <h3> Companies</h3>
         <h5>Find good companies to work for</h5>
      </div>
      <div className ='box'>
     {/* <span className='fa'><FaPersonBooth /></span>  */}
      <h3>Positions</h3>
         <h5>Find which positions are paying the highest</h5>
      </div>


    </section>
    <div className='footer-bg'>
   <section className='footer'>
    <h4> Copright to StackedCash Inc.</h4>
   </section>
   </div>
    </div>
    
  );
}

export default Landing;
