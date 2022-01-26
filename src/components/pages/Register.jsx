import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Api } from '../../services/Api';
import { Button } from '../../ui/Buttons';
import { Container, FormContent } from '../../ui/Containers';

import { Title } from '../../ui/Headings';
import { Inputs } from '../../ui/Inputs';
import { Labels } from '../../ui/Labels';


export const Register = () => {
    const navigate = useNavigate();
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
        if (!email || !password) return;

        const res = await Api.register(email, password);
        console.log(res);
        if (res.err) {
            setError(res.err);
            return;
        }
        setError(null);
        navigate("/login");
    };
    


    return (

        <Container>
            <Title>Sign Up</Title>
            <form onSubmit={handleSubmit}>
                <FormContent>
                    <Labels htmlFor='email'>Email:</Labels>
                    <Inputs name='email'onChange={onEmailChange} required />
                </FormContent>
                <FormContent>
                <Labels htmlFor='password'>Password:</Labels>
                <Inputs name='password' onChange={onPasswordChange} required />
                </FormContent>

                <div style={{display: 'flex', justifyContent: 'center', margin: '10px 0'}}>
                    <Button type='submit'>Sign Up</Button>
                </div>

            </form>
            <div style={{ color: 'red'}}>{error}</div>
        </Container>
    )
};


