import React from 'react'


const HappyText =(props)=>{


const output = props.datas[0]
console.log(output)
   const happyFunction =() =>{
       if (output >4.5){
        return 'The average employee reported to be very happy'
       }
       else if (output >=4 && output<4.4){
           return 'The average employee reported to be happy'
       }
       else if (output >=3 && output<4){
        return 'The average employee reported to be moderately happy'
    }
    else if (output >=2 && output <3){
        return 'The average employee reported to be unhappy'
    }
    else{
        return 'The average employee reported to be miserable.'
    }
   }

   

   return(
    
   <div className = 'SearchTitle'>
       
 
   
    <h5>{happyFunction(output)}</h5>
    
    
   </div>


)
}
export default HappyText;