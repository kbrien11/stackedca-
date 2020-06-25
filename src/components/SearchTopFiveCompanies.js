import React,{useState,useEffect} from 'react'
import SearchHappy from './SearchHappy'
import moment from 'moment';
import SearchReviews from './SearchReviews'
// import {FaRocketchat} from 'react-icons/fa'
// import {FaSearch} from 'react-icons/fa'
import { Link as RouterLink} from 'react-router-dom';

const SearchTopFiveCompanies =(props)=>{
    const[happy,setHappy] = useState([])
    const[text,setText] = useState(false)
    const[message,setMessage] = useState(false)
    const[pros,setPros] = useState(false)
    const[cons,setCons] = useState(false)
    const[output,setOutput] = useState(false)
    const [token, setToken] = useState(sessionStorage.getItem('token'))
    const[reviews,setReviews] = useState([])

    useEffect(() => {happyCompanies()},[])
    useEffect(() => {getImage()},[])

    const happyCompanies = async() =>{
      
        try{
          
            const response = await fetch(`http://127.0.0.1:5000/api/happy/${comp}/${token}`);
            const res = await response.json();
                setHappy(res.happy)
                setReviews(res.reviews)
                
          } catch(error) {
            console.log(error)
          }
          }

          // const review =() => {
          //     setText(true)
             
          // }

          // const sendMessage = async(props) =>{
          //   const endpoint = `http://localhost:5000/api/add_review/${token}`;
          //   const data = {
               
          //      review:message,
          //      time_stamp:now,
          //      pros:pros,
          //      cons:cons,
          //   };
          //   const configs = {
          //     method: "POST",
          //     mode: "cors",
          //     headers: {"Content-Type": "application/json"},
          //     body: JSON.stringify(data)
          //   }
          //   const response = await fetch(endpoint, configs);
          //   const res = await response.json();
          //   setText(false)
          //   console.log(res)
          //   console.log(JSON.stringify(props))
          // }

          // let now = moment().format("MM/DD/YYYY HH:mm:ss")
     
          const comp = props.data[1]
    const salary = props.data[0]
    const sal = salary.toLocaleString()
    
 
    const numberOfReviews = reviews.map((i)=> {
        return <SearchReviews data= {i} />
      })
      
   
    const happyData = happy.map((i) => {
        return <SearchHappy datas= {i} />
      })

     const getImage =()=>{
         if(<img src={`//logo.clearbit.com/${props.data[1]}.com `}/>){
            setOutput(true)
         }
         else  {
            setOutput(false)
         }

     } 


     const images = <img src={`//logo.clearbit.com/${props.data[1]}.com `  } onError={(e)=>{e.target.onerror = null; e.target.src="http://logok.org/wp-content/uploads/2014/05/Total-logo-earth-880x660.png" }}width="50" color ='white' />

    //  <img alt="Home renovation company logo Royalty Free Vector Image" class="n3VNCb" src="https://cdn1.vectorstock.com/i/1000x1000/27/75/home-renovation-company-logo-vector-23022775.jpg" data-noaft="1" jsname="HiaYvf" jsaction="load:XAeZkd;" style="width: 322.222px; height: 348px; margin: 0px;"></img>
     const otherImage = <img src ="http://logok.org/wp-content/uploads/2014/05/Total-logo-earth-880x660.png"></img>
     console.log(otherImage)
   
     const pos = props.data[2]
   
  const city = props.data[3]
  
  return(
    <div>
      
    <div className ='homeFiveCompanies'>
    
    
      
       <div className = 'homelogo'>
           {/* <object data ={image}>
           {otherImage}
           </object> */}
      
             {output? images:otherImage}
         
      {/* { image.length>0 ?<img src={`//logo.clearbit.com/${props.data[1]}.com `}  />:<img src="http://logok.org/wp-content/uploads/2014/05/Total-logo-earth-880x660.png"/> } */}
       </div>
     
   <h3> {props.data[1]}</h3> 
   <h3> AVG salary:  {'$'+sal+'.00'}</h3> 
    
   <h3>{happyData}</h3>

   < a link href = 'review' as = {RouterLink}> Leave Review</a>
   {/* <button onClick = {e =>review()} > Leave Review</button>  */}
   
   {/* <div className = 'messwrapper'>
       <div class = 'messcard'>  
       
       <div class="form-container"> 
 
  <label for="msg"><b>Review</b></label>
    <textarea  onChange={e => setMessage(e.target.value)} placeholder="Type review.." name="msg" required></textarea>
    <label for="msg"><b>Pros</b></label>
    <textarea  onChange={e => setPros(e.target.value)} placeholder="Type review.." name="msg" required></textarea>

    <label for="msg"><b>Cons</b></label>
    <textarea  onChange={e => setCons(e.target.value)} placeholder="Type review.." name="msg" required></textarea>
     <button class='btn'  onClick = {e =>sendMessage()} > Send <FaRocketchat class = 'faChat'/>  </button>
     </div>
   </div>
   </div> */}
 
   </div>
   
</div>

)
}
export default SearchTopFiveCompanies;


{/* <img width="640" height="480" src="http://logok.org/wp-content/uploads/2014/05/Total-logo-earth-880x660.png" class="attachment-thumb_880 size-thumb_880 wp-post-image" alt="" srcset="http://logok.org/wp-content/uploads/2014/05/Total-logo-earth-880x660.png 880w, http://logok.org/wp-content/uploads/2014/05/Total-logo-earth-300x224.png 300w, http://logok.org/wp-content/uploads/2014/05/Total-logo-earth-1024x768.png 1024w, http://logok.org/wp-content/uploads/2014/05/Total-logo-earth-200x150.png 200w" sizes="(max-width: 640px) 100vw, 640px"></img> */}