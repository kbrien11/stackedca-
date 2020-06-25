import React,{useState} from 'react'
import Navbar from './NavBar'
import SearchInfo from './SearchTitle'
import SearchSalary from './SearchSalary'
import SearchCity from './SearchCity'
import SearchMaxSal from './SearchMaxSal'
import HappyText from './SearchHappyText'
import SearchDepartment from './SearchDepartment'
import SearchLevel from './SearchLevel'
import SearchData from './SearchData'
import CompanyReviews from './ComanyReviews'
import Search from './Search'
// import Plot from 'react-plotly.js';



const SearchTwo =() => {

    const[inputCompany,setInputCompany] = useState("")
    const[data,setData] = useState([])
    const[happy,setHappy] = useState([])
    const[max,setMax] = useState([])
    const[reviews,setReviews] = useState([])
    const[countReviews,setCountReviews] = useState([])
    const[positions,setPositions] = useState([])

    // const[department,setDepartment] = useState([])
    // const[level,setLevel] = useState([])
    const[avData,setAverageData] = useState("")
    const [error,setError] = useState(false)
    const [token, setToken] = useState(sessionStorage.getItem('token'))

    const searchData = async() =>{
      
        try{
         
            const response = await fetch(`https://stackedcash.netlify.app/api/company/${inputCompany}/${token}`);
            const res = await response.json();
                if(res.output.length>0) {
                setData(res.data)
                setAverageData(res.avg)
                setMax(res.max)
                setError(false)
                setCountReviews(res.review)
                searchHappy()
             
                // getDepartment()
                }  
                else{
                    setError(true)
                    setData([])                }
          } catch(error) {
            console.log(error)
            setError(true)
          }
          }

          const searchHappy = async() =>{
      
            try{
             
                const response = await fetch(`https://stackedcash.netlify.app/api/happy/${inputCompany}/${token}`);
                const res = await response.json();
                    setHappy(res.happy)
                     console.log(res.happy)
                    
                    
              } catch(error) {
                console.log(error)
              
              }
              }

              const getReviews = async() =>{
      
                try{
                 
                    const response = await fetch(`https://stackedcash.netlify.app/api/reviews_company/${inputCompany}/${token}`);
                    const res = await response.json();
                        setReviews(res.reviews)
                         console.log(res.happy)
                         setPositions([])
                        
                  } catch(error) {
                    console.log(error)
                  
                  }
                  }

                  const getPositions = async() =>{
      
                    try{
                     
                        const response = await fetch(`https://stackedcash.netlify.app/api/positions/${inputCompany}/${token}`);
                        const res = await response.json();
                            setPositions(res.positions)
                             setReviews([])
                             
                             
                            
                      } catch(error) {
                        console.log(error)
                      
                      }
                      }


            //   const getDepartment = async() =>{
      
            //     try{
                 
            //         const response = await fetch(`http://127.0.0.1:5000/api/get_dep_level/${inputCompany}/${token}`);
            //         const res = await response.json();
            //             setDepartment(res.output)
            //             setLevel(res.output)
            //              console.log(res.happy)
                        
                        
            //       } catch(error) {
            //         console.log(error)
                  
            //       }
            //       }
        
    
          const output = data.map((i) => {
            return <SearchData data = {i} />
          })
        
          const revs = reviews.map((i) => {
            return <CompanyReviews data = {i} />
          })

          const fivePositions = positions.map((i) => {
            return <SearchData data = {i} />
          })
        //   const salary = data.map((i) => {
        //       return <SearchSalary data={i} />
        //   })

        //   const city = data.map((i) => {
        //     return <SearchCity data={i} />
        // })
        
        const maxSal = max.map((i) => {
            return <SearchMaxSal data={i} />
        })
        const happyData = happy.map((i) => {
            return <HappyText datas= {i} />
          })

          const sal = avData.toLocaleString()

          console.log(maxSal)

    //       const getDep = department.map((i) => {
    //               return <SearchDepartment data={i}/>
    //       })

    //       const getLevel = level.map((i) => {
    //         return <SearchLevel data={i}/>
    // })
    const image = <img src={`//logo.clearbit.com/${inputCompany}.com `  } onError={(e)=>{e.target.onerror = null; e.target.src="http://logok.org/wp-content/uploads/2014/05/Total-logo-earth-880x660.png" }}width="100" color ='white' />
       
        console.log(error)

    return(
        <div className ='searchcompany'>
      <Navbar/>
    <h2> Please search for a company here</h2>
    <div>{error &&<h4> Company does not exist, please try again!</h4>}</div>
   
    <input type = 'text' id = 'search' placeholder = ' Search' onChange={e => setInputCompany(e.target.value)}/> <br/>
      <button onClick = {e=>searchData()}  > Search</button> <br/>
      
      <div className = 'searchfilterbuttons'>
       {output.length >0 && <h5>{countReviews}</h5>}
       {output.length > 0 && <button onClick = {e=>getReviews()}  > Reviews </button>}
        </div>
        <div className ='positionbutton'>
        {output.length>0 && <h5>{output.length}</h5>}
       {output.length > 0 && <button onClick = {e=>getPositions()}  > Positions </button>}
       </div>
      {output.length >0 &&<div className = 'searchcomp'>
         <h3>{image}</h3>
      {output.length >0 && <h3>{inputCompany}</h3>} 
     <div className='averagesalary'>
     {output.length >0 &&<h5> Avg Company Salary: {'$'+sal+'.00'}</h5> }
     </div>
    {/* {output.length >0 &&<p> {happyData}</p>} */}
    {output.length > 0 && <h5>{happyData}</h5>}
      {output.length >0 && maxSal }
      
      </div>}
    
          
        
          
        

        {/* {output.length>0 &&<Plot
         data={[
           {
           x:output,
             y: salary,
             type: 'scatter',
             mode: 'lines+markers',
             marker: {color: 'lightGreen',backgroundColor:'blue'},
           },
           
         ]}
         layout={ {width: 720,height: 440,title:slice}}
       /> }  */}
    
         {output.length >0 && <hr></hr>}

      
     {/* {output.length>0 &&<p> {output} <span>{inputCompany}</span></p>}
      
     
      {salary.length >0  &&<h3>Salary</h3>}
      {salary.length >0 && <hr></hr>}
        {salary}
    
       {getDep.length >0 && <h3>Department</h3>}
       {getDep.length >0 && <hr></hr>}
        {getDep}
      
      
       {getLevel.length >0 && <h3>Level</h3>}
       {getLevel.length >0 && <hr></hr>}
        {getLevel}
      
   
       {city.length >0 && <h3>Location</h3>}
       {city.length >0 && <hr></hr>}
        {city}
       */}
     
{/*    
      {revs.length >0 && <div className ='totalreviews'>  */}
      {revs.length >0 &&<h5>{revs}</h5>}
      {/* </div> } */}
       
       {/* {fivePositions.length >0 && <div className ='totalpositions'> */}
      {fivePositions.length >0 && <h5>{output}</h5>}
       {/* </div>} */}
        </div>
    )
}
export default SearchTwo;