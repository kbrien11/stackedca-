import React from 'react'

const SearchTopFive =(props)=>{


    const salary = props.data[0]
    console.log(salary.toLocaleString())
   

   return(
    
   <div className ='searchfivecity'>
       
    <p> {props.data[1]} has an average salary of {'$'+salary+'.00'}</p>
    <hr></hr>
    
    
   </div>


)
}
export default SearchTopFive;