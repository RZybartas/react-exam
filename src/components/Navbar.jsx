import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../ui/Logo';


const Nav = styled.nav`
background-color: #2980b9;
height: 5rem;
display: flex;
justify-content: space-between;
align-items: center;
`
const StyledLink = styled(Link)`
color: #fff;
font-size: 25px;
margin-right: 30px;
text-decoration: none;
`



const Navbar = () => {
  return (
      <Nav>
        <Logo />
        <div>
          <StyledLink to='/login' >Login</StyledLink>
          <StyledLink to='/register'>Register</StyledLink>
        </div>

      </Nav>
    )
};

export default Navbar;


