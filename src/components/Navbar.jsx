import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { NavButtons } from '../ui/Buttons';
import { NavContainer } from '../ui/Containers';
import Logo from '../ui/Logo';
import { useAuth } from './hooks/useAuth';


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
    const auth = useAuth();

    const buttons = auth.token ? (
        <div>

                <StyledLink to='/' >Home</StyledLink>
                <StyledLink to='/add'>Add Skills</StyledLink>

            

                <NavButtons onClick={() => auth.logout()}>Logout</NavButtons>
        </div>
    ) : (
        <div>
            <StyledLink to='/login'>Login</StyledLink>
            <StyledLink to='/register'>Register</StyledLink>
        </div>
    )
    return (
        <Nav>
            <NavContainer>
                <Logo />
                <div>
                    {buttons}
                </div>
            </NavContainer>
        </Nav>
    )
};

export default Navbar;


