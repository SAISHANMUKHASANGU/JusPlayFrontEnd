import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';



function Book() {
    const location = useLocation();
    const { state } = location;
    const turf = state.turf.turf;
    const user = state.user.User;
    console.log(state)

    const handleBack = () => {
        window.location.href = "/dashboard";
      };

    const [filters, setFilters] = useState({
        
        turfid: turf.id,
        name: turf.name,
        price: turf.price,
        location: turf.location,
        type: turf.type,
        shift: "Morning",
        date: "",
        mail: user.email, // Dynamic user email
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        // let response = await axios.get("http://localhost:5236/api/Turfs");
        // let data = response.data;
        // let selected = data.find((turfs) => turfs.id === turf.id);
        // console.log(selected)
        let booking = await axios.get("http://localhost:5236/api/Bookings");
        let bookings=booking.data
        console.log(bookings)

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
            await axios.post("http://localhost:5236/api/Bookings/AddBooking",filters)
        }

        // await axios.put(`${TURFS_URL}/${turf.id}`, selected);
        // let userResponse = await axios.get(API_URL);
        // let users = userResponse.data;
        // let selectedUser = users.find((u) => u.email === filters.user);

        // selectedUser.bookings.push(filters);
        // await axios.put(`${API_URL}/${selectedUser.id}`, selectedUser);

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
                "service_bnd3l6r", // Replace with your EmailJS Service ID
                "template_0yxodfo", // Replace with your EmailJS Template ID
                templateParams,
                "553L9zs8vGeF5-84R" // Replace with your EmailJS User ID
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
    const BackButton = styled.button`
  background-color: #6c757d;
  margin-top: 1rem;
  width:150px;
  height:50px;
  border:none;
  border-radius:15px;
  font-weight:bold;
  padding:10px;
  &:hover {
    background-color: #5a6268;
  }
`
    const PageContainer = styled.div`
        height: 100vh;
        
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
            <BackButton type="button" onClick={handleBack}>
          Back to Dashboard
        </BackButton>
            {/* <Footer>&copy; 2024 JusPlay. All rights reserved.</Footer> */}
        </PageContainer>
    );
}

export default Book;
