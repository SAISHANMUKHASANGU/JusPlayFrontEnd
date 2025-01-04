import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';

let API_URL = "http://localhost:5236/api/JusPlay";


const Div=styled.div`
  
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    gap:15px;
    min-height:100vh;
    background-image:url("https://images.squarespace-cdn.com/content/v1/65899401195ba416670c0913/cc555d6e-7ffa-4817-abea-c0cbacfbb9f5/DALL%C2%B7E+2024-05-14+12.43.52+-+A+vibrant+banner+showcasing+a+dynamic+clash+between+cricket+and+badminton.+On+the+left+side%2C+draw+a+cricket+player+in+action%2C+mid-swing+with+a+bat%2C+we.jpeg?format=1500w");
    background-size:100% 100%;
    background-repeat:no-repeat;
    padding:60px;
    `;
// Styled components for styling
const SignInContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

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

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const Error = styled.div`
  color: red;
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;

const Success = styled.div`
  color: green;
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;

const SignInButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #007bff;
  color: white;
  font-size: 1.1rem;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const SignIn = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [logins,setLogins]=useState(false)
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  useLocation();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value
    });
  };
  useEffect(()=>{
    localStorage.setItem('logins',logins)
  },[logins])


  const navigate=useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    

    try {
      const response = await axios.get("http://localhost:5236/api/JusPlay");
      console.log(response)
      const users = response.data;

      const user = users.find(
        (user) => user.email === loginData.email && user.password === loginData.password
      );

      if (user) {
        

        // await axios.put(`${API_URL}/${user.id}`, updatedUser);

        setSuccess('Login successful!');
        setError('');
        navigate("/dashboard", {state:{email:user.email}})
        setLogins(true)
        
        
      } else {
        setError('Invalid email or password');
        setSuccess('');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('An error occurred. Please try again later.');
      setSuccess('');
    }
  };

  return (
    <Div>
    <SignInContainer>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="email">Email:</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
            
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="password">Password:</Label>
          <Input
            type="password"
            id="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            
          />
        </FormGroup>
        <p>Not a Previous user?<a href="/signup">Signup</a></p>

        {error && <Error>{error}</Error>}
        {success && <Success>{success}</Success>}

        <SignInButton type="submit">Sign In</SignInButton>
      </form>
    </SignInContainer>
    </Div>
  );
};

export default SignIn;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import styled from 'styled-components';
// import { useLocation, useNavigate } from 'react-router-dom';

// let API_URL = "https://jusplayserver-2.onrender.com/users";

// // Styled Components
// const Div = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
//   gap: 15px;
//   min-height: 100vh;
//   background-image: url("https://images.squarespace-cdn.com/content/v1/65899401195ba416670c0913/cc555d6e-7ffa-4817-abea-c0cbacfbb9f5/DALL%C2%B7E+2024-05-14+12.43.52+-+A+vibrant+banner+showcasing+a+dynamic+clash+between+cricket+and+badminton.+On+the+left+side%2C+draw+a+cricket+player+in+action%2C+mid-swing+with+a+bat%2Cwe.jpeg?format=1500w");
//   background-size: 100% 100%;
//   background-repeat: no-repeat;
// `;

// const SignInContainer = styled.div`
//   width: 100%;
//   max-width: 400px;
//   margin: 0 auto;
//   padding: 2rem;
//   background-color: #f4f4f4;
//   border-radius: 8px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// `;

// const FormGroup = styled.div`
//   margin-bottom: 1rem;
// `;

// const Label = styled.label`
//   display: block;
//   font-weight: bold;
//   margin-bottom: 0.5rem;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 0.75rem;
//   font-size: 1rem;
//   border-radius: 4px;
//   border: 1px solid #ccc;
//   &:focus {
//     outline: none;
//     border-color: #007bff;
//   }
// `;

// const Error = styled.div`
//   color: red;
//   font-size: 0.875rem;
//   margin-top: 0.5rem;
// `;

// const Success = styled.div`
//   color: green;
//   font-size: 0.875rem;
//   margin-top: 0.5rem;
// `;

// const SignInButton = styled.button`
//   width: 100%;
//   padding: 0.75rem;
//   background-color: #007bff;
//   color: white;
//   font-size: 1.1rem;
//   border-radius: 4px;
//   border: none;
//   cursor: pointer;
//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// const SignIn = () => {
//   const [loginData, setLoginData] = useState({
//     email: '',
//     password: ''
//   });
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [formErrors, setFormErrors] = useState({
//     email: '',
//     password: ''
//   });

//   // Handle form field changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setLoginData({
//       ...loginData,
//       [name]: value
//     });

//     // Clear form errors on change
//     setFormErrors({
//       ...formErrors,
//       [name]: ''
//     });
//   };

//   // Validate email and password fields
//   const validate = () => {
//     let errors = {};
//     let isValid = true;

//     // Email validation
//     if (!loginData.email) {
//       errors.email = 'Email is required';
//       isValid = false;
//     } else if (!/\S+@\S+\.\S+/.test(loginData.email)) {
//       errors.email = 'Please enter a valid email address';
//       isValid = false;
//     }

//     // Password validation
//     if (!loginData.password) {
//       errors.password = 'Password is required';
//       isValid = false;
//     }

//     setFormErrors(errors);
//     return isValid;
//   };

//   // Handle form submission
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validate()) {
//       return; // Stop if validation fails
//     }

//     try {
//       const response = await axios.get(API_URL);
//       const users = response.data;

//       const user = users.find(
//         (user) => user.email === loginData.email && user.password === loginData.password
//       );

//       if (user) {
//         const updatedUser = {
//           ...user,
//           lastLogin: new Date().toISOString() // Store the last login time
//         };

//         await axios.put(`${API_URL}/${user.id}`, updatedUser);

//         // Save user data in localStorage
//         localStorage.setItem('user', JSON.stringify({ email: user.email, id: user.id }));

//         setSuccess('Login successful!');
//         setError('');
//         navigate("/dashboard", { state: { email: user.email } });
//       } else {
//         setError('Invalid email or password');
//         setSuccess('');
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       setError('An error occurred. Please try again later.');
//       setSuccess('');
//     }
//   };

//   // Check if user is already logged in (from localStorage)
//   useEffect(() => {
//     const user = localStorage.getItem('user');
//     if (user) {
//       const parsedUser = JSON.parse(user);
//       setLoginData({ ...loginData, email: parsedUser.email });
//     }
//   }, []); // This will run once when the component is mounted

//   return (
//     <Div>
//       <SignInContainer>
//         <h2>Sign In</h2>
//         <form onSubmit={handleSubmit}>
//           <FormGroup>
//             <Label htmlFor="email">Email:</Label>
//             <Input
//               type="email"
//               id="email"
//               name="email"
//               value={loginData.email}
//               onChange={handleChange}
//             />
//             {formErrors.email && <Error>{formErrors.email}</Error>}
//           </FormGroup>

//           <FormGroup>
//             <Label htmlFor="password">Password:</Label>
//             <Input
//               type="password"
//               id="password"
//               name="password"
//               value={loginData.password}
//               onChange={handleChange}
//             />
//             {formErrors.password && <Error>{formErrors.password}</Error>}
//           </FormGroup>

//           {error && <Error>{error}</Error>}
//           {success && <Success>{success}</Success>}

//           <SignInButton type="submit">Sign In</SignInButton>
//         </form>
//       </SignInContainer>
//     </Div>
//   );
// };

// export default SignIn;
