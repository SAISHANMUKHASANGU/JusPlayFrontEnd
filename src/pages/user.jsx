import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

let API_URL="https://jusplayserver-2.onrender.com/users"

// Styled Components

const Div=styled.div`
  min-height:100vh;
  background-image: url("https://images.squarespace-cdn.com/content/v1/65899401195ba416670c0913/cc555d6e-7ffa-4817-abea-c0cbacfbb9f5/DALL%C2%B7E+2024-05-14+12.43.52+-+A+vibrant+banner+showcasing+a+dynamic+clash+between+cricket+and+badminton.+On+the+left+side%2C+draw+a+cricket+player+in+action%2C+mid-swing+with+a+bat%2C+we.jpeg?format=1500w");
  background-size: cover;
  background-repeat: no-repeat;
  display:flex;
  align-items:center;
  justify-content:center;
`

const Container = styled.div`
  min-width: 600px;
  
  padding: 1.5rem;
  background-color: #f8f9fa;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  
  
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 1.5rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  font-size: 0.9rem;
  font-weight: bold;
  color: #555;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 95%;
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 4px rgba(0, 123, 255, 0.4);
  }
`;

const ProfilePictureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const ProfilePicture = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 0.5rem;
  border: 2px solid #007bff;
`;

const Button = styled.button`
  width: 100%;
  background-color: #007bff;
  color: white;
  padding: 0.8rem;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
  &:focus {
    outline: none;
  }
`;

const BackButton = styled(Button)`
  background-color: #6c757d;
  margin-top: 1rem;
  &:hover {
    background-color: #5a6268;
  }
`;

let user;
let favorite;
let filtered;

// User Profile Component
const User = () => {
  const [userData, setUserData] = useState({
    username: "",


    profilePicture: "",
    favorite_game:""
  });
  const [isEditing, setIsEditing] = useState(false);

  // Load user data from local storage or server (mocked for now)
  useEffect(() => {
    
    setUserData({username:user,favorite_game:favorite});
  }, []);
  console.log(userData.username)

  const location=useLocation();
      const {state}=location;
      let User=state
      
      
      user=User.name
      favorite=User.favorite_game

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };
  

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserData((prevData) => ({ ...prevData, profilePicture: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    
    setIsEditing(false);
    const response = await axios.get(API_URL);
    const data=response.data;
    console.log(data)
    filtered=data.find((user)=>user.email===User.email)

    console.log(User)

    const final={
      id:User.id,
      email:User.email,
      name:userData.username,
      favorite_game:userData.favorite_game,
      password:User.password,
      profilePicture: userData.profilePicture
    }

    console.log(final)

    

    await axios.put(`${API_URL}/${filtered.id}`,final)



    
  };
  const navigate=useNavigate()
  const handleDelete =async ()=>{
    console.log(User)
    await axios.delete(`${API_URL}/${User.id}`)
    navigate("/Login")

  }

  const handleBack = () => {
    window.location.href = "/dashboard";
  };

  return (
    <Div>
    <Container>
      <Title>User Profile</Title>
      <ProfilePictureContainer>
        <ProfilePicture
          src={
            userData.profilePicture ||
            "https://via.placeholder.com/120?text=Profile+Photo"
          }
          alt="Profile"
        />
        {isEditing && <Input type="file" accept="image/*" onChange={handleFileUpload} />}
      </ProfilePictureContainer>
      <form>
        <FormGroup>
          <Label>Username</Label>
          <Input
            type="text"
            name="username"
            value={userData.username}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </FormGroup>
        {/* <FormGroup>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            disabled
          />
        </FormGroup> */}
        {/* <FormGroup>
          <Label>Phone</Label>
          <Input
            type="tel"
            name="phone"
            value={userData.phone}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </FormGroup> */}
        <FormGroup>
          <Label>favorite_game</Label>
          <Input
            type="text"
            name="favorite_game"
            value={userData.favorite_game}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </FormGroup>
        {isEditing ? (
          <Button type="button" onClick={handleSave}>
            Save
          </Button>
        ) : (
          <Button type="button" onClick={() => setIsEditing(true)}>
            Edit Profile
          </Button>
        )}
        {/* <BackButton type="button" onClick={handleBack}>
          Back to Dashboard
        </BackButton> */}
        <BackButton type="button" onClick={handleDelete}>
          Delete
        </BackButton>
      </form>
    </Container>
    </Div>
  );
};

export default User;


