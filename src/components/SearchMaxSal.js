import React from 'react'


const SearchMaxSal =(props)=>{
   
    const sal = props.data[1]
    const salary = sal.toLocaleString()
        

   return(
    
   <div className ='SearchTitle'>
       
    <h5> {props.data[2]} is currently located in {props.data[4]} city(s).The highest paid position at {props.data[2]} is {props.data[0]} which makes {'$'+salary+'.00'} located in {props.data[3]}.</h5>
    
   
   </div>


)
}
export default SearchMaxSal;