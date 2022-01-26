import styled from "styled-components";

export const Container = styled.div`
width: 280px;
height: 300px;
margin: 20% auto;
align-items: center;
background-color: #2980b9;
border-radius: 20px;
`

export const FormContent = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 10px;
`

export const NavContainer = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`

export const Wrapper = styled.div`
width: 80%;
margin: 40px auto;
background-color: #2980b9;
height: 100vh;
border-radius: 30px;
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 10px;
justify-items: center;

`
