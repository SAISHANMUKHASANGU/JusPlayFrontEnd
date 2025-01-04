import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Navigate, NavLink, UNSAFE_createClientRoutesWithHMRRevalidationOptOut, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
// import turf1 from "./images/turf1.jpg"

let API_URL="https://jusplayserver-2.onrender.com/users"
let TURFS_URL="https://jusplayserver-2.onrender.com/availableTurfs"

let User;
let useremail;
let username;
let Profile;



const Dashboard =() => {
  

  const location=useLocation();
    const {state}=location;
    User=state;
    console.log(User)
    
    
    
    useremail=state.email
    
    
    

  const getuserdata=async()=>{
    const required_data=(await axios.get("http://localhost:5236/api/JusPlay")).data
    console.log(required_data)
    let User=required_data.find((user)=>user.email===useremail)
    console.log(User)
    
    
    
  }

  useEffect(()=>{
      getuserdata()
    },[])
  
  const [UserID,setUserID]=useState(User.id);
  const [Username,setUsername]=useState(null);
  const [nextBooking, setNextBooking] = useState(null);
  const [recentActivity, setRecentActivity] = useState([]);
  const [availableTurfs, setAvailableTurfs] = useState();
  const [filters, setFilters] = useState({ location: '',  type: 'Cricket'});
  const [promotions, setPromotions] = useState([]);
  const [filteredturfs,setFilteredTurfs]=useState([]);
  const [registerturf,setRegisterTurf]=useState(false)
  const [newTurf,setNewturf]=useState({
    name: "",
      image: `./images/turf${Math.floor(Math.random() * 7) + 1}.jpg`,
      type: "",
      price: "",
      location: "",
      rating:Math.floor(Math.random() * 5) + 1,
      user:User.email,
  })
  // useEffect(()=>getdata(),[])
  useEffect(() => {
    getdata()
    // Simulating data fetching
    setNextBooking({
      turfName: 'Seaside Turf',
      date: '2024-12-15',
      time: '5:00 PM',
    });


    // useLocation()
  

    setRecentActivity([
      { id: 1, turfName: 'City Sports Arena', status: 'Completed' },
      { id: 2, turfName: 'Greenfield Ground', status: 'Cancelled' },
    ]);

    

    setPromotions([
      { code: 'WELCOME10', discount: '10% off on first booking' },
      { code: 'FESTIVE20', discount: '20% off during festive season' },
    ]);

    apifetch()
  }, []);


  

  const apifetch=async ()=>
  {
    try {
      const response = await axios.get("http://localhost:5236/api/JusPlay");
      const users = response.data;
      console.log(users)

      const user = users.find(
        (user) => user.email ===useremail 
      );
      

      console.log(user)
      User=user
      username=user.name
      setUsername(user.name)
      console.log(Username)
      console.log(username)
      console.log(User)


      

      
    } catch (error) {
      console.error('Error fetching data:', error);
      
    }
  }




  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

 

  const getdata=async ()=>{
    // let data=JSON.parse(localStorage.getItem('logins'))
    // console.log(data)
    // const response = await axios.get(
    //   `${API_URL}`
    // );

    // console.log(response.data)
    // console.log(data.email)
    

    // const present=response.data.find((user)=>user.email===data.email)
    // console.log(present.email)
    // useremail=present.email
    console.log("dnskldnkl")
    
  }

  // const logout=async ()=>{
  //   let data=JSON.parse(localStorage.getItem('logins'))
  //   const filtered=data.filter((user)=>user.email!==useremail)
  //   console.log(filtered)
  // }
  const logout=async ()=>{
    navigate("/Login")

    localStorage.setItem('logins',false)
  }
  const navigate=useNavigate()

  const goto=async()=>{
    let response=await axios.get("http://localhost:5236/api/JusPlay")
    let data=response.data
    console.log(data)
    
    let selected=data.find((user)=>user.email===User.email)
    console.log(selected)
    navigate("/user",{state:selected})
  }

  const handleBooking = (turf) => {
    navigate("/book",{state:{turf:{turf},user:{User}}});
  };

  const Filter=async()=>{
    console.log("hello")
    let avaiTurfs=await axios.get("http://localhost:5236/api/Turfs")
    console.log(avaiTurfs)
    setAvailableTurfs(avaiTurfs.data)
    console.log(availableTurfs)
    console.log(filters.location)
    console.log(filters.type)
    let filteredturf= availableTurfs.filter((turf)=>turf.type===filters.type  && turf.location===filters.location)
    console.log(filteredturf)
    setFilteredTurfs(filteredturf)
    
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewturf((prevData) => ({ ...prevData, [name]: value }));
  };

  const[error,setError]=useState({
    name:null,
    type:null,
    price:null,
    location:null
  })

  const validation=async()=>{
      let response=(await axios.get(TURFS_URL)).data
      let filtered=response.filter((turf)=>turf.name===newTurf.name)
      if(filtered.length>0)
      {
        let errormessage="Turf already exists"
        setError({name:errormessage})
        return
      }
      if(newTurf.name==="")
      {
        let errormessage="Turf name can't be empty"
        setError({name:errormessage})
        return
      }
      if(newTurf.type==="")
      {
        let errormessage="Sport can't be empty"
        setError({type:errormessage})
        return
      }
      if(newTurf.type!="Cricket"&& newTurf.type!="Football"&&newTurf.type!="Badminton")
      {
        console.log(newTurf.type)
        let errormessage="Sport can be only Cricket or Football or Badminton"
        setError({type:errormessage})
        return
      }
      if(newTurf.price==="")
      {
        let errormessage="price can't empty"
        setError({price:errormessage})
        return
      }
      if(newTurf.price<100 && newTurf.price>=0)
        {
          let errormessage="price can't be less than 100"
          setError({price:errormessage})
          return
        }
      if(newTurf.price<0)
        {
            let errormessage="price can't be negative"
            setError({price:errormessage})
            return
        }
      if(newTurf.location==="")
      {
        let errormessage="Location can't be empty"
          setError({location:errormessage})
          return
      }
      else{
        console.log(newTurf)
        addTurf()
        alert("New turf is added")
        setError({name:null,type:null,price:null,location:null})
      }
      }

      const addTurf=async()=>{
          await axios.post("http://localhost:5236/api/Turfs/AddTurf",newTurf)
          setNewturf({name: "",image: `./images/turf${Math.floor(Math.random() * 7) + 1}`,type: "",price: "",location: "",rating:Math.floor(Math.random() * 5) + 1,user:User.id})
      }



  
  
  const Submit=async(event)=>{
    event.preventDefault()
    console.log(newTurf)
    validation()
    

  }

  const RegisterTurf=()=>{
    if(registerturf)
    {
      setRegisterTurf(false)
    }
    else
    {
      setRegisterTurf(true)
    }
    console.log(registerturf)
      
      
  }

  const bookings=async()=>{
    let response=await axios.get("http://localhost:5236/api/JusPlay")//bookings get url
    let data=response.data
    let selected=data.find((user)=>user.email===useremail)
    navigate("/bookings",{state:selected})

  }
  

  

  return (
    <Div>
    <DashboardWrapper>
      <TopPanel>
        <h1>Hey {username}! Welcome Back To JusPlay.</h1>
        
      <ResponsiveDiv>
      <ProfileButton onClick={goto}>Profile</ProfileButton>
      <BookingsButton onClick={bookings}>Bookings</BookingsButton>
      <LogoutButton onClick={logout}>Logout</LogoutButton>
    </ResponsiveDiv>
        
        {/* {nextBooking && (
          <NextBooking>
            <h2>Next Scheduled Booking</h2>
            <p>{nextBooking.turfName}</p>
            <p>{nextBooking.date} at {nextBooking.time}</p>
          </NextBooking>
        )} */}
        {/* <RecentActivity>
          <h2>Recent Activity</h2>
          <ul>
            {recentActivity.map((activity) => (
              <li key={activity.id}>
                {activity.turfName} - {activity.status}
              </li>
            ))}
          </ul>
        </RecentActivity> */}
      </TopPanel>

      <Filters>
        <h2>Filters</h2>
        <label>
          Location:
          <input type="text" name="location" value={filters.location} onChange={handleFilterChange} />
        </label>
        
        
        <label>
          Turf Type:
          <select name="type" value={filters.type} onChange={handleFilterChange}>
            
            <option value="Cricket" defaultChecked>Cricket</option>
            <option value="Football">Football</option>
            <option value="Badminton">Badminton</option>
          </select>
        </label>
        <StyledButton onClick={Filter}>Submit</StyledButton>
      </Filters>

      <Turfs>
        <h2>Available Turfs</h2>
        <TurfsGrid>
          {filteredturfs.length>0?
          (filteredturfs.map((turf) => (
            <TurfCard key={turf.id}>
              <img src={turf.image} alt={turf.name} />
              <h3>{turf.name}</h3>
              <p>Location: {turf.location}</p>
              <p>Price: ₹{turf.price}/shift</p>
              <p>Rating: {turf.rating} ★</p>
              <button onClick={() => handleBooking(turf)}>Book Now</button>
            </TurfCard>
          ))):
          <p>No available turfs</p>}
          
        </TurfsGrid>
      </Turfs>

      {/* <Promotions>
        <h2>Promotions & Discounts</h2>
        <ul>
          {promotions.map((promo, index) => (
            <li key={index}>
              {promo.code}: {promo.discount}
            </li>
          ))}
        </ul>
      </Promotions> */}
      {/* <RegisterButton onClick={RegisterTurf}>Register your turf</RegisterButton> */}
      {registerturf ? <FormWrapper>
      <StyledForm onSubmit={Submit}>
        <Heading>Add Turf Details</Heading>
        <Input
          type="text"
          name="name"
          value={newTurf.name}
          placeholder="Turf Name"
          onChange={handleInputChange}
        />
        {error.name && (<div>
              
              <span>{error.name}</span>
      
          </div>
        )}
        <Input
          type="text"
          name="type"
          value={newTurf.type}
          placeholder="Sport"
          onChange={handleInputChange}
        />
        {error.type && (<div>
              
              <span>{error.type}</span>
      
          </div>
        )}
        <Input
          type="number"
          name="price"
          value={newTurf.price}
          placeholder="Price per slot"
          onChange={handleInputChange}
          
        />
        {error.price && (<div>
              
              <span>{error.price}</span>
      
          </div>
        )}
        <Input
          type="text"
          name="location"
          value={newTurf.location}
          placeholder="Location"
          onChange={handleInputChange}
        />
        {error.location && (<div>
              
              <span>{error.location}</span>
      
          </div>
        )}
        <Button type="submit">Submit</Button>
      </StyledForm>
      </FormWrapper>:""}
    </DashboardWrapper>
    </Div>
  );
}

export default Dashboard;

// Styled Components

const DashboardWrapper = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  display:flex;
  flex-direction:column;
  gap:10px;
  min-height:100vh;
  @media (max-width: 768px) {
    padding: 15px;
    gap: 8px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    gap: 6px;
  }
  
  
  
`;

const TopPanel = styled.header`
  background-color: #107d89;
  color: white;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;

  h1 {
    margin: 0 0 10px;
    font-size: 24px;
  }
`;

const NextBooking = styled.div`
  margin-top: 15px;
`;

const RecentActivity = styled.div`
  margin-top: 15px;

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    background-color: #0fc1e1;
    margin-bottom: 5px;
    padding: 8px;
    border-radius: 4px;
  }
`;

const Filters = styled.section`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  h2 {
    margin-top: 0;
  }

  label {
    display: block;
    margin-bottom: 10px;
  }

  input,
  select {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

   @media (max-width: 768px) {
    padding: 15px;

    input,
    select {
      padding: 6px;
    }
  }

  @media (max-width: 480px) {
    padding: 10px;

    h2 {
      font-size: 16px;
    }

    input,
    select {
      padding: 4px;
      font-size: 14px;
    }
  }
`;

const Turfs = styled.section`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  
`;

const TurfsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;

  @media (max-width: 768px) {
    gap: 15px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  @media (max-width: 480px) {
    gap: 10px;
    grid-template-columns: 1fr;
  }
`;

const TurfCard = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.03);
  }

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;

     @media (max-width: 768px) {
      height: 120px;
    }

    @media (max-width: 480px) {
      height: 100px;
    }
  }

  h3 {
    margin: 10px;
    font-size: 18px;

    @media (max-width: 480px) {
      font-size: 16px;
    }
  }

  h3 {
    margin: 10px;
    font-size: 18px;
  }

  p {
    margin: 10px;
    color: #555;
  }

  button {
    display: block;
    width: calc(100% - 20px);
    margin: 10px auto;
    padding: 10px;
    background-color: #0073e6;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #005bb5;
  }

   @media (max-width: 768px) {
      font-size: 14px;
    }

    @media (max-width: 480px) {
      font-size: 12px;
      padding: 8px;
    }
`;

const Promotions = styled.section`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 10px;
    padding: 10px;
    background-color: #f0f8ff;
    border: 1px dashed #0073e6;
    border-radius:4px;
}
`;

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f7f9fc;

   @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const StyledForm = styled.form`
  background: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 300px;

  @media (max-width: 768px) {
    padding: 1.5rem;
    gap: 1rem;
    width: 100%;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    gap: 0.75rem;
    width: 100%;
  }
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #5b8cfa;
    box-shadow: 0 0 5px rgba(91, 140, 250, 0.5);
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 0.4rem;
    font-size: 0.8rem;
  }
`;

const Button = styled.button`
  background-color: #5b8cfa;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #407ee8;
  }

  &:active {
    transform: scale(0.98);
  }
`;

const Heading = styled.h2`
  text-align: center;
  color: #333333;
  margin-bottom: 1rem;
`;

export const RegisterButton = styled.button`
  background-color: #4caf50; /* Green color */
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.1s ease;

  &:hover {
    background-color: #45a049; /* Slightly darker green */
  }

  &:active {
    transform: scale(0.98); /* Button presses in slightly */
  }

  &:disabled {
    background-color: #a5d6a7; /* Light green for disabled */
    cursor: not-allowed;
  }
`;

export const LogoutButton = styled.button`
  background-color: #f5f5f5;
  color: #333;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #e0e0e0;
    color: #000;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const ProfileButton = styled.button`
  background-color: #1e90ff; /* Dodger Blue */
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #1c86ee; /* Slightly darker blue */
    box-shadow: 0 4px 8px rgba(30, 144, 255, 0.5);
  }
`;

export const BookingsButton = styled.button`
  background-color: #ffeb3b; /* Bright Yellow */
  color: #388e3c; /* Forest Green */
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #fdd835; /* Slightly darker yellow */
    box-shadow: 0 4px 8px rgba(253, 216, 53, 0.5);
  }
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    background-color: #003f7f;
    transform: scale(0.95);
  }

  &:focus {
    outline: 2px solid #80bdff;
  }
`;

const Div=styled.div`
  background-image: url("https://images.squarespace-cdn.com/content/v1/65899401195ba416670c0913/cc555d6e-7ffa-4817-abea-c0cbacfbb9f5/DALL%C2%B7E+2024-05-14+12.43.52+-+A+vibrant+banner+showcasing+a+dynamic+clash+between+cricket+and+badminton.+On+the+left+side%2C+draw+a+cricket+player+in+action%2C+mid-swing+with+a+bat%2C+we.jpeg?format=1500w");
  background-size: cover;
  background-repeat: no-repeat;
`

const ResponsiveDiv = styled.div`
  display: flex;
  
  
  gap: 10px;
  padding: 10px;

  // Default styles
  button {
    padding: 10px 20px;
    font-size: 16px;
  }

  // Media queries for responsiveness
  @media (max-width: 768px) {
    flex-direction: column;
    button {
      width: 100%;
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    button {
      font-size: 12px;
      padding: 8px 16px;
    }
  }
    `