import React,{useEffect,useState} from 'react'
import SearchTopPositions from './SearchTopFivePositions';
import Navbar from './NavBar';

const SearchPoss =()=>{
   
    const[positions,setPositions] = useState([])
    const[inputPosition,setInputPosition] = useState("")
    const [error,setError] = useState(false)
    const [token, setToken] = useState(sessionStorage.getItem('token'))


    useEffect(() => {getPositions()},[])
    
    const getPositions = async() =>{
      
        try{
          setError(false)
            const response = await fetch(`http://127.0.0.1:5000/api/top_five_city/${token}`);
            const res = await response.json();
                if(res.positions) {
                
                setPositions(res.positions)
                }  
                else{
                    setError(true)
                }
          } catch(error) {
            console.log(error)
            setError(true)
          }
          }
        
          const topFivePositions = positions.map((i)=> {
            return <SearchTopPositions data= {i} />
          })

          const searchData = async() =>{ 
        // try{
         
        //     const response = await fetch(`http://127.0.0.1:5000/api/company/${inputCompany}/${token}`);
        //     const res = await response.json();
        //         if(res.output.length>0) {
        //         setData(res.output)
        //         setAverageData(res.avg)
        //         setMax(res.max)
        //         setError(false)
        //         searchHappy()
        //         getDepartment()
        //         }  
        //         else{
        //             setError(true)
        //         }
        //   } catch(error) {
        //     console.log(error)
        //     setError(true)
        //   }
        
          }
          

   return(
    
   <div>
 <Navbar/>
<h2> Please search for a company here</h2>
    <div>{error &&<h4> Company does not exist, please try again!</h4>}</div>

    <input type = 'text' id = 'search' placeholder = ' Search' onChange={e => setInputPosition(e.target.value)}/> <br/>
      <button onClick = {e=>searchData()}  > Search</button> <br/>
       
       <div className ='fivecitywrapper'>
            <h3>Top 5 Highest paid Poistions</h3>
            {topFivePositions}
            </div>
   
   </div>


)
}
export default SearchPoss;