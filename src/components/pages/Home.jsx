
import React, { useEffect, useState } from 'react';
import { Api } from '../../services/Api';
import { Wrapper } from '../../ui/Containers';
import { PageTitle } from '../../ui/Headings';
import { useAuth } from '../hooks/useAuth';

export const Home = () => {
    const [skills, setSkills] = useState();
    const {token} = useAuth();

    const fetchSkills = async () => {
        const res = await Api.getSkills(token);
        setSkills(res)
        console.log(res);
    };

    useEffect(() => {
        fetchSkills()
    }, []);

    if (!skills) {
        return <div>Loading...</div>
    } if (skills.length === 0) {
        <div>You don't have skills added yet !</div>
    }
    return (
        <>
        <PageTitle>Skills</PageTitle>
        <Wrapper>
            dgdsgt
        </Wrapper>
        </>
    )
}


