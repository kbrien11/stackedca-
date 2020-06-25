import React,{useState,useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import RegisterName from './RegisterName'
const Question =()=>{


    const[department,setDepartment] = useState([])
    const[level,setLevel] = useState([])
    const[years,setYears] = useState([])
    const[happy,setHappy] = useState([])
    const[name,setName] = useState([])
    const [token, setToken] = useState(sessionStorage.getItem('token'))

   
    useEffect(() => {UserName()},[])
    
  const history =useHistory()


  const sendData = async() => {

    const endpoint = `http://localhost:5000/api/question/${token}`;
    const data = {
     department:department,
     level:level,
     years:years,
     happy:happy,
    };
    const configs = {
      method: "POST",
       mode: "cors",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    }
    const response = await fetch(endpoint, configs);
    const res = await response.json();
        history.push ('/login')
}

const UserName = async() =>{
      
    try{
      
        const response = await fetch(`http://127.0.0.1:5000/api/first_name/${token}`);
        const res = await response.json();
            setName(res.results)
            console.log(res.results)
      } catch(error) {
        console.log(error)
      }
      }
const outputName = name.map((i)=> {
    return <RegisterName data= {i} />
  })

console.log(department)
   return(
       <div>
           <div className ='registername'>
           < h5>{outputName}</h5>
           </div>
    <div className = 'questionWrapper'>
        </div>
        
   <div className ='questions'>
   <h3> Before you finishing your registration, please complete the questionaire!</h3>

    
   <select class="select-css"
    onChange={e => setDepartment(e.target.value)}>
    <option> Select Department</option>
    <option> Finance/Accounting</option>
    <option> Sales/Marketing</option>
    <option> Coporate Development</option>
    <option> Technology</option>
    <option> Customer Support</option>
    <option> Human Resources</option>
    </select> <br/>
   
    <select class="select-css"
    onChange={e => setLevel(e.target.value)}>
        <option> Select Level</option>
    <option> Junior</option>
    <option> Senior</option>
    <option> Manager</option>
    <option> Senior Manager</option>
    <option> Director</option>
    <option> Vice President</option>
    <option> President</option>
    </select> <br/>
    
    
    <select class="select-css"
    onChange={e => setYears(e.target.value)}>
        <option> Select Years Worked</option>
    <option> 1</option>
    <option>2</option>
    <option> 3</option>
    <option> 4</option>
    <option> 5</option>
    <option> 6</option>
    <option> 7</option>
    <option> 8</option>
    <option>9</option>
    <option> 10</option>
    <option> 11</option>
    <option> 12</option>
    </select> <br/>
    
    
    <select class="select-css"
    onChange={e => setHappy(e.target.value)}>
        <option> Happiness</option>
    <option> 1</option>
    <option> 2</option>
    <option> 3</option>
    <option>4</option>
    <option>5</option>

    </select>
    

    <button onClick = {e=>sendData()}>  Complete</button> <br/>

   </div>
   </div>


)
}
export default Question;