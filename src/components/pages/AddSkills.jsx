
import { useState } from "react";
import { useNavigate} from "react-router-dom";
import { Api } from "../../services/Api";
import { Button } from "../../ui/Buttons";
import { Container, FormContent } from "../../ui/Containers";
import { Message, Title } from "../../ui/Headings";
import { Inputs } from "../../ui/Inputs";
import { Labels } from "../../ui/Labels";
import { TextArea } from "../../ui/TextArea";
import { useAuth } from "../hooks/useAuth";


export const AddSkills = () => {
    const {token} = useAuth();
    const [message, setMessage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const skills = new FormData(e.target);
            const [title, description] = skills.values();
            const skill = await Api.addSkill({ title, description}, token)
            console.log(skill);
            if(skill.err) throw new Error(skill.err)
            setMessage('Skill added succesfully');
            
        } catch (error) {
            alert(error)
        }
    }

    return (
        <Container>
            <Title>Add Skill</Title>
            <form onSubmit={handleSubmit}>
                <FormContent>
                    <Labels htmlFor='title'>Title</Labels>
                    <Inputs  name='title' required />
                </FormContent>
                <FormContent>
                    <Labels htmlFor='description'>Description</Labels>
                    <TextArea  name='description' required />
                </FormContent>
                <div style={{display: 'flex', justifyContent: 'center', margin: '10px 0'}}>
                    <Button type='submit'>Add Skill</Button>
                </div>
                <Message>{message}</Message>
            </form>
        </Container>
    )
}


