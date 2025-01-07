// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { useLocation } from 'react-router-dom'
// import styled from 'styled-components';

// let API_URL="https://jusplayserver-2.onrender.com/users"
// let TURFS_URL="https://jusplayserver-2.onrender.com/availableTurfs"

// function UserBookings() {

//   const [rating, setRating] = useState(0);
//   const [feedback, setFeedback] = useState("");
//   const [submitted, setSubmitted] = useState(false);

//   const handleStarClick = (value) => {
//     setRating(value);
//   };

//   const handleFeedbackChange = (event) => {
//     setFeedback(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (rating > 0 && feedback) {
//       setSubmitted(true);
//     } else {
//       alert("Please provide a rating and feedback.");
//     }
//   };

//     const BookingDetails = styled.div`
//   background-color: #f9f9f9; /* Light background */
//   border: 1px solid #ccc; /* Subtle border */
//   border-radius: 8px; /* Rounded corners */
//   padding: 16px; /* Inner spacing */
//   width: 300px; /* Width of the box */
//   margin: 16px auto; /* Centering and spacing */
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow */
//   @media (max-width: 768px) {
    
//     height: auto;
//     width:30%;
//   }

//   /* Media Query for mobile devices */
//   @media (max-width: 480px) {
//     height: auto;
//     width:100%;
//     flex-direction: column;
//   }
  
//   @media (max-width: 375px) {
//     height: auto;
//     width:auto;
//     flex-direction: column;
//   }
// `;

// const DetailHeading = styled.h4`
//   color: #333; /* Text color */
//   font-size: 16px; /* Font size */
//   margin: 8px 0; /* Spacing between headings */
//   font-weight: normal; /* Normal font weight */
// `;

// const Div=styled.div`
// min-height:100vh;
//   background-image: url("https://images.squarespace-cdn.com/content/v1/65899401195ba416670c0913/cc555d6e-7ffa-4817-abea-c0cbacfbb9f5/DALL%C2%B7E+2024-05-14+12.43.52+-+A+vibrant+banner+showcasing+a+dynamic+clash+between+cricket+and+badminton.+On+the+left+side%2C+draw+a+cricket+player+in+action%2C+mid-swing+with+a+bat%2C+we.jpeg?format=1500w");
//   background-size: cover;
//   background-repeat: no-repeat;
//   padding:60px;
//   display:flex;
//   flex-direction:column;
//   align-items:center;
//   `

// const CancelBut=styled.button`
//   padding:5px;
//   margin:5px;
//   background-color:red;
//   border:none;
//   border-radius:5px;
//   color:white;
//   font-weight:Bold;

//   &:hover{
//     cursor:pointer;
//   }

// `
// const BackButton = styled.button`
//   background-color: #6c757d;
//   margin-top: 1rem;
//   width:150px;
//   height:50px;
//   border:none;
//   border-radius:15px;
//   font-weight:bold;
  
//   &:hover {
//     background-color: #5a6268;
//     cursor:pointer;
//   }
// `

// const [book,setBook]=useState("")
// const [bookings,setBookings]=useState(null)
// console.log(bookings)

// useEffect(() => {
    
//     console.log("hello")
//   }, [book]);

// useEffect(()=>{
  
//   fetchdata()
// },[]);

// const fetchdata=async()=>{
//   const fetchedresponse=await axios.get("http://localhost:5236/api/Bookings")
//   console.log(fetchedresponse)
//   let fetched=fetchedresponse.data
//   console.log(fetched)
//   const fetcheddata=fetched.filter((element)=>element.mail===localStorage.getItem("user"))
//   console.log(fetcheddata)
//   // let response=await axios.get("http://localhost:5236/api/Bookings")
//   // console.log(response.data)
  
//   setBookings(fetcheddata)
  
// }



    
//     const location=useLocation()
//     const {state}=location;
//     console.log(state)
    
    
    
    

//   const Cancel=async(booking)=>{
//     // console.log(booking)
//     // let response=await axios.get(API_URL)
//     // let data=response.data
//     // let selected=data.find((user)=>user.email===state.email)
    
//     // console.log(selected.bookings)
//     // selected.bookings=selected.bookings.filter((book)=>book.date!==booking.date || book.name!==booking.name || book.shift !== booking.shift || book.type!==booking.type)
//     // console.log(selected.bookings)
//     // console.log(selected)
//     // await axios.put(`${API_URL}/${selected.id}`,selected)
//     // let turfresponse=await axios.get(TURFS_URL)
//     // let turfdata=turfresponse.data
//     // let selectedturf=turfdata.find((data)=>data.id===booking.turfid)
//     // selectedturf.bookings=selectedturf.bookings.filter((book)=>book.date!==booking.date || book.name!==booking.name || book.shift !== booking.shift|| book.type!==booking.type)
//     // await axios.put(`${TURFS_URL}/${selectedturf.id}`,selectedturf)
    
//     // setBookings(selected.bookings)
//     // console.log(bookings)

//     await axios.delete(`http://localhost:5236/api/Bookings/DeleteBooking/${booking.id}`)
//     fetchdata()

//   }
//   const handleBack = () => {
//     window.location.href = "/dashboard";
//   };
    

//   return (
//     <>
//       <Div>
//         <h1 style={{textAlign:'center',color:'white'}}>MY BOOKINGS</h1>
//         {bookings ? (
//   bookings
//   .map((booking) =>booking.date<=new Date().toISOString().split('T')[0]?(
//     <BookingDetails key={booking.id}>
//       <DetailHeading>Booking Date: {booking.date}</DetailHeading>
//       <DetailHeading>Turf Name: {booking.name}</DetailHeading>
//       <DetailHeading>Turf Location: {booking.location}</DetailHeading>
//       <DetailHeading>Shift: {booking.shift}</DetailHeading>
      
//     </BookingDetails>
//   ): (
//   <BookingDetails key={booking.id}>
//     <DetailHeading>Booking Date: {booking.date}</DetailHeading>
//     <DetailHeading>Turf Name: {booking.name}</DetailHeading>
//     <DetailHeading>Turf Location: {booking.location}</DetailHeading>
//     <DetailHeading>Shift: {booking.shift}</DetailHeading>
//     <CancelBut onClick={()=>Cancel(booking)}>Cancel</CancelBut>
//   </BookingDetails>
//   ))
// ) : (
//    <p>No bookings</p>// Fallback when bookings is null/undefined
// )}
//         <BackButton type="button" onClick={handleBack}>
//           Back to Dashboard
//         </BackButton>
//       </Div>

//     </>
    
//   )
// }

// export default UserBookings



import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const BookingDetails = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  width: 300px;
  margin: 16px auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const DetailHeading = styled.h4`
  color: #333;
  font-size: 16px;
  margin: 8px 0;
`;

const Div = styled.div`
  min-height: 100vh;
  background-image: url("https://images.squarespace-cdn.com/content/v1/65899401195ba416670c0913/cc555d6e-7ffa-4817-abea-c0cbacfbb9f5/DALL%C2%B7E+2024-05-14+12.43.52+-+A+vibrant+banner+showcasing+a+dynamic+clash+between+cricket+and+badminton.+On+the+left+side%2C+draw+a+cricket+player+in+action%2C+mid-swing+with+a+bat%2C+we.jpeg?format=1500w");
  background-size: cover;
  background-repeat: no-repeat;
  padding: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CancelBut = styled.button`
  padding: 5px;
  margin: 5px;
  background-color: red;
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }
`;

const BackButton = styled.button`
  background-color: #6c757d;
  margin-top: 1rem;
  width: 150px;
  height: 50px;
  border: none;
  border-radius: 15px;
  font-weight: bold;

  &:hover {
    background-color: #5a6268;
    cursor: pointer;
  }
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px 0;
`;

const PaginationButton = styled.button`
  padding: 8px 16px;
  margin: 0 10px;
  border: none;
  border-radius: 4px;
  background-color: ${(props) => (props.disabled ? "#ddd" : "#007bff")};
  color: ${(props) => (props.disabled ? "#999" : "white")};
  font-weight: bold;

  &:hover {
    background-color: ${(props) => (props.disabled ? "#ddd" : "#0056b3")};
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  }
`;

const SearchForm = styled.form`
  margin: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  input {
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 200px;
  }

  button {
    padding: 8px 16px;
    background-color: #007bff;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;

    &:hover {
      background-color: #0056b3;
      cursor: pointer;
    }
  }
`;

function UserBookings() {
  const [bookings, setBookings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const bookingsPerPage = 3;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:5236/api/Bookings");
    const fetched = response.data.filter(
      (element) => element.mail === localStorage.getItem("user")
    );
    setBookings(fetched);
  };

  const cancelBooking = async (booking) => {
    await axios.delete(`http://localhost:5236/api/Bookings/DeleteBooking/${booking.id}`);
    fetchData();
  };

  const handlePageChange = (direction) => {
    setCurrentPage((prev) =>
      direction === "next" ? prev + 1 : prev - 1
    );
  };

  // const handleSearch = (event) => {
  //   event.preventDefault();
  //   setCurrentPage(1);
  // };

  const filteredBookings = bookings.filter((booking) =>
    booking.date.includes(searchTerm)
  );

  const startIndex = (currentPage - 1) * bookingsPerPage;
  const selectedBookings = filteredBookings.slice(
    startIndex,
    startIndex + bookingsPerPage
  );
  const totalPages = Math.ceil(filteredBookings.length / bookingsPerPage);

  const handleBack = () => {
    window.location.href = "/dashboard";
  };

  return (
    <Div>
      <h1 style={{ textAlign: "center", color: "white" }}>MY BOOKINGS</h1>

      <SearchForm>
        <label style={{fontSize:"25px",color:"white",fontWeight:"bold"}}>Search by Date</label>
        <input
          type="date"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
      </SearchForm>

      {selectedBookings.length > 0 ? (
        selectedBookings.map((booking) => (booking.date<=new Date().toISOString().split('T')[0]?
        <BookingDetails key={booking.id}>
            <DetailHeading>Booking Date: {booking.date}</DetailHeading>
            <DetailHeading>Turf Name: {booking.name}</DetailHeading>
            <DetailHeading>Turf Location: {booking.location}</DetailHeading>
            <DetailHeading>Shift: {booking.shift}</DetailHeading>
            {/* <CancelBut onClick={() => cancelBooking(booking)}>Cancel</CancelBut> */}
          </BookingDetails>:
          <BookingDetails key={booking.id}>
            <DetailHeading>Booking Date: {booking.date}</DetailHeading>
            <DetailHeading>Turf Name: {booking.name}</DetailHeading>
            <DetailHeading>Turf Location: {booking.location}</DetailHeading>
            <DetailHeading>Shift: {booking.shift}</DetailHeading>
            <CancelBut onClick={() => cancelBooking(booking)}>Cancel</CancelBut>
          </BookingDetails>
        ))
      ) : (
        <p>No bookings available.</p>
      )}

      <PaginationContainer>
        <PaginationButton
          onClick={() => handlePageChange("prev")}
          disabled={currentPage === 1}
        >
          Previous
        </PaginationButton>
        <PaginationButton
          onClick={() => handlePageChange("next")}
          disabled={currentPage === totalPages}
        >
          Next
        </PaginationButton>
      </PaginationContainer>

      <BackButton type="button" onClick={handleBack}>
        Back to Dashboard
      </BackButton>
    </Div>
  );
}

export default UserBookings;


