// import axios from 'axios';
// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import styled from 'styled-components';


// let API_URL = "http://localhost:5236/api/JusPlay";

// const Div = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
//   gap: 20px;
//   min-height: 100vh;
//   background-image: url("https://images.squarespace-cdn.com/content/v1/65899401195ba416670c0913/cc555d6e-7ffa-4817-abea-c0cbacfbb9f5/DALL%C2%B7E+2024-05-14+12.43.52+-+A+vibrant+banner+showcasing+a+dynamic+clash+between+cricket+and+badminton.+On+the+left+side%2C+draw+a+cricket+player+in+action%2C+mid-swing+with+a+bat%2C+we.jpeg?format=1500w");
//   background-size: cover;
//   background-repeat: no-repeat;
//   padding: 100px;
// `;

// const SignupForm = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 15px;
//   padding: 30px;
//   background-color: rgba(24,182,218,0.1);
//   border-radius: 10px;
//   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
//   width: 350px;
//   backdrop-filter:blur(50px);

//   @media (max-width: 768px) {
    
//     height: auto;
//     width:auto;
//   }

//   /* Media Query for mobile devices */
//   @media (max-width: 480px) {
//     height: auto;
//     width:auto
//     flex-direction: column;
//   }
  
//   @media (max-width: 375px) {
//     height: auto;
//     width:auto
//     flex-direction: column;
//   }
// `;

// const Title = styled.h1`
//   text-align: center;
//   font-size: 24px;
//   color: #333;
//   margin-bottom: 10px;
// `;

// const Fieldset = styled.fieldset`
//   border: 1px solid #ddd;
//   border-radius: 5px;
//   padding: 15px;
// `;

// const Legend = styled.legend`
//   padding: 0 10px;
//   font-size: 18px;
//   color: #555;
// `;

// const InputGroup = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 10px;
// `;

// const Label = styled.label`
//   margin-bottom: 5px;
//   font-size: 14px;
//   color: #333;
// `;

// const Input = styled.input`
//   padding: 10px;
//   border: 1px solid #ddd;
//   border-radius: 5px;
//   font-size: 14px;
//   outline: none;

//   &:focus {
//     border-color: #007bff;
//   }
// `;

// const Button = styled.button`
//   padding: 10px 20px;
//   background-color: #28a745;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   font-size: 16px;
//   cursor: pointer;
//   transition: background-color 0.3s;
//   width:80px;

//   &:hover {
//     background-color: #218838;
//   }
  
// `;

// const ErrorMessage = styled.span`
//   color: red;
//   font-size: 15px;
// `;

// const SelectField = styled.select`
//         padding: 12px;
//         border: 1px solid #ddd;
//         border-radius: 6px;
//         font-size: 16px;
//         color: #333;
//         width: 100%;
//         background-color: #fff;
//         &:focus {
//             outline: none;
//             border-color: #007bff;
//             box-shadow: 0 0 8px rgba(0, 123, 255, 0.2);
//         }
//         @media (max-width: 768px) {
//     padding: 20px;
//     width: 90%;
//     gap: 15px;
//   }

//   @media (max-width: 480px) {
//     padding: 15px;
//     gap: 10px;
//   }
//     `;


// function Form() {
//   const [error, setError] = useState({
//     email: "",
//     username: null,
//     favorite_game: null,
//     password: null,
//     confirmPassword: null,
//   });
//   const [usertype,setUsertype]=useState("User")
//   const [visibility, setVisibility] = useState(false);
//   const [users, setUsers] = useState([]);
//   const [newuser, setNewUser] = useState({
//     email: "",
//     name: "",
//     favoriteGame: "",
//     password: "",
    
//   });
//   const [newowner, setOwner] = useState({
//     email: "",
//     name: "",
    
//     password: "",
    
//   });
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchdata();
//   }, []);

//   const fetchdata = async () => {
//     try {
//       const response = await axios.get("http://localhost:5236/api/JusPlay");
//       setUsers(response.data);
//     } catch (error) {
//       console.log("Error fetching User", error);
//     }
//   };

//   const ChangeAttribute = (event) => {
//     event.preventDefault();
//     setVisibility(!visibility);
//   };

//   const validation = async () => {
//     setError(null);
//     const emailtype = /^[^\s@]+@gmail.com/;
//     const nametype = /^[a-zA-Z]+$/;
//     let response=await axios.get("http://localhost:5236/api/Owners")
//       let data=response.data
//       let selected=data.some((owner)=>owner.email===newowner.email)
//       console.log("owner")
//     if(usertype==="User")
//     {
//       console.log("user")
//       const filtered = users.filter((user) => user.email === newuser.email);
//       console.log(filtered)

//       if (newuser.email === "") {
//         setError({email: "Email can't be Empty" });
//         return;
//       }

//       if (filtered.length > 0) {
//         setError({ email: "Email already exists" });
//         return;
//       }

//       if (!emailtype.test(newuser.email)) {
//         setError({ email: "Email should be in correct format" });
//         return;
//       }

//       if (newuser.password === "") {
//         setError({ password: "Password can't be Empty" });
//         return;
//       }

//       if (newuser.password.length < 5) {
//         setError({ password: "Password should be at least 5 characters" });
//         return;
//       }

//       if (confirmPassword === "") {
//         setError({ confirmPassword: "Confirm Password can't be Empty" });
//         return;
//       }

//       if (newuser.password !== confirmPassword) {
//         setError({ confirmPassword: "Passwords do not match" });
//         return;
//       }

//       if (newuser.name === "") {
//         setError({ username: "Username can't be Empty" });
//         return;
//       }

//       if (!nametype.test(newuser.name)) {
//         setError({ username: "Username should only contain characters" });
//         return;
//       }

//       if (newuser.favoriteGame === "") {
//         setError({ favorite_game: "Favorite Game can't be Empty" });
//         return;
//       }
//       else{
//         addUser();
//         navigate("/Login");
//       }
//     }
//     if(usertype==="Owner"){
      
//       if (newowner.email === "") {
//         console.log("Empty email")
//         setError({ email: "Email can't be Empty" });
//         console.log(error)
//         return;
//       }

//       if (selected) {
//         setError({ email: "Email already exists" });
//         return;
//       }

//       if (!emailtype.test(newowner.email)) {
//         setError({ email: "Email should be in correct format" });
//         return;
//       }

//       if (newowner.password === "") {
//         setError({ password: "Password can't be Empty" });
//         return;
//       }

//       if (newowner.password.length < 5) {
//         setError({ password: "Password should be at least 5 characters" });
//         return;
//       }

//       if (confirmPassword === "") {
//         setError({ confirmPassword: "Confirm Password can't be Empty" });
//         return;
//       }

//       if (newowner.password !== confirmPassword) {
//         setError({ confirmPassword: "Passwords do not match" });
//         return;
//       }

//       if (newowner.name === "") {
//         setError({ username: "Username can't be Empty" });
//         return;
//       }

//       if (!nametype.test(newowner.name)) {
//         setError({ username: "Username should only contain characters" });
//         return;
//       }
//       else{
//         addUser();
//         navigate("/Login");
//       }
      
//     }
    

    
//   };

//   const addUser = async () => {
//     if(usertype==="User")
//     {
//       try {
//         const response = await axios.post("http://localhost:5236/api/JusPlay/addUser", newuser);
//         setUsers([...users, response.data]);
//         setNewUser({
//           email: "",
//           name: "",
//           favoriteGame: "",
//           password: "",
          
//         });
//         setError({
//           email: "",
//     username: null,
//     favorite_game: null,
//     password: null,
//     confirmPassword: null,

//         })
//         setConfirmPassword("");
//       } catch (error) {
//         console.log("Error adding User", error);
//         setError({
//           email: "",
//     username: null,
//     favorite_game: null,
//     password: null,
//     confirmPassword: null,

//         })
//       }
//     }
//     else{
//       try {
//         const response = await axios.post("http://localhost:5236/api/Owners/AddOwner", newowner);
        
//         setOwner({
//           email: "",
//           name: "",

//           password: "",
          
//         });
//         setConfirmPassword("");
//         setError({
//           email: "",
//     username: null,
//     favorite_game: null,
//     password: null,
//     confirmPassword: null,

//         })
        
//       } catch (error) {
//         console.log("Error adding User", error);
//         setError({
//           email: "",
//     username: null,
//     favorite_game: null,
//     password: null,
//     confirmPassword: null,

//         })
//       }
//     }
    
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(newuser);
//     validation();
//   };

//   return (
//     <Div>
      
//       {usertype==="User"?<SignupForm onSubmit={handleSubmit}>
//         <Title>User SignUp</Title>
//         <SelectField
//                     name="shift"
//                     value={usertype}
//                     onChange={(e)=>setUsertype(e.target.value)}
                        
                    
//                 >
//                     <option value="User">User</option>
//                     <option value="Owner">Owner</option>
                    
//                 </SelectField>
//         <Fieldset>
//           <Legend>Mail Details</Legend>
//           <InputGroup>
//             <Label htmlFor="email">Email:</Label>
//             <Input
//               type="email"
//               name="email"
//               value={newuser.email}
//               onChange={(e) =>
//                 setNewUser({ ...newuser, email: e.target.value })
//               }
//               placeholder="Email"
//             />
//             {error.email!=="" && <ErrorMessage>{error.email}</ErrorMessage>}
//           </InputGroup>
//           <InputGroup>
//             <Label htmlFor="password">Password:</Label>
//             <Input
//               type={visibility ? "text" : "password"}
//               name="password"
//               value={newuser.password}
//               onChange={(e) =>
//                 setNewUser({ ...newuser, password: e.target.value })
//               }
//               placeholder="Password"
//             />
//             <Button type="button" onClick={ChangeAttribute}>
//               {visibility ? "Hide" : "View"}
//             </Button>
//           </InputGroup>
//           {error.password && <ErrorMessage>{error.password}</ErrorMessage>}

//           <InputGroup>
//             <Label htmlFor="confirmPassword">Confirm Password:</Label>
//             <Input
//               type={visibility ? "text" : "password"}
//               name="confirmPassword"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               placeholder="Confirm Password"
//             />
//           </InputGroup>
//           {error.confirmPassword && (
//             <ErrorMessage>{error.confirmPassword}</ErrorMessage>
//           )}
//         </Fieldset>
//         <Fieldset>
//           <Legend>Personal Info</Legend>
//           <InputGroup>
//             <Label htmlFor="username">Name:</Label>
//             <Input
//               type="text"
//               name="username"
//               value={newuser.name}
//               onChange={(e) =>
//                 setNewUser({ ...newuser, name: e.target.value })
//               }
//               placeholder="Name"
//             />
//             {error.username && <ErrorMessage>{error.username}</ErrorMessage>}
//           </InputGroup>
//           <InputGroup>
//             <Label htmlFor="favorite_game">Favorite Game:</Label>
//             <Input
//               type="text"
//               name="favorite_game"
//               value={newuser.favoriteGame}
//               onChange={(e) =>
//                 setNewUser({ ...newuser, favoriteGame: e.target.value })
//               }
//               placeholder="Favorite game"
//             />
//             {error.favorite_game && (
//               <ErrorMessage>{error.favorite_game}</ErrorMessage>
//             )}
//           </InputGroup>
//         </Fieldset>
//         <Button type="submit">Submit</Button>
//       </SignupForm>:<SignupForm onSubmit={handleSubmit}>
      
//             <Title>Owner Sign Up</Title>
//             <SelectField
//                     name="shift"
//                     value={usertype}
//                     onChange={(e)=>setUsertype(e.target.value)}
                        
                    
//                 >
//                     <option value="User">User</option>
//                     <option value="Owner">Owner</option>
                    
//                 </SelectField>
//               <Fieldset>
                
//                 <Legend>Mail Details: </Legend>
//                 <InputGroup>
//                 <Label htmlFor="email">Email:</Label>
//                 <Input type="Email" name='email' value={newowner.email} onChange={(e)=>setOwner({...newowner,email:e.target.value})} placeholder='Email'/>
//                 {error.email!=null ? <ErrorMessage>{error.email}</ErrorMessage>:null}
//                 </InputGroup>
               
//                 <InputGroup>
//                   <Label htmlFor="password">Password:</Label>
//                   <Input type={visibility?"text":"password"} name='password' value={newowner.password} onChange={(e)=>setOwner({...newowner,password:e.target.value})} placeholder="Password"/>
//                   <Button onClick={ChangeAttribute}>View</Button>
//                 </InputGroup>
//                 {error.password && (<div>
              
//                      <ErrorMessage>{error.password}</ErrorMessage>
              
//                   </div>
//                 )}
//                 <InputGroup>
//             <Label htmlFor="confirmPassword">Confirm Password:</Label>
//             <Input
//               type={visibility ? "text" : "password"}
//               name="confirmPassword"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               placeholder="Confirm Password"
//             />
//           </InputGroup>
//           {error.confirmPassword && (
//             <ErrorMessage>{error.confirmPassword}</ErrorMessage>
//           )}
//                 </Fieldset>
//                 <Fieldset>
//                   <Legend>Personal Info:</Legend>
//                 <InputGroup>
//                 <Label htmlFor="username">Name:</Label>
//                 <Input type="text" value={newowner.name} name='username' onChange={(e)=>setOwner({...newowner,name:e.target.value})} placeholder="Name"/>
//                 {error.username && (<div>
              
//                       <ErrorMessage>{error.username}</ErrorMessage>
              
//                    </div>
//                 )}
//                 </InputGroup>
                
//                 </Fieldset>
                
                
                
                
//                 <Button type="submit">Submit</Button>
//             </SignupForm>}
//     </Div>
//   );
// }

// export default Form;


import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

let API_URL = "http://localhost:5236/api/JusPlay";

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  min-height: 100vh;
  background-image: url("https://images.squarespace-cdn.com/content/v1/65899401195ba416670c0913/cc555d6e-7ffa-4817-abea-c0cbacfbb9f5/DALL%C2%B7E+2024-05-14+12.43.52+-+A+vibrant+banner+showcasing+a+dynamic+clash+between+cricket+and+badminton.+On+the+left+side%2C+draw+a+cricket+player+in+action%2C+mid-swing+with+a+bat%2C+we.jpeg?format=1500w");
  background-size: cover;
  background-repeat: no-repeat;
  padding: 100px;
`;

const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 30px;
  background-color: rgba(24,182,218,0.1);
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  width: 350px;
  backdrop-filter:blur(50px);

  @media (max-width: 768px) {
    
    height: auto;
    width:auto;
  }

  /* Media Query for mobile devices */
  @media (max-width: 480px) {
    height: auto;
    width:auto
    flex-direction: column;
  }
  
  @media (max-width: 375px) {
    height: auto;
    width:auto
    flex-direction: column;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
`;

const Fieldset = styled.fieldset`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 15px;
`;

const Legend = styled.legend`
  padding: 0 10px;
  font-size: 18px;
  color: #555;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-size: 14px;
  color: #333;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  width:80px;

  &:hover {
    background-color: #218838;
  }
  
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 15px;
`;

function Form() {
  const [error, setError] = useState({
    email: "",
    username: null,
    favorite_game: null,
    password: null,
    confirmPassword: null,
  });

  const [visibility, setVisibility] = useState(false);
  const [users, setUsers] = useState([]);
  const [newuser, setNewUser] = useState({
    email: "",
    name: "",
    favoriteGame: "",
    password: "",
    
  });
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    try {
      const response = await axios.get("http://localhost:5236/api/JusPlay");
      setUsers(response.data);
    } catch (error) {
      console.log("Error fetching User", error);
    }
  };

  const ChangeAttribute = (event) => {
    event.preventDefault();
    setVisibility(!visibility);
  };

  const validation = async () => {
    setError(null);
    const emailtype = /^[^\s@]+@gmail.com/;
    const nametype = /^[a-zA-Z]+$/;

    const filtered = users.filter((user) => user.email === newuser.email);
    console.log(filtered)

    if (newuser.email === "") {
      setError({ email: "Email can't be Empty" });
      return;
    }

    if (filtered.length > 0) {
      setError({ email: "Email already exists" });
      return;
    }

    if (!emailtype.test(newuser.email)) {
      setError({ email: "Email should be in correct format" });
      return;
    }

    if (newuser.password === "") {
      setError({ password: "Password can't be Empty" });
      return;
    }

    if (newuser.password.length < 5) {
      setError({ password: "Password should be at least 5 characters" });
      return;
    }

    if (confirmPassword === "") {
      setError({ confirmPassword: "Confirm Password can't be Empty" });
      return;
    }

    if (newuser.password !== confirmPassword) {
      setError({ confirmPassword: "Passwords do not match" });
      return;
    }

    if (newuser.name === "") {
      setError({ username: "Username can't be Empty" });
      return;
    }

    if (!nametype.test(newuser.name)) {
      setError({ username: "Username should only contain characters" });
      return;
    }

    if (newuser.favoriteGame === "") {
      setError({ favorite_game: "Favorite Game can't be Empty" });
      return;
    }

    addUser();
    navigate("/Login");
  };

  const addUser = async () => {
    try {
      const response = await axios.post("http://localhost:5236/api/JusPlay/addUser", newuser);
      setUsers([...users, response.data]);
      setNewUser({
        email: "",
        name: "",
        favoriteGame: "",
        password: "",
        
      });
      setConfirmPassword("");
    } catch (error) {
      console.log("Error adding User", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(newuser);
    validation();
  };

  return (
    <Div>
      <SignupForm onSubmit={handleSubmit}>
        <Title>Sign Up</Title>
        <Fieldset>
          <Legend>Mail Details</Legend>
          <InputGroup>
            <Label htmlFor="email">Email:</Label>
            <Input
              type="email"
              name="email"
              value={newuser.email}
              onChange={(e) =>
                setNewUser({ ...newuser, email: e.target.value })
              }
              placeholder="Email"
            />
            {error.email && <ErrorMessage>{error.email}</ErrorMessage>}
          </InputGroup>
          <InputGroup>
            <Label htmlFor="password">Password:</Label>
            <Input
              type={visibility ? "text" : "password"}
              name="password"
              value={newuser.password}
              onChange={(e) =>
                setNewUser({ ...newuser, password: e.target.value })
              }
              placeholder="Password"
            />
            <Button type="button" onClick={ChangeAttribute}>
              {visibility ? "Hide" : "View"}
            </Button>
          </InputGroup>
          {error.password && <ErrorMessage>{error.password}</ErrorMessage>}

          <InputGroup>
            <Label htmlFor="confirmPassword">Confirm Password:</Label>
            <Input
              type={visibility ? "text" : "password"}
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
            />
          </InputGroup>
          {error.confirmPassword && (
            <ErrorMessage>{error.confirmPassword}</ErrorMessage>
          )}
        </Fieldset>
        <Fieldset>
          <Legend>Personal Info</Legend>
          <InputGroup>
            <Label htmlFor="username">Username:</Label>
            <Input
              type="text"
              name="username"
              value={newuser.name}
              onChange={(e) =>
                setNewUser({ ...newuser, name: e.target.value })
              }
              placeholder="Username"
            />
            {error.username && <ErrorMessage>{error.username}</ErrorMessage>}
          </InputGroup>
          <InputGroup>
            <Label htmlFor="favorite_game">Favorite Game:</Label>
            <Input
              type="text"
              name="favorite_game"
              value={newuser.favoriteGame}
              onChange={(e) =>
                setNewUser({ ...newuser, favoriteGame: e.target.value })
              }
              placeholder="Favorite game"
            />
            {error.favorite_game && (
              <ErrorMessage>{error.favorite_game}</ErrorMessage>
            )}
          </InputGroup>
        </Fieldset>
        <Button type="submit">Submit</Button>
      </SignupForm>
    </Div>
  );
}

export default Form;