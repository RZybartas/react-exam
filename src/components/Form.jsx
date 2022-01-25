import React from 'react';
import Input from '../ui/Input';

const Form = () => {
    return (
        <form>
            <Input type='email' name='email' required />
            <Input type='password' name='password' required />
        </form>
    )
};

export default Form;
