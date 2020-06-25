import React from 'react'

const SearchMaxCity =(props)=>{


    const salary = props.data[3]
    console.log(salary.toLocaleString())
   

   return(
    
   <div className ='Searchmaxcity'>
       
    <p> The City that has the highest average salaries is {props.data[2]}. The highest paying job is labled {props.data[0]} which makes {'$'+salary+'.00'}</p>
    
    
   </div>


)
}
export default SearchMaxCity;