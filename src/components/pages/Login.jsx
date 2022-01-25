import React from 'react';
import styled from 'styled-components';
import { Button } from '../../ui/Buttons';
import Input from '../../ui/Input';

const StyledDiv = styled.div`
width: 250px;
margin: 20% auto;
align-items: center;
`
const Login = () => {
    return (
        <StyledDiv as='form'>
            <label htmlFor='email'>Email:</label>
            <Input type='email' name='email' required />
            <label htmlFor='password'>Password:</label>
            <Input type='password' name='password' required />
            <div style={{display: 'flex', justifyContent: 'center', margin: '10px 0'}}>
                <Button>Add</Button>
            </div>
        </StyledDiv>
    )
};

export default Login;
