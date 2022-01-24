import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Nav } from '../ui/Navbar';

const StyledH1 = styled.h1`
color: #fff;
font-size: 40px;
`

const Navbar = () => {
  return (
      <Nav>
        <StyledH1>Skills</StyledH1>
        <div>
          <Link to='/login'>Login</Link>
          <Link to='/register'>Register</Link>
        </div>

      </Nav>
    )
};

export default Navbar;


