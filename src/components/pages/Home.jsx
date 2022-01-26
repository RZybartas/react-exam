
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Api } from '../../services/Api';
import { Card } from '../../ui/Card';
import { Wrapper } from '../../ui/Containers';
import { CardParagraph, CardTitle, Notification, PageTitle } from '../../ui/Headings';
import { useAuth } from '../hooks/useAuth';

export const Home = () => {
    const [skills, setSkills] = useState();
    const {id} = useParams();
    console.log(id);
    const {token} = useAuth();

    const fetchSkills = async () => {
        const res = await Api.getSkills(token);
        setSkills(res);
    
    };

    useEffect(() => {
        fetchSkills()
    }, []);

    if (!skills) {
        return <Wrapper>
            <Notification>Loading...</Notification>
            </Wrapper>
    } 
    if (skills.length === 0) {
        return <Wrapper>
            <Notification>You don't have skills added yet !</Notification>
            </Wrapper>
    }
    return (
        <>
        <PageTitle>Your Skills</PageTitle>
        <Wrapper>
            {
                skills.map((skill) => (
                    <Card key={skill.id}>
                        <CardTitle>{skill.title}</CardTitle>
                        <CardParagraph>{skill.description}</CardParagraph>
                    </Card>
                ))
            }
        </Wrapper>
        </>
    )
}


