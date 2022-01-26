
import { useParams } from "react-router-dom"
import { Api } from "../../services/Api"
import { Button } from "../../ui/Buttons"
import { Container, FormContent } from "../../ui/Containers"
import { Title } from "../../ui/Headings"
import { Inputs } from "../../ui/Inputs"
import { Labels } from "../../ui/Labels"
import { useAuth } from "../hooks/useAuth"


export const AddSkills = () => {
    const {id} = useParams();
    const token = useAuth()
    console.log(id);


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const skills = new FormData(e.target);
            const [title, description] = skills.values();
            console.log(title, description);
            const skill = await Api.addSkill({id, title, description}, token)
            if(skill.err) throw new Error(skill.err)
            alert('added new skill')
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
                    <textarea  name='description' required />
                </FormContent>
                <div style={{display: 'flex', justifyContent: 'center', margin: '10px 0'}}>
                    <Button type='submit'>Add Skill</Button>
                </div>

            </form>
            {/* <div style={{ color: 'red'}}>{error}</div> */}
        </Container>
    )
}


