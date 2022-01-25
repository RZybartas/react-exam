import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../ui/Buttons';
import { Container, FormContent } from '../../ui/Containers';
import { PageTitle } from '../../ui/Headings';
import { Inputs } from '../../ui/Inputs';
import { Labels } from '../../ui/Labels';
import { useAuth } from '../hooks/useAuth';

export const Login = () => {
    const navigate = useNavigate();
    const {login, error} = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) return;
        const res = await login(email, password);
        if (res.err) {
            return;
        }
        navigate("/");
    }; 
    


    return (

        <Container>
            <PageTitle>Login</PageTitle>
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
                    <Button type='submit'>Add</Button>
                </div>

            </form>
            <div style={{ color: 'red'}}>{error}</div>
        </Container>
    )
};
