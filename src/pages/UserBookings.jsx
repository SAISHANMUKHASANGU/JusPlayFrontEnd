import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components';

let API_URL="https://jusplayserver-2.onrender.com/users"
let TURFS_URL="https://jusplayserver-2.onrender.com/availableTurfs"

function UserBookings() {

  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleStarClick = (value) => {
    setRating(value);
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (rating > 0 && feedback) {
      setSubmitted(true);
    } else {
      alert("Please provide a rating and feedback.");
    }
  };

    const BookingDetails = styled.div`
  background-color: #f9f9f9; /* Light background */
  border: 1px solid #ccc; /* Subtle border */
  border-radius: 8px; /* Rounded corners */
  padding: 16px; /* Inner spacing */
  width: 300px; /* Width of the box */
  margin: 16px auto; /* Centering and spacing */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow */
`;

const DetailHeading = styled.h4`
  color: #333; /* Text color */
  font-size: 16px; /* Font size */
  margin: 8px 0; /* Spacing between headings */
  font-weight: normal; /* Normal font weight */
`;

const Div=styled.div`
min-height:100vh;
  background-image: url("https://images.squarespace-cdn.com/content/v1/65899401195ba416670c0913/cc555d6e-7ffa-4817-abea-c0cbacfbb9f5/DALL%C2%B7E+2024-05-14+12.43.52+-+A+vibrant+banner+showcasing+a+dynamic+clash+between+cricket+and+badminton.+On+the+left+side%2C+draw+a+cricket+player+in+action%2C+mid-swing+with+a+bat%2C+we.jpeg?format=1500w");
  background-size: cover;
  background-repeat: no-repeat;`

const [book,setBook]=useState("")

useEffect(() => {
    
    console.log("hello")
  }, [book]);

    const location=useLocation()
    const {state}=location;
    console.log(state)
    
    
    const [bookings,setBookings]=useState(state.bookings)
    console.log(bookings)

  const Cancel=async(booking)=>{
    console.log(booking)
    let response=await axios.get(API_URL)
    let data=response.data
    let selected=data.find((user)=>user.email===state.email)
    
    console.log(selected.bookings)
    selected.bookings=selected.bookings.filter((book)=>book.date!==booking.date || book.name!==booking.name || book.shift !== booking.shift || book.type!==booking.type)
    console.log(selected.bookings)
    console.log(selected)
    await axios.put(`${API_URL}/${selected.id}`,selected)
    let turfresponse=await axios.get(TURFS_URL)
    let turfdata=turfresponse.data
    let selectedturf=turfdata.find((data)=>data.id===booking.turfid)
    selectedturf.bookings=selectedturf.bookings.filter((book)=>book.date!==booking.date || book.name!==booking.name || book.shift !== booking.shift|| book.type!==booking.type)
    await axios.put(`${TURFS_URL}/${selectedturf.id}`,selectedturf)
    
    setBookings(selected.bookings)
    console.log(bookings)

  }
    

  return (
    <>
      <Div>
        <h1 style={{textAlign:'center',color:'white'}}>MY BOOKINGS</h1>
        {bookings.length>0?
        (bookings.map((booking)=>(<BookingDetails>
            <DetailHeading>Turf Name: {booking.name}</DetailHeading>
            <DetailHeading>Booking Date: {booking.date}</DetailHeading>
            <DetailHeading>Turf Location: {booking.location}</DetailHeading>
            <DetailHeading>Shift: {booking.shift}</DetailHeading>
            <button onClick={()=>Cancel(booking)}>Cancel</button>
            {/* <form onSubmit={handleSubmit}>
          <div className="rating">
            <h3>Rate Us:</h3>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`star ${star <= rating ? "selected" : ""}`}
                onClick={() => handleStarClick(star)}
              >
                ★
              </span>
            ))}
          </div>
          <div className="feedback">
            <textarea
              placeholder="Write your feedback here..."
              value={feedback}
              onChange={handleFeedbackChange}
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form> */}
          </BookingDetails>))):
        <BookingDetails><h3 style={{textAlign:'center'}}>No Bookings</h3></BookingDetails>}
      </Div>

    </>
    
  )
}

export default UserBookings