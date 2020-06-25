import React,{useEffect,useState} from 'react';
import moment from 'moment';
// import {FaRocketchat} from 'react-icons/fa'
import Navbar from './NavBar';

const AddReview =() => {

    const[message,setMessage] = useState(false)
    const[pros,setPros] = useState(false)
    const[company,setCompany] = useState("")
    const[cons,setCons] = useState(false)
    const [token, setToken] = useState(sessionStorage.getItem('token'))

    const sendMessage = async(props) =>{
        const endpoint = `http://localhost:5000/api/add_review/${token}/${company}`;
        const data = {
           
           review:message,
           time_stamp:now,
           pros:pros,
           cons:cons,
        };
        const configs = {
          method: "POST",
          mode: "cors",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(data)
        }
        const response = await fetch(endpoint, configs);
        const res = await response.json();
        
        console.log(res)
        console.log(JSON.stringify(props))
      }

      let now = moment().format("MM/DD/YYYY HH:mm:ss")


    return (
        <div>
            <Navbar/>
    <div className = 'review-flex'>
       
      {/* <div className = 'messwrapper'>
       <div class = 'messcard'>  
       
       <div class="form-container">  */}


<div className = 'reviewwrapper'>
  <h2> Add Review Below</h2>
<label for="msg"><b>Comp</b></label>
    <input onChange={e => setCompany(e.target.value)} placeholder="Company.." name="msg" required></input> <br/>
  <label for="msg"><b>Revs</b></label>
    <input onChange={e => setMessage(e.target.value)} placeholder="Review.." name="msg" required></input> <br/>
    <label for="msg"><b>Pros</b></label>
    <input onChange={e => setPros(e.target.value)} placeholder="Pros.." name="msg" required></input><br/>

    <label for="msg"><b>Cons</b></label>
    <input onChange={e => setCons(e.target.value)} placeholder="Cons.." name="msg" required></input><br/>
     <button class='btn'  onClick = {e =>sendMessage()} > Send  </button>
     </div>
    </div>
    <section className ='review-bottom-image'>

    </section>
   </div>

//           </div>
)
}
export default AddReview;