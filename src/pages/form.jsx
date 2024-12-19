import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

let API_URL = "https://jusplayserver-2.onrender.com/users";

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
  padding: 20px;
`;

const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 30px;
  background-color: rgba(255, 255, 255);
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  width: 350px;
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
    email: null,
    username: null,
    favorite_game: null,
    password: null,
  });

  const [visibility, setVisibility] = useState(false);
  const [users, setUsers] = useState([]);
  const [newuser, setNewUser] = useState({
    email: "",
    name: "",
    favorite_game: "",
    password: "",
    bookings: [],
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    try {
      const response = await axios.get(API_URL);
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
    const emailtype = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nametype = /^[a-zA-Z]+$/;

    const filtered = users.filter((user) => user.email === newuser.email);

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

    if (newuser.name === "") {
      setError({ username: "Username can't be Empty" });
      return;
    }

    if (!nametype.test(newuser.name)) {
      setError({ username: "Username should only contain characters" });
      return;
    }

    if (newuser.favorite_game === "") {
      setError({ favorite_game: "Favorite Game can't be Empty" });
      return;
    }

    addUser();
    navigate("/Login");
  };

  const addUser = async () => {
    try {
      const response = await axios.post(API_URL, newuser);
      setUsers([...users, response.data]);
      setNewUser({
        name: "",
        email: "",
        favorite_game: "",
        password: "",
        bookings: [],
      });
    } catch (error) {
      console.log("Error adding User", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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
              value={newuser.favorite_game}
              onChange={(e) =>
                setNewUser({ ...newuser, favorite_game: e.target.value })
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
