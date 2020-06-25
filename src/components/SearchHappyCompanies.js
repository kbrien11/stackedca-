import React from 'react'

const SearchHappyComp =(props)=>{
 
   const output = props.data[0]

   const happyFunction =() =>{
      if (output >4.5){
       return 'Which is very happy :)'
      }
      else if (output >=4 && output<4.4){
          return 'Which is good'
      }
      else if (output >=3 && output<4){
       return 'Which is moderately happy'
   }
   else if (output >=2 && output <3){
       return 'Which is unhappy'
   }
   else{
       return 'Which is miserable :('
   }
  }

console.log(props.data[0])

   return(
    
    <div className ='happyCompanies'>
       
    <p> {props.data[1]}</p>
   <p> Has an average employee happiness of {props.data[0]}</p>
   <p> {happyFunction(props.data[0])}</p>
    <hr></hr>
    
    
   </div>


)
}
export default SearchHappyComp;