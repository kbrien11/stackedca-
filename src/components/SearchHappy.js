import React from 'react'
// import {FaSmile} from 'react-icons/fa'

const SearchHappy =(props)=>{


const output = props.datas[0]


   const stars = []
   for (let i =0; i < (output); i += 1) {
      stars.push(output)
   }

   return(
    <div className ='stars'>
       
    <div className ='substars'>
    {stars}
       </div>
   
    
    
    
   </div>


)
}
export default SearchHappy;