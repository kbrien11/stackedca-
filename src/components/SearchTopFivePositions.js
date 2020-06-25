import React from 'react'

const SearchTopPositions =(props)=>{


    const salary = props.data[0]
    console.log(salary.toLocaleString())
   

   return(
    
   <div className ='searchfivecity'>
       
    <h5> {props.data[1]}({props.data[2]}) at {props.data[3]} makes an annual salary of {'$'+salary+'.00'}</h5>
    <hr></hr>
    
    
   </div>


)
}
export default SearchTopPositions;