import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Auth } from '../../services/Auth';
import { Button } from '../../ui/Buttons';
import Input from '../../ui/Input';



const StyledDiv = styled.div`
width: 250px;
margin: 20% auto;
align-items: center;
`
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

        const res = await Auth.register(email, password);
        console.log(res);
        if (res.err) {
            setError(res.err);
            return;
        }
        setError(null);
        navigate("/login");
    };
    


    return (

        <StyledDiv>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='email'>Email:</label>
                <input  name='email'onChange={onEmailChange} required />
                <label htmlFor='password'>Password:</label>
                <input  name='password' onChange={onPasswordChange} required />
                <div style={{display: 'flex', justifyContent: 'center', margin: '10px 0'}}>
                    <Button type='submit'>Add</Button>
                </div>

            </form>
            <div style={{ color: 'red'}}>{error}</div>
        </StyledDiv>
    )
};


