import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../ui/Buttons';
import { Container, FormContent } from '../../ui/Containers';
import { ErrorMessage, Title } from '../../ui/Headings';
import { Inputs } from '../../ui/Inputs';
import { Labels } from '../../ui/Labels';
import { useAuth } from '../hooks/useAuth';

export const Login = () => {
    const navigate = useNavigate();
    const {login} = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const onEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || password.length < 8) {
            setError('Incorrect data entered')
        };
        const res = await login(email, password);
        if (res.err) {
            setError(res.err);
            console.log(res.err);
            return;
        }
        setError('null')
        navigate("/");
    }; 
    


    return (
        
        <Container>
            <Title>Login</Title>
            <form onSubmit={handleSubmit}>
                <FormContent>
                    <Labels htmlFor='email'>Email:</Labels>
                    <Inputs  name='email'onChange={onEmailChange} required />
                </FormContent>
                <FormContent>
                    <Labels htmlFor='password'>Password:</Labels>
                    <Inputs  name='password' onChange={onPasswordChange} required />
                </FormContent>
                <div style={{display: 'flex', justifyContent: 'center', margin: '10px 0'}}>
                    <Button type='submit'>Log In</Button>
                </div>

            </form>
            <ErrorMessage>{error}</ErrorMessage>
        </Container>
    )
};
