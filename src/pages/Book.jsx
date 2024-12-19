// import React, { useState } from 'react'
// import { useLocation } from 'react-router-dom'
// import axios from 'axios';
// import styled from 'styled-components'
// import emailjs from '@emailjs/browser'



// let TURFS_URL="https://jusplayserver-2.onrender.com/availableTurfs";
// let API_URL="https://jusplayserver-2.onrender.com/users"

// function Book() {
//     const location=useLocation();
//     const {state}=location;
//     const turf=state.turf.turf
//     const user=state.user.User
//     console.log(turf.bookings)
//     console.log(user)


//     const [filters,setFilters]=useState({
//       id:turf.bookings.length+1,
//       turfid:turf.id,
//       name:turf.name,
//       price:turf.price,
//       location:turf.location,
//       type:turf.type,
//       shift:"Morning",
//       date:"",
//       user:user.email,
      

//     })
    

//     const handleSubmit=async (event)=>{
//       event.preventDefault()
//       let response=await axios.get(TURFS_URL)
//       let data=response.data

//       let selected=data.find((turfs)=>turfs.id===turf.id)
//       let bookings=selected.bookings
      
//       let status=bookings.some((book)=>book.type===turf.type && book.shift===filters.shift && book.date===filters.date)
      
//       if(status){
//         alert("slot already booked")
//         return
//       }
//       else{
//           // console.log(filters)
//           alert(`slot booked at ${filters.name} for playing ${filters.type} at ${filters.shift}`)
//           console.log(selected.bookings)
//           selected.bookings.push(filters)
//           console.log(selected.bookings)
//       }
      
//       await axios.put(`${TURFS_URL}/${turf.id}`,selected)

//       let userresponse=await axios.get(API_URL)
//       let users=userresponse.data
//       let selecteduser=users.find((user)=>user.email===filters.user)
      
//       selecteduser.bookings.push(filters)
//       await axios.put(`${API_URL}/${selecteduser.id}`,selecteduser)

//       sendConfirmationEmail();

//     }

//     const sendConfirmationEmail = () => {
//       const templateParams = {
//           user_name: user.name, // Dynamically set logged-in user's name
//           user_email: user.email, // Dynamically set logged-in user's email
//           turf_name: filters.name,
//           turf_type: filters.type,
//           shift: filters.shift,
//           date: filters.date,
//           price: filters.price,
//       };

//       emailjs
//           .send(
//               "service_2u331ik", // Replace with your EmailJS Service ID
//               "template_qmq14xi", // Replace with your EmailJS Template ID
//               templateParams,
//               "cCYei8t9dyHlqeW01" // Replace with your EmailJS User ID
//           )
//           .then(
//               (response) => {
//                   console.log("Email sent successfully!", response.status, response.text);
//                   alert("Booking confirmation sent to your email.");
//               },
//               (err) => {
//                   console.log("Failed to send email:", err);
//                   alert("Failed to send confirmation email. Please try again.");
//               }
//           );
//     };
    

//     const FormContainer = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 16px; /* Spacing between elements */
//   max-width: 400px;
//   margin: 0 auto; /* Center form */
//   padding: 16px;
//   background-color: #f9f9f9;
//   border: 1px solid #ccc;
//   border-radius: 8px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
// `;

// const InputField = styled.input`
//   padding: 8px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   font-size: 14px;
//   &:read-only {
//     background-color: #e9e9e9;
//   }
// `;

// const SelectField = styled.select`
//   padding: 8px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   font-size: 14px;
// `;

// const SubmitButton = styled.button`
//   padding: 10px 15px;
//   background-color: #007bff;
//   color: white;
//   border: none;
//   border-radius: 4px;
//   font-size: 16px;
//   cursor: pointer;
//   &:hover {
//     background-color: #0056b3;
//   }
// `;
// const Div=styled.div`
// height:100vh;
// display:'flex';
// flex-direction:column;
// align-items:center;
// justify-content:center
// `
    
    
//   return (
//     <Div>
//       <h1 style={{textAlign:'center'}}>Booking Form</h1>
//     <FormContainer onSubmit={handleSubmit}>
//       <InputField type="text" value={turf.name} readOnly />
//       <InputField type="number" value={turf.price} readOnly />
//       <InputField type="text" value={turf.location} readOnly />
//       <InputField type="text" value={turf.type} readOnly />
//       <InputField
//         type="date"
//         value={filters.date}
//         onChange={(e) =>
//           setFilters((prevdata) => ({ ...prevdata, date: e.target.value }))
//         }
//         min={new Date().toISOString().split('T')[0]}
//         max={new Date(new Date().setDate(new Date().getDate() + 3))
//           .toISOString()
//           .split('T')[0]}
//       />
//       <SelectField
//         name="shift"
//         value={filters.shift}
//         onChange={(e) =>
//           setFilters((prevdata) => ({ ...prevdata, shift: e.target.value }))
//         }
//       >
//         <option value="Morning">Morning</option>
//         <option value="Afternoon">Afternoon</option>
//         <option value="Evening">Evening</option>
//       </SelectField>
//       <span></span>
//       <SubmitButton type="submit">Submit</SubmitButton>
//     </FormContainer>
//     </Div>
//   )
// }

// export default Book


// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';
// import styled from 'styled-components';
// import emailjs from '@emailjs/browser';

// let TURFS_URL = "https://jusplayserver-2.onrender.com/availableTurfs";
// let API_URL = "https://jusplayserver-2.onrender.com/users";

// function Book() {
//     const location = useLocation();
//     const { state } = location;
//     const turf = state.turf.turf;
//     const user = state.user.User;

//     const [filters, setFilters] = useState({
//         id: turf.bookings.length + 1,
//         turfid: turf.id,
//         name: turf.name,
//         price: turf.price,
//         location: turf.location,
//         type: turf.type,
//         shift: "Morning",
//         date: "",
//         user: user.email, // Dynamic user email
//     });

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         // Fetch turf and booking data
//         let response = await axios.get(TURFS_URL);
//         let data = response.data;
//         let selected = data.find((turfs) => turfs.id === turf.id);
//         let bookings = selected.bookings;

//         // Check for booking conflicts
//         let status = bookings.some(
//             (book) =>
//                 book.type === turf.type &&
//                 book.shift === filters.shift &&
//                 book.date === filters.date
//         );

//         if (status) {
//             alert("Slot already booked");
//             return;
//         } else {
//             alert(
//                 `Slot booked at ${filters.name} for playing ${filters.type} at ${filters.shift}`
//             );
//             selected.bookings.push(filters);
//         }

//         // Update turf and user bookings in the backend
//         await axios.put(`${TURFS_URL}/${turf.id}`, selected);
//         let userResponse = await axios.get(API_URL);
//         let users = userResponse.data;
//         let selectedUser = users.find((u) => u.email === filters.user);

//         selectedUser.bookings.push(filters);
//         await axios.put(`${API_URL}/${selectedUser.id}`, selectedUser);

//         // Send booking confirmation email
//         sendConfirmationEmail();
//     };

//     const sendConfirmationEmail = () => {
//         const templateParams = {
//             user_name: user.name, // Dynamically set logged-in user's name
//             user_email: user.email, // Dynamically set logged-in user's email
//             turf_name: filters.name,
//             turf_type: filters.type,
//             shift: filters.shift,
//             date: filters.date,
//             price: filters.price,
//         };

//         emailjs
//             .send(
//                 "service_2u331ik", // Replace with your EmailJS Service ID
//                 "template_qmq14xi", // Replace with your EmailJS Template ID
//                 templateParams,
//                 "cCYei8t9dyHlqeW01" // Replace with your EmailJS User ID
//             )
//             .then(
//                 (response) => {
//                     console.log("Email sent successfully!", response.status, response.text);
//                     alert("Booking confirmation sent to your email.");
//                 },
//                 (err) => {
//                     console.log("Failed to send email:", err);
//                     alert("Failed to send confirmation email. Please try again.");
//                 }
//             );
//     };

//     // Styled components
//     const FormContainer = styled.form`
//         display: flex;
//         flex-direction: column;
//         gap: 16px;
//         max-width: 400px;
//         margin: 0 auto;
//         padding: 16px;
//         background-color: #f9f9f9;
//         border: 1px solid #ccc;
//         border-radius: 8px;
//         box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//     `;

//     const InputField = styled.input`
//         padding: 8px;
//         border: 1px solid #ccc;
//         border-radius: 4px;
//         font-size: 14px;
//         &:read-only {
//             background-color: #e9e9e9;
//         }
//     `;

//     const SelectField = styled.select`
//         padding: 8px;
//         border: 1px solid #ccc;
//         border-radius: 4px;
//         font-size: 14px;
//     `;

//     const SubmitButton = styled.button`
//         padding: 10px 15px;
//         background-color: #007bff;
//         color: white;
//         border: none;
//         border-radius: 4px;
//         font-size: 16px;
//         cursor: pointer;
//         &:hover {
//             background-color: #0056b3;
//         }
//     `;

//     const Div = styled.div`
//         height: 100vh;
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         justify-content: center;
//     `;

//     return (
//         <Div>
//             <h1 style={{ textAlign: 'center' }}>Booking Form</h1>
//             <FormContainer onSubmit={handleSubmit}>
//                 <InputField type="text" value={turf.name} readOnly />
//                 <InputField type="number" value={turf.price} readOnly />
//                 <InputField type="text" value={turf.location} readOnly />
//                 <InputField type="text" value={turf.type} readOnly />
//                 <InputField
//                     type="date"
//                     value={filters.date}
//                     onChange={(e) =>
//                         setFilters((prevdata) => ({ ...prevdata, date: e.target.value }))
//                     }
//                     min={new Date().toISOString().split('T')[0]}
//                     max={new Date(new Date().setDate(new Date().getDate() + 3))
//                         .toISOString()
//                         .split('T')[0]}
//                 />
//                 <SelectField
//                     name="shift"
//                     value={filters.shift}
//                     onChange={(e) =>
//                         setFilters((prevdata) => ({ ...prevdata, shift: e.target.value }))
//                     }
//                 >
//                     <option value="Morning">Morning</option>
//                     <option value="Afternoon">Afternoon</option>
//                     <option value="Evening">Evening</option>
//                 </SelectField>
//                 <SubmitButton type="submit">Submit</SubmitButton>
//             </FormContainer>
//         </Div>
//     );
// }

// export default Book;

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';

let TURFS_URL = "https://jusplayserver-2.onrender.com/availableTurfs";
let API_URL = "https://jusplayserver-2.onrender.com/users";

function Book() {
    const location = useLocation();
    const { state } = location;
    const turf = state.turf.turf;
    const user = state.user.User;

    const [filters, setFilters] = useState({
        id: turf.bookings.length + 1,
        turfid: turf.id,
        name: turf.name,
        price: turf.price,
        location: turf.location,
        type: turf.type,
        shift: "Morning",
        date: "",
        user: user.email, // Dynamic user email
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        let response = await axios.get(TURFS_URL);
        let data = response.data;
        let selected = data.find((turfs) => turfs.id === turf.id);
        let bookings = selected.bookings;

        let status = bookings.some(
            (book) =>
                book.type === turf.type &&
                book.shift === filters.shift &&
                book.date === filters.date
        );

        if (status) {
            alert("Slot already booked");
            return;
        } else {
            alert(
                `Slot booked at ${filters.name} for playing ${filters.type} at ${filters.shift}`
            );
            selected.bookings.push(filters);
        }

        await axios.put(`${TURFS_URL}/${turf.id}`, selected);
        let userResponse = await axios.get(API_URL);
        let users = userResponse.data;
        let selectedUser = users.find((u) => u.email === filters.user);

        selectedUser.bookings.push(filters);
        await axios.put(`${API_URL}/${selectedUser.id}`, selectedUser);

        sendConfirmationEmail();
    };

    const sendConfirmationEmail = () => {
        const templateParams = {
            user_name: user.name,
            user_email: user.email,
            turf_name: filters.name,
            turf_type: filters.type,
            shift: filters.shift,
            date: filters.date,
            price: filters.price,
        };

        emailjs
            .send(
                "service_2u331ik",
                "template_qmq14xi",
                templateParams,
                "cCYei8t9dyHlqeW01"
            )
            .then(
                (response) => {
                    console.log("Email sent successfully!", response.status, response.text);
                    alert("Booking confirmation sent to your email.");
                },
                (err) => {
                    console.log("Failed to send email:", err);
                    alert("Failed to send confirmation email. Please try again.");
                }
            );
    };

    // Styled Components
    const PageContainer = styled.div`
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: url('https://images.squarespace-cdn.com/content/v1/65899401195ba416670c0913/cc555d6e-7ffa-4817-abea-c0cbacfbb9f5/DALL%C2%B7E+2024-05-14+12.43.52+-+A+vibrant+banner+showcasing+a+dynamic+clash+between+cricket+and+badminton.+On+the+left+side%2C+draw+a+cricket+player+in+action%2C+mid-swing+with+a+bat%2C+we.jpeg?format=1500w') 
            no-repeat center center/cover;
        color: #ffffff;
        font-family: 'Arial', sans-serif;
        text-align: center;
        padding: 20px;
        box-sizing: border-box;
    `;

    const Title = styled.h1`
        font-size: 2.5rem;
        margin-bottom: 20px;
        color: black;
        text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);
    `;

    const FormContainer = styled.form`
        display: flex;
        flex-direction: column;
        gap: 20px;
        max-width: 500px;
        width: 100%;
        margin: 0 auto;
        padding: 20px;
        background-color: white;
        border: 2px solid #007bff;
        border-radius: 12px;
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    `;

    const InputField = styled.input`
        padding: 12px;
        border: 1px solid #ddd;
        border-radius: 6px;
        font-size: 16px;
        color: #333;
        width: 100%;
        box-sizing: border-box;
        &:focus {
            outline: none;
            border-color: #007bff;
            box-shadow: 0 0 8px rgba(0, 123, 255, 0.2);
        }
        &:read-only {
            background-color: #f9f9f9;
        }
    `;

    const SelectField = styled.select`
        padding: 12px;
        border: 1px solid #ddd;
        border-radius: 6px;
        font-size: 16px;
        color: #333;
        width: 100%;
        background-color: #fff;
        &:focus {
            outline: none;
            border-color: #007bff;
            box-shadow: 0 0 8px rgba(0, 123, 255, 0.2);
        }
    `;

    const SubmitButton = styled.button`
        padding: 12px 20px;
        background-color: #007bff;
        color: white;
        font-weight: bold;
        border: none;
        border-radius: 6px;
        font-size: 18px;
        cursor: pointer;
        transition: all 0.3s ease;
        &:hover {
            background-color: #0056b3;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
        }
        &:focus {
            outline: none;
            box-shadow: 0 0 10px rgba(0, 123, 255, 0.4);
        }
    `;

    const Footer = styled.footer`
        margin-top: 20px;
        font-size: 14px;
        color: #dddddd;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
    `;

    return (
        <PageContainer>
            <Title>Booking Form</Title>
            <FormContainer onSubmit={handleSubmit}>
                <InputField type="text" value={turf.name} readOnly />
                <InputField type="number" value={turf.price} readOnly />
                <InputField type="text" value={turf.location} readOnly />
                <InputField type="text" value={turf.type} readOnly />
                <InputField
                    type="date"
                    value={filters.date}
                    onChange={(e) =>
                        setFilters((prevdata) => ({ ...prevdata, date: e.target.value }))
                    }
                    min={new Date().toISOString().split('T')[0]}
                    max={new Date(new Date().setDate(new Date().getDate() + 3))
                        .toISOString()
                        .split('T')[0]}
                />
                <SelectField
                    name="shift"
                    value={filters.shift}
                    onChange={(e) =>
                        setFilters((prevdata) => ({ ...prevdata, shift: e.target.value }))
                    }
                >
                    <option value="Morning">Morning</option>
                    <option value="Afternoon">Afternoon</option>
                    <option value="Evening">Evening</option>
                </SelectField>
                <SubmitButton type="submit">Submit</SubmitButton>
            </FormContainer>
            {/* <Footer>&copy; 2024 JusPlay. All rights reserved.</Footer> */}
        </PageContainer>
    );
}

export default Book;
