import axios from 'axios'
import { useState,useEffect } from 'react'
import User from './user';
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import { userConsumer } from '../context/UserContext';


let API_URL="https://jusplayserver-2.onrender.com/owners"

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
  background-color: rgba(255, 255, 255);
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  width: 350px;

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

function Owner() {

   
    const[error,setError]=useState({
      email:"",
      username:null,
      password:null
    })
    const [visibility,setVisibility]=useState(false)
    const [users,setUsers]=useState([])
    const [newuser,setNewUser]=useState({
        email:"",
        name:"",
        password:"",
        
    })

    const [editUser, setEditUser] = useState(null);

    useEffect(() => {
           fetchdata()
    }, []);

    const fetchdata = async () => {
        try {
          const response = await axios.get("http://localhost:5236/api/Owners");
          setUsers(response.data);
          console.log(response.data)
        } catch (error) {
          console.log("Error fetching User", error);
        }
      };

    

    const ChangeAttribute=(event)=>{
      event.preventDefault()
      if(visibility)
      {
        setVisibility(false)
      }
      else
      {
        setVisibility(true)
      }
    }

    const validation=async()=>{
      setError(null)
      const emailtype=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const nametype=/^[a-zA-Z]+$/;

      const filtered=users.filter((user)=>user.email===newuser.email)
      

      if(newuser.email===""){
        let errormessage="Email can't be Empty";
        
        await setError({ email: errormessage })
        return
        
      }
      if(filtered.length>0){
        let errormessage="Email already exists";
        
        await setError({ email: errormessage })
        return
        
      }
      else if(!emailtype.test(newuser.email))
      {
        let errormessage="Email should be in correct format";
        
        await setError({ email: errormessage })
        return
      }
      else if(newuser.password==="")
        {
          let errormessage="Password can't be Empty";
          
          await setError({ password: errormessage })
          return
        }
        else if(newuser.password.length<5)
          {
            let errormessage="Password should be atleast 5 characters";
            
            await setError({ password: errormessage })
            return
          }
      else if(newuser.name==="")
      {
        let errormessage="Username can't be Empty";
        
        await setError({ username: errormessage })
        return
      }
      else if(!nametype.test(newuser.name))
      {
        let errormessage="Username should only contain characters";
        
        await setError({ username: errormessage })
        return
      }
      
      else if(newuser.favorite_game==="")
      {
         let errormessage="Favorite can't be Empty";
        
        await setError({ favorite_game: errormessage })
        return
      }
      
      else{
        addUser()
        navigate("/ownerlogin");
        
      }
      
    }
    useEffect(() => {
      if (error) {
        console.log(error.username);
      }
    }, [error]);

   
    const addUser=async ()=>{

  

        try{
            
            const response=await axios.post("http://localhost:5236/api/Owners/AddOwner",newuser)
            setUsers([...users,response.data])
            setNewUser({name:"",email:"",password:""})

            
        }
        catch(error){
            console.log("Error adding User",error);
        }
    }
    const navigate=useNavigate()
    const handleSubmit=(event)=>
    {
        event.preventDefault()
        validation()
        
        
    }

    const UpdateUser=async (event)=>{
        event.preventDefault()
        try {
            const response = await axios.put(
              `${API_URL}/${editUser.id}`,
              editUser
            );
            setUsers(
              users.map((user) =>
                user.id === response.data.id ? response.data : user
              )
            );
            setEditUser(null);
          } catch (error) {
            console.log("error updating user", error);
          }
    }

  return (
    <>
      <Div>
        
        
            
          

            <SignupForm onSubmit={handleSubmit}>
            <Title>Sign Up</Title>
              <Fieldset>
                
                <Legend>Mail Details: </Legend>
                <InputGroup>
                <Label htmlFor="email">Email:</Label>
                <Input type="Email" name='email' value={newuser.email} onChange={(e)=>setNewUser({...newuser,email:e.target.value})} placeholder='Email'/>
                {error.email && (<div>
              
                      <ErrorMessage>{error.email}</ErrorMessage>
              
                  </div>
                )}
                </InputGroup>
               
                <InputGroup>
                  <Label htmlFor="password">Password:</Label>
                  <Input type={visibility?"text":"password"} name='password' value={newuser.password} onChange={(e)=>setNewUser({...newuser,password:e.target.value})} placeholder="Password"/>
                  <Button onClick={ChangeAttribute}>View</Button>
                </InputGroup>
                {error.password && (<div>
              
                     <ErrorMessage>{error.password}</ErrorMessage>
              
                  </div>
                )}
                </Fieldset>
                <Fieldset>
                  <Legend>Personal Info:</Legend>
                <InputGroup>
                <Label htmlFor="username">Username:</Label>
                <Input type="text" value={newuser.name} name='username' onChange={(e)=>setNewUser({...newuser,name:e.target.value})} placeholder="Username"/>
                {error.username && (<div>
              
                      <ErrorMessage>{error.username}</ErrorMessage>
              
                   </div>
                )}
                </InputGroup>
                
                </Fieldset>
                
                
                
                
                <Button type="submit">Submit</Button>
            </SignupForm>
            
        
        {/* {editUser &&(<div>
            <p>Editing form</p>
                <form action="">
                <input type="email" value={editUser.email} onChange={(e)=>setEditUser({...editUser,email:e.target.value})} placeholder='Email'/>
                <input type="text" value={editUser.name} onChange={(e)=>setEditUser({...editUser,name:e.target.value})} placeholder="Username"/>
                <input type="text" value={editUser.favorite_game} onChange={(e)=>setEditUser({...editUser,favorite_game:e.target.value})} placeholder='Favorite game' />
                <input type="password" value={editUser.password} onChange={(e)=>setEditUser({...editUser,password:e.target.value})} placeholder="Password"/>
                <button type="submit" onClick={UpdateUser}>Submit</button>
                    
                </form>
                
        </div>)
        } */}
        {/* <div> 
        {users.map((user) => (
          <User
            key={user.id}
            user={user}
            onEdit={setEditUser}
            onDelete={deleteUser}
          />
        ))}
      </div> */}
      </Div>
    </>
  )
}

export default Owner