import React,{useEffect,useState} from 'react';
import HomeInfo from './HomeInfo';
import HomeName from './HomeName';
import Navbar from './NavBar';
import SearchMaxCity from './SearchMaxCity'
import SearchTopFive from './SearchTopFiveCities';
import SearchTopFiveCompanies from './SearchTopFiveCompanies';
import SearchTopPositions from './SearchTopFivePositions';
import HomeCity from './HomeCity';
import SearchHappyComp from './SearchHappyCompanies'
import SearchReviews from './SearchReviews';

const Home =() => {

    const[data,setData] = useState([])
    const[name,setName] = useState([])
    const[max,setMax] = useState([])
    // const[five,setFive] = useState([])
    const[companies,setCompanies] = useState([])
  
    const[city,setCity] = useState([])
    const[happyComp,setHappyComp] = useState([])
    const [isError,setIsError] = useState(false)
    const [token, setToken] = useState(sessionStorage.getItem('token'))

   
    useEffect(() => {UserInfo()},[])
    useEffect(() => {UserName()},[])
    useEffect(() => {searchData()},[])
    useEffect(() => {fiveCities()},[])
    // useEffect(() => {happyCompanies()},[])
    
  const UserInfo = async() =>{
      
    try{
      
        const response = await fetch(`https://stackedcash.netlify.app/api/personal/${token}`);
        const res = await response.json();
            setData(res.results)
            console.log(res.results)
      } catch(error) {
        console.log(error)
      }
      }

      const searchData = async() =>{
      
        try{
          setIsError(false)
            const response = await fetch(`https://stackedcash.netlify.app/api/city/${token}`);
            const res = await response.json();
                if(res.output) {
                setMax(res.output)
                }  
                else{
                    setIsError(true)
                }
          } catch(error) {
            console.log(error)
            setIsError(true)
          }
          }

          const fiveCities = async() =>{
      
            try{
              setIsError(false)
                const response = await fetch(`https://stackedcash.netlify.app/api/top_five_city/${token}`);
                const res = await response.json();
                    if(res.output) {
                    // setFive(res.output)
                    setCompanies(res.results)
                   
                   
                    }  
                    else{
                        setIsError(true)
                    }
              } catch(error) {
                console.log(error)
                setIsError(true)
              }
              }
    
  const UserName = async() =>{
      
    try{
      
        const response = await fetch(`https://stackedcash.netlify.app/api/first_name/${token}`);
        const res = await response.json();
            setName(res.results)
            setCity(res.city)
            console.log(res.results)
      } catch(error) {
        console.log(error)
      }
      }

    //   const happyCompanies = async() =>{
      
    //     try{
          
    //         const response = await fetch(`http://127.0.0.1:5000/api/top_five_happy_companies/${token}`);
    //         const res = await response.json();
    //             setHappyComp(res.output)
                
    //       } catch(error) {
    //         console.log(error)
    //       }
    //       }

    //   const output = data.map((i) => {
    //     return <HomeInfo data={i}/> 
    //   })

     const outputName = name.map((i)=> {
       return <HomeName data= {i} />
     })

     const maxCity = max.map((i)=> {
        return <SearchMaxCity data= {i} />
      })

    //   const topFive = five.map((i)=> {
    //     return <SearchTopFive data= {i} />
    //   })

      const topFiveComp = companies.map((i)=> {
        return <SearchTopFiveCompanies data= {i} />
      })
    
      
      const getCity = city.map((i)=> {
        return <HomeCity data= {i} />
      })

    //   const getHappyComp = happyComp.map((i)=> {
    //     return <SearchHappyComp data= {i} />
    //   })

     console.log(name)

    return(
        <div className = 'home'>
            <Navbar/>
           {outputName}
            {/* <div className ='fivecitywrapper'>
            <h3>Top 5 Highest paid Cities</h3>
            {topFive}
            </div> */}
            <div className ='fivecitywrapper'>
            <h3>Top 5 Highest paid Companies in</h3>
             {getCity}
            
            {getCity.length>0 && <hr></hr>}
            {topFiveComp}
            </div>
           
           

            
                
            
        </div>
    )
}

export default Home;