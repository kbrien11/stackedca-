import React,{useEffect,useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import UserBooking from './BookingInfo'



const Booking =() => {
    const [startDate, setStartDate] = useState("")
    const [token, setToken] = useState(sessionStorage.getItem('token'))
    const [booking,setBooking] = useState([])
    const [totalBookings,setTotalBookings] = useState([])
    const [error,setError] = useState(false)
    const[pk,setPk] = useState("")
    const [bookingError,setBookingError] = useState(false)
    const[dateBooked,setDateBooked] =useState(false)

     useEffect(() => {getBooking()},[])


    const reservation = async() =>{
        const endpoint = `http://localhost:5000/api/booking/${token}`;
        const data = {
           date_stamp:startDate.toLocaleDateString(),
           time_stamp:startDate.toLocaleTimeString(),
           full_date:startDate,
           pk:pk,
        };
        const configs = {
          method: "POST",
          mode: "cors",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(data)
        }
        const response = await fetch(endpoint, configs);
        const res = await response.json();
        if(totalBookings.includes(startDate)){
            setBookingError(true)
        }
            else {
                console.log(dateBooked)
                setBookingError(true)
            }
      }


      const getBooking = async() =>{
      
        try{
         
            const response = await fetch(`http://127.0.0.1:5000/api/get_booking/${token}`);
            const res = await response.json();
                if(res.bookings) {
                    setBooking(res.bookings)
                    setTotalBookings(res.results)
                    setPk(res.pk)
                }
                else {
                    setError(true)
                }
             
          } catch(error) {
            console.log(error)
          
          }
          }

          const output = booking.map((i) => {
            return <UserBooking data = {i} />
          })
          
          const result = totalBookings.map((i) => {
              return i
          })
           

          console.log(result)
          


return (
<div>
<div id = 'calender' ><DatePicker
 
         selected={startDate}
         onChange={date => setStartDate(date)}
         showTimeSelect ={"vertical"}
         timeFormat="p"
         placeholderText="Choose your Time"
         timeIntervals={30}
         minDate ={new Date()}
         timeCaption="Time"
         locale="pt-us"
         filterDate={date =>date.getDay()!= 6 && date.getDay() != 0  }
         /> 
         </div>

  {/* <input type="datetime-local" onChange={e=> setStartDate(e.target.value)}/>
  <button>Submit</button> */}
<button id='reserve-btn' onClick ={e => reservation()}> Reserve</button>
<div className = 'booked'>
    {error && <h4> No bookings yet</h4>}
    {bookingError && <h5> Success, date booked!</h5>}
    {dateBooked && <h3> Date booked, try again!</h3>}
</div>
<div>
    {output}
</div>
</div>
)
}
export default Booking