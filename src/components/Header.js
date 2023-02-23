import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { auth } from "./Login/firebase";
import SearchBar from "./homeSearch";

const Navbar = ({ displayNav }) => {
  const [isOpen, setIsOpen] = useState(displayNav || false);
  const navigate = useNavigate();

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        navigate("/login");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Bar>
      <NavBarToggle onClick={() => setIsOpen(!isOpen)}>
        <Hamburger />
      </NavBarToggle>
      <Logo href="/home">logo</Logo>
      <MainNav isOpen={isOpen}>
        <NavLi>
          <SearchBar />
        </NavLi>
        <NavLi></NavLi>
        <NavLi>
          <NavLink href="#"></NavLink>
        </NavLi>
        <NavLi>
          <NavLink onClick={handleLogout}>Logout</NavLink>
        </NavLi>
      </MainNav>
    </Bar>
  );
};

const Bar = styled.nav`
  font-size: 18px;
  position: absolute;
  width: 100vw;
  z-index: 10;
  background-image: linear-gradient(
    260deg,
    rgb(42, 244, 152, 255) 0%,
    #3498db 100%
  );
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding-bottom: 10px;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding-bottom: 0;
    height: 70px;
    align-items: center;
  }
`;

const MainNav = styled.ul`
  list-style-type: none;
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  @media (min-width: 768px) {
    display: flex !important;
    margin-right: 30px;
    flex-direction: row;
    justify-content: flex-end;
  }
`;

const NavLi = styled.li`
  text-align: center;
  margin: 15px auto;
`;

const NavLink = styled.a`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    margin: 0px 10px;
  }
`;

const Logo = styled(NavLink)`
  display: inline-block;
  font-size: 22px;
  margin-top: 10px;
  margin-left: 20px;
`;

const NavBarToggle = styled.span`
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.8);
  font-size: 24px;
`;

const Hamburger = styled.img`
  @media (min-width: 768px) {
    display: none;
  }
`;

Navbar.propTypes = {
  displayNav: PropTypes.bool,
};

export default Navbar;
