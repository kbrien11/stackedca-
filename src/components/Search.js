import React,{useState} from 'react'
import Navbar from './NavBar'
import SearchInfo from './SearchTitle'
import SearchSalary from './SearchSalary'
import SearchCity from './SearchCity'
import SearchMaxSal from './SearchMaxSal'
import HappyText from './SearchHappyText'
import SearchDepartment from './SearchDepartment'
import SearchLevel from './SearchLevel'
//  import Plot from 'react-plotly.js';



const Search =() => {

    const[inputCompany,setInputCompany] = useState("")
    const[data,setData] = useState([])
    const[happyText,setHappyText] = useState([])
    const[max,setMax] = useState([])
    const[department,setDepartment] = useState([])
    const[level,setLevel] = useState([])
    const[avData,setAverageData] = useState("")
    const [error,setError] = useState(false)
    const [token, setToken] = useState(sessionStorage.getItem('token'))

    const searchData = async() =>{
      
        try{
         
            const response = await fetch(`http://127.0.0.1:5000/api/company/${inputCompany}/${token}`);
            const res = await response.json();
                if(res.output.length>0) {
                setData(res.output)
                setAverageData(res.avg)
                setMax(res.max)
                setError(false)
                happy()
                getDepartment()
                }  
                else{
                    setError(true)
                }
          } catch(error) {
            console.log(error)
            setError(true)
          }
          }

          const happy = async() =>{
      
            try{
             
                const response = await fetch(`http://127.0.0.1:5000/api/happy/${inputCompany}/${token}`);
                const res = await response.json();
                    setHappyText(res.happy)
                     console.log(res.happy)
                    
                    
              } catch(error) {
                console.log(error)
              
              }
              }


              const getDepartment = async() =>{
      
                try{
                 
                    const response = await fetch(`http://127.0.0.1:5000/api/get_dep_level/${inputCompany}/${token}`);
                    const res = await response.json();
                        setDepartment(res.output)
                        setLevel(res.output)
                         console.log(res.happy)
                        
                        
                  } catch(error) {
                    console.log(error)
                  
                  }
                  }
        
    
          const output = data.map((i) => {
            return <SearchInfo data = {i} />
          })
        
          const salary = data.map((i) => {
              return <SearchSalary data={i} />
          })

          const city = data.map((i) => {
            return <SearchCity data={i} />
        })
        
        const maxSal = max.map((i) => {
            return <SearchMaxSal data={i} />
        })
        const happyData = happyText.map((i) => {
            return <HappyText datas= {i} />
          })

          const getDep = department.map((i) => {
                  return <SearchDepartment data={i}/>
          })

          const getLevel = level.map((i) => {
            return <SearchLevel data={i}/>
    })
       
       
        console.log(happyData)

    return(
        <div className ='searchcompany'>
      <Navbar/>
    <h2> Please search for a company here</h2>
    <div>{error &&<h4> Company does not exist, please try again!</h4>}</div>

    <input type = 'text' id = 'search' placeholder = ' Search' onChange={e => setInputCompany(e.target.value)}/> <br/>
      <button onClick = {e=>searchData()}  > Search</button> <br/>
      {output.length >0 &&<div className = 'searchcomp'>
      {output.length >0 && <h3>{inputCompany}</h3>} 
      {output.length >0 &&<p> Positions posted {output.length}</p>}
     {output.length >0 &&<p> Avg Salary: {'$'+avData+'.00'}</p>}
       {output.length >0 &&<h5> {happyData}</h5>} 
      {output.length >0 &&<h4> {maxSal}</h4>}
      </div>}
      {/* <div>
        

         {output.length>0 &&<Plot
         data={[
           {
           x:output,
             y: salary,
             type: 'scatter',
             mode: 'lines+markers',
             marker: {color: 'lightGreen',backgroundColor:'blue'},
           },
           
         ]}
         layout={ {width: 720,height: 440}}
       /> }  
         </div>  */}
       <div className ='row'>
      <div className = 'column'>
      {output.length>0 && <h3>Title</h3>} 
      {output.length > 0 && <hr></hr>}
      {output}
      </div>
      <div className ='column'>
      {salary.length >0  &&<h3>Salary</h3>}
      {salary.length >0 && <hr></hr>}
        {salary}
      </div>
      <div className ='column'>
       {getDep.length >0 && <h3>Department</h3>}
       {getDep.length >0 && <hr></hr>}
        {getDep}
      </div>
      <div className ='column'>
       {getLevel.length >0 && <h3>Level</h3>}
       {getLevel.length >0 && <hr></hr>}
        {getLevel}
      </div>
      <div className ='column'>
       {city.length >0 && <h3>Location</h3>}
       {city.length >0 && <hr></hr>}
        {city}
      </div>
      </div>
        </div>
    )
}
export default Search;