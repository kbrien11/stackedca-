import React,{useState,useEffect} from 'react';
import { Link as RouterLink} from 'react-router-dom';

import { useHistory } from 'react-router-dom';


function Register() {
  const[inputEmail,setInputEmail] = useState('')
  const[inputPassword,setInputPassword] = useState('')
  const[inputFirst_name,setFirstName] = useState('')
  const[inputLast_name,setLastName] = useState('')
  const[inputCompany,setInputCompany] = useState('')
  const[inputPosition,setInputPosition] = useState('')
  const[inputSalary,setSalary] = useState('')
  const[inputCity,setCity] = useState('')
  const [token, setToken] = useState(false)


  

  const history =useHistory()


  const sendData = async() => {

    const endpoint = "kbrien11.pythonanywhere.com/api/create";
    const data = {
      email:inputEmail,
      password:inputPassword,
      first_name:inputFirst_name,
      last_name:inputLast_name,
      company:inputCompany,
      position:inputPosition,
      salary:inputSalary,
      city:inputCity,
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
    sessionStorage.setItem("token", res.token)
     setToken(res.token)
    if (res){
        history.push ('/question')
    }
    
}




  return (
      <div className = 'registerimage'>
      <div className = 'App-main_container'>
        </div>
          {/* <div className='row'>
        <div className="App-main">
              <img src="https://media1.s-nbcnews.com/i/newscms/2018_30/2505991/180723-open-ofice-space-dk-928_21c81d16103938952551ae5674fa8bb9.jpg" />
          </div> */}
    <div className="app-main_wrapper">
      <h3> Register</h3>
    <label for = 'first'> First Name</label> <br/>
    <input type = 'text' id = 'first' placeholder = ' Your name ..' onChange={e => setFirstName(e.target.value)}/><br/>
    
    <label for = 'last'> Last Name</label> <br/>
    <input type = 'text' id = 'last' placeholder = ' Your Last name ..' onChange={e => setLastName(e.target.value)}/> <br/>
   
    <label for = 'email'> Email</label> <br/>
    <input type = 'text' id = 'email' placeholder = ' Your Email ..' onChange={e => setInputEmail(e.target.value)}/> <br/>

    <label for = 'pass'> Password</label> <br/>
    <input type = 'password' id = 'pass' placeholder = ' Your Password ..' onChange={e => setInputPassword(e.target.value)}/> <br/>
    
    <label for = 'comp'> Company</label> <br/>
    <input type = 'text' id = 'pass' placeholder = ' Your Company ..' onChange={e => setInputCompany(e.target.value)}/> <br/>
    
    <label for = 'pos'> Position</label> <br/>
    <input type = 'text' id = 'pass' placeholder = ' Your Position ..' onChange={e => setInputPosition(e.target.value)}/> <br/>
    {/* <select
    onChange={setDepartment }>
    <option> Select Department</option>
    <option> Finance/Accpunting</option>
    <option> Sales/Marketing</option>
    <option> Coporate Development</option>
    <option> Technology</option>
    <option> Customer Support</option>
    <option> Human Resources</option>
    </select> */}
    {/* <label for = 'dep'> Department</label> <br/>
    <input type = 'text' id = 'pass' placeholder = ' Your Department ..' onChange={e => setSalary(e.target.value)}/> <br/>
     */}
    {/* <label for = 'level'> Level</label> <br/>
    <input type = 'text' id = 'pass' placeholder = ' Your Level ..' onChange={e => setSalary(e.target.value)}/> <br/>
    */}
    <label for = 'salary'> Salary</label> <br/>
    <input type = 'text' id = 'pass' placeholder = ' $0.00' onChange={e => setSalary(e.target.value)}/> <br/>
   
    <label for = 'city'> City</label> <br/>
    <input type = 'text' id = 'pass' placeholder = ' City ..' onChange={e => setCity(e.target.value)}/> <br/>
    
    <button onClick = {e=>sendData()}>  Register</button> <br/>

     Already Registered?
    
        < a link href = 'login' as = {RouterLink}> Log in Here</a>
    </div>
    </div>
     
  );
}

export default Register;


