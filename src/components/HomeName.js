import React,{useState} from 'react'


const HomeName =(props) => {

    return(
      <div className ='homeName'>
      
      <h3> Welcome to StackedCash</h3>
      <h3> { props.data[0] + ','}</h3>

      </div>


    )
}

export default HomeName;