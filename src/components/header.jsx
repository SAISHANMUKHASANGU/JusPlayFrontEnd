import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";

// Styled components for Header (Large Screens)
const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color:#0f172a;

  color: whitesmoke;
  height: auto;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    display: none;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 10px;

  #logoname {
    font-size: 2rem;
    font-weight: bold;
    color: #ffe523;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
`;

const Navbar = styled.nav`
  display: flex;
  gap: 20px;
  justify-content: center;
  padding: 10px 0;

  a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
    padding: 8px 15px;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
    color:white;

    &:hover {
      background-color: #fff;
      color:rgb(29, 146, 178);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    }

    &.active {
      color:rgb(29, 36, 178);
      background-color: #fff;
      border:none;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

// Styled components for Hamburger Button
const Hamburger = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: #0f172a; /* Blue gradient */
    color: #fff;
    padding: 15px 30px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;

    .menu-icon {
      font-size: 2.5rem;
      color: #fff;
      cursor: pointer;
      margin-left: auto;
      margin-right: 15px;
      transition: color 0.3s ease-in-out;

      &:hover {
        color:rgb(0, 103, 246); /* Smooth highlight */
      }
    }

    #logoname {
      font-size: 1.8rem;
      font-weight: bold;
      color:yellow;
      margin: 0;
    }
  }
`;



// Styled components for Sidebar
const Sidebar = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  width: auto;
  height: 100vh;
  background: #0f172a; /* Nice blue gradient */
  color:rgb(16, 60, 255); /* Green for text */
  box-shadow: -6px 0 20px rgba(0, 0, 0, 0.3);
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.4s ease-in-out;
  z-index: 2000; /* Higher than header */

  .close-icon {
    font-size: 2rem;
    position: absolute;
    top: 15px;
    right: 15px;
    color:rgb(17, 54, 45); /* Green close icon */
    cursor: pointer;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: rgb(87, 241, 241); /* Highlight on hover */
    }
  }

  ul {
    list-style: none;
    padding: 30px 20px;
    margin: 0;
    margin-top: 60px; /* Adjust to account for the close icon */
  }

  li {
    margin: 20px 0;

    a {
      color:white; /* Green for links */
      text-decoration: none;
      font-size: 1.5rem;
      font-weight: bold;
      transition: color 0.3s ease-in-out;

      &:hover {
        color: rgb(255, 255, 255); /* Highlight text on hover */
        background: linear-gradient(135deg,rgb(4, 15, 221),rgb(111, 12, 225)); 
        border-radius: 25px;
        padding: 8px 15px;
      }
    }
  }
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Header for Large Screens */}
      <HeaderContainer>
        <HeaderContent>
          <h1 id="logoname" style={{textAlign:'center'}}>JusPlay</h1>
          <Navbar>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/signup">SignUp</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/features">Features</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/owner">Owner SignUp</NavLink>
            <NavLink to="/ownerlogin">Owner SignIn</NavLink>
          </Navbar>
        </HeaderContent>
      </HeaderContainer>

      {/* Hamburger Menu for Small Screens */}
      <Hamburger>
        <h1 id="logoname">JusPlay</h1>
        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </Hamburger>

      <Sidebar open={menuOpen}>
       <div
        className="close-icon"
        onClick={() => setMenuOpen(false)}
      >
        <FaTimes />
      </div>
      <ul>
        <li>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/signup" onClick={() => setMenuOpen(false)}>SignUp</NavLink>
        </li>
        <li>
          <NavLink to="/products" onClick={() => setMenuOpen(false)}>Products</NavLink>
        </li>
        <li>
          <NavLink to="/features" onClick={() => setMenuOpen(false)}>Features</NavLink>
        </li>
        <li>
          <NavLink to="/login" onClick={() => setMenuOpen(false)}>Login</NavLink>
        </li>
        <li>
          <NavLink to="/owner" onClick={() => setMenuOpen(false)}>Owner SignUp</NavLink>
        </li>
        <li>
          <NavLink to="/ownerlogin" onClick={() => setMenuOpen(false)}>Owner SignIn</NavLink>
        </li>
      </ul>
      </Sidebar>  
    </>
  );
};

export default Header;
