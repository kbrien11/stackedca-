import React from 'react'

const SearchSal =(props)=>{

const salary = props.data[1]
console.log(salary.toLocaleString())
   
   

   return(
    
   <div className ='SearchTitle'>
       
    <p>{'$'+salary.toLocaleString(2) +'.00'}</p>
    
    
   </div>


)
}
export default SearchSal;