import axios from 'axios'
import { useState,useEffect } from 'react'
import User from './user';
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';


let API_URL="https://jusplayserver-2.onrender.com/owners"

const Div=styled.div`
  
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    gap:15px;
    min-height:100vh;
    background-image:url("https://images.squarespace-cdn.com/content/v1/65899401195ba416670c0913/cc555d6e-7ffa-4817-abea-c0cbacfbb9f5/DALL%C2%B7E+2024-05-14+12.43.52+-+A+vibrant+banner+showcasing+a+dynamic+clash+between+cricket+and+badminton.+On+the+left+side%2C+draw+a+cricket+player+in+action%2C+mid-swing+with+a+bat%2C+we.jpeg?format=1500w");
    background-size:100% 100%;
    background-repeat:no-repeat
    `;

const Elediv=styled.div`
  display:flex;
  
  flex-direction:column;

`

const Signupform=styled.form`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    gap:15px;
    background-color:#DAF7A6;
    padding:5px;
    border-radius:5px;
    box-shadow:3px solid black;
    min-height:250px
    width:100px
    `

const Title=styled.h1`
  
`

const Fieldset=styled.fieldset`
  padding:5px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  
`

function Owner() {

    const[error,setError]=useState({
      email:null,
      username:null,
      favorite_game:null,
      password:null
    })
    const [visibility,setVisibility]=useState(false)
    const [users,setUsers]=useState([])
    const [newuser,setNewUser]=useState({
        email:"",
        name:"",
        password:"",
        turfs:[]
    })

    const [editUser, setEditUser] = useState(null);

    useEffect(() => {
           fetchdata()
    }, []);

    const fetchdata = async () => {
        try {
          const response = await axios.get(API_URL);
          setUsers(response.data);
          console.log(response.data)
        } catch (error) {
          console.log("Error fetching User", error);
        }
      };

    const deleteUser=async (id)=>
    {
        try{
            console.log("hi")
            let response=await axios.delete(`${API_URL}/${id}`)
            setUsers(users.filter((user)=>user.id!==id))  
            fetchdata()

        }
        catch(error)
        {
            console.log("error deleting User", error);
        }
    }

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
            
            const response=await axios.post(API_URL,newuser)
            setUsers([...users,response.data])
            setNewUser({name:"",email:"",favorite_game:"",password:"",bookings:[]})

            
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
        
        <div id="form">
            
          

            <Signupform onSubmit={handleSubmit}>
            <Title>Sign Up</Title>
              <Fieldset>
                
                <legend>Mail Details: </legend>
                <Elediv>
                <label htmlFor="email">Email:</label>
                <input type="Email" name='email' value={newuser.email} onChange={(e)=>setNewUser({...newuser,email:e.target.value})} placeholder='Email'/>
                {error.email && (<div>
              
                      <span>{error.email}</span>
              
                  </div>
                )}
                </Elediv>
               
                <Elediv>
                  <label htmlFor="password">Password:</label>
                  <input type={visibility?"text":"password"} name='password' value={newuser.password} onChange={(e)=>setNewUser({...newuser,password:e.target.value})} placeholder="Password"/>
                  <button onClick={ChangeAttribute}>View</button>
                </Elediv>
                {error.password && (<div>
              
                     <span>{error.password}</span>
              
                  </div>
                )}
                </Fieldset>
                <Fieldset>
                  <legend>Personal Info:</legend>
                <Elediv>
                <label htmlFor="username">Username:</label>
                <input type="text" value={newuser.name} name='username' onChange={(e)=>setNewUser({...newuser,name:e.target.value})} placeholder="Username"/>
                {error.username && (<div>
              
                      <span>{error.username}</span>
              
                   </div>
                )}
                </Elediv>
                
                </Fieldset>
                
                
                
                
                <button type="submit">Submit</button>
            </Signupform>
            
        </div>
        {editUser &&(<div>
            <p>Editing form</p>
                <form action="">
                <input type="email" value={editUser.email} onChange={(e)=>setEditUser({...editUser,email:e.target.value})} placeholder='Email'/>
                <input type="text" value={editUser.name} onChange={(e)=>setEditUser({...editUser,name:e.target.value})} placeholder="Username"/>
                <input type="text" value={editUser.favorite_game} onChange={(e)=>setEditUser({...editUser,favorite_game:e.target.value})} placeholder='Favorite game' />
                <input type="password" value={editUser.password} onChange={(e)=>setEditUser({...editUser,password:e.target.value})} placeholder="Password"/>
                <button type="submit" onClick={UpdateUser}>Submit</button>
                    
                </form>
                
        </div>)
        }
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