import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { userConsumer } from "../context/UserContext";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #0f172a;
  color: #fff;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Hamburger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 25px;
  height: 20px;
  background: none;
  border: none;
  cursor: pointer;
  span {
    display: block;
    height: 3px;
    width: 100%;
    background-color: white;
    border-radius: 3px;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }
  &.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }
  &.active span:nth-child(2) {
    opacity: 0;
  }
  &.active span:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: auto;
`;

const Logo = styled.img`
  height: 40px;
  width: 40px;
`;

const LogoName = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavOverlay = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
  transition: opacity 0.3s ease;
  &.open {
    display: block;
  }
`;

const NavMenu = styled.nav`
  display: none;
  position: absolute;
  top: 50px;
  left: 20px;
  background: #0f172a;
  border-radius: 8px;
  padding: 10px 20px;
  z-index: 999;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  &.open {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  margin: 10px 0;
`;

const NavLinkStyled = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;
  &:hover,
  &.active-link {
    color: #1d9bf0;
    font-weight: bold;
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

const UserHeader = () => {
  const {login,setLogin}=userConsumer()
  const navigate=useNavigate()
  // const logout=async ()=>{
  //   navigate("/Login")
  //   setLogin("false")
  //   console.log(login)


  //   localStorage.setItem('logins',false)
  // }

  

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  return (
    <HeaderWrapper>
      <HeaderContainer>
        {/* Hamburger Icon */}
        <Hamburger
          className={menuOpen ? "active" : ""}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </Hamburger>
        {/* {login==="true"&&<LogoutButton onClick={logout}>Logout</LogoutButton>} */}

        {/* Logo and Title */}
        <LogoContainer>
          <Logo src="./images/logo.jpg" alt="JusPlay Logo" />
          <LogoName>JusPlay</LogoName>
        </LogoContainer>
      </HeaderContainer>

      {/* Overlay */}
      <NavOverlay
        className={menuOpen ? "open" : ""}
        onClick={() => setMenuOpen(false)}
      ></NavOverlay>

      {/* Navigation Menu */}
      <NavMenu className={menuOpen ? "open" : ""}>
        <NavList>
          <NavItem>
            <NavLinkStyled
              to="/"
              onClick={() => setMenuOpen(false) }
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Home
            </NavLinkStyled>
          </NavItem>
          
          <NavItem>
            <NavLinkStyled
              to="/products"
              onClick={() => setMenuOpen(false) }
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Products
            </NavLinkStyled>
          </NavItem>
          
          {/* <NavItem>
            <NavLinkStyled
              to="/features"
              onClick={() => setMenuOpen(false) }
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Features
            </NavLinkStyled>
          </NavItem> */}
          <NavItem>
            <NavLinkStyled
              to="/user"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              UserProfile
            </NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled
              to="/dashboard"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Dashboard
            </NavLinkStyled>
          </NavItem>
          
          <NavItem>
            <NavLinkStyled
              to="/bookings"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Bookings
            </NavLinkStyled>
          </NavItem>
          {/* <NavItem>
            <NavLinkStyled
              to="/owner"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              OwnerSignup
            </NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled
              to="/ownerlogin"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              OwnerLogin
            </NavLinkStyled>
          </NavItem> */}
          <NavItem>
            <NavLinkStyled
              to="/ownerdashboard"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              OwnerDashboard
            </NavLinkStyled>
          </NavItem>
          
          
        </NavList>
      </NavMenu>
    </HeaderWrapper>
  );
};

export default UserHeader;
