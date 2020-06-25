import React from 'react'

const SearchDepartment=(props)=>{
 
  

console.log(props.data[0])

   return(
    
    <div className ='departmentlevel'>
       
    <p> {props.data[0]}</p>
   
    
    
    
   </div>


)
}
export default SearchDepartment;