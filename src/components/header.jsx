//import React from "react";

import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar=styled.nav`
  background-color:yellow;
  display:flex;
  gap:10px;
  width:100%;
  display: flex;

  background-color: #FFE523;

  height: 50px;
  align-items: center;
  justify-content: center;
` 
const Select=styled.select`
  background-color:yellow;
  
`
const Header1=styled.header`
  display: flex;
    
    background-color: #1DB223;
    text-align: center;
    
    color: whitesmoke;
    height: 88px;
    position: sticky;
    top:0;
    width:100%
    
`

const Div=styled.div`
  display:flex;
  align-items:center;
  justify-conternt:center;
  flex-direction:column;
  width:100%
`



const Header = () => {
  return (
    <>
      <Header1>
        <Div>
            <h1 id="logoname">JusPlay</h1>
            <Navbar>
                      <NavLink to="/">Home</NavLink>
                      <NavLink to="/signup">SignUp</NavLink>
                      <NavLink to="/products">Products</NavLink>
                      <NavLink to="/features">Features</NavLink>
                      <NavLink to="/Login">Login</NavLink>
                      <NavLink to="/owner">Owner SignUp</NavLink>
                      <NavLink to="/ownerlogin">Owner signIn</NavLink>
                      
                     
              
              </Navbar>
        </Div>
        
        
        
      </Header1>
    </>
  );
};

export default Header;



