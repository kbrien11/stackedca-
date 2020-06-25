import React,{} from 'react';



const CompanyReviews =(props) => {
 
    const reviews = props.data[0]

  return(
 <div className ='review-row'>
  <div className = 'totalreviews'>


<h5>{props.data[1]}</h5>
<h4>"{reviews}"</h4>
<div className ='pros'>
    <h4>Pros:</h4>
<h5>{props.data[2] }</h5>
</div>
<div className ='cons'>
<h4>Cons:</h4>

<h5>{props.data[3]}</h5>

</div>


</div>

 </div>
)
}
export default CompanyReviews;