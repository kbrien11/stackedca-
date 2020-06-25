import React,{useState} from 'react'


const SearchData =(props) =>{

    const salary = props.data[1]
    const sal = salary.toLocaleString()
    console.log(salary.toLocaleString())
return(
    
     <div className = 'row'>
    <div className='search'>
   
    
    <h1>{props.data[0]}</h1>
    <h2>{'$'+sal+'.00'}</h2>
    <h3>{props.data[3]} <h4>({props.data[2]})</h4></h3>
   
    {/* <h4>{props.data[2]}</h4> */}

     {/* <div className='searchhr'>
   <hr></hr>
   </div> */}
    </div>
</div>

    
)


}
export default SearchData;