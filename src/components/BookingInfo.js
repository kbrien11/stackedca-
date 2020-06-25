import React ,{useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";




const UserBooking =(props) => {
    const[updateBooking, setUpdateBooking] = useState(false)
    const [bookingError,setBookingError] = useState(false)
    const [startDate, setStartDate] = useState(new Date(),[]);

    const [token, setToken] = useState(sessionStorage.getItem('token'))

    const update =()=>{
        setUpdateBooking(true)
    }
    
    const updateReservation = async() =>{
        const endpoint = `http://localhost:5000/api/update_booking/${token}/${datas}`;
        const data = {
           date_stamp:startDate.toLocaleDateString(),
           time_stamp:startDate.toLocaleTimeString(),
           full_date:startDate,
           pk:datas,
        };
        const configs = {
          method: "POST",
          mode: "cors",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(data)
        }
        const response = await fetch(endpoint, configs);
        const res = await response.json();
        console.log()
        setBookingError(true)
       
      }



    const cancel = async(props) =>{
        const endpoint = `http://localhost:5000/api/delete/booking/${token}`;
        const data = {
           pk:datas,
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
 
      const datas = props.data[3]

   console.log(datas)

  return(
 <div>
     {updateBooking && <DatePicker
 
 selected={startDate}
 onChange={date => setStartDate(date)}
 showTimeSelect ={"vertical"}
 timeFormat="p"
 timeIntervals={30}
 minDate ={new Date()}
 timeCaption="Time"
 locale="pt-us"
 filterDate={date =>date.getDay()!= 6 && date.getDay() != 0}
     /> }
      {updateBooking &&<button id='reserve-btn' onClick ={e => updateReservation()}> Reserve</button>}

 <h3> Here are your current Bookings {props.data[0]}</h3> <br/>

 <h3>{props.data[1]} <span>{props.data[2]}</span></h3> 
 <h5>{datas}</h5>
 <br/>
 <br/>
 <button id='cancel-btn' onClick ={e => cancel()}> Cancel</button>
 <button id='update-btn' onClick ={e => update()}> Update</button>

 <div className = 'booked'>
    
    {bookingError && <h5> Success, date updated!</h5>}
    </div>

<hr></hr>
 </div>
)
}
export default UserBooking;