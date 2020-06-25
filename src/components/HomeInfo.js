import React,{useState} from 'react'


const HomeInfo =(props) =>{

    const salary = props.data[3]
    console.log(salary.toLocaleString())
return(
    <div className = 'homeWrapper'>
    <div className ='homeinfo'>
    
   <h5>Company</h5> 
    <p>{props.data[0]}</p>
    <hr></hr>
    <h5>Title</h5>
    <p>{props.data[1]}</p>
    <hr></hr>
     <h5>Years Worked </h5>
    <p> {props.data[2]}</p>
    <hr></hr>
    <h5>Salary </h5>
     
    <p> {'$'+salary.toLocaleString(2)}</p>
    <hr></hr>
    <h5>City </h5>
    <p> {props.data[4]}</p>
    
    </div>
    </div>
)


}
export default HomeInfo;