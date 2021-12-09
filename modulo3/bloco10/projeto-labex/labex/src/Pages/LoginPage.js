import React from "react";
import styled from "styled-components";

const LoginContainer = styled.div`
display: flex;
flex-direction: column;
margin: auto;
margin-top: 250px;
max-width: 405px;
gap: 8px;
`
const Inputs = styled.input`
width: 400px;
height: 30px;
`
const ButtonsContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
width: 410px;
height: 50px;
`
const Buttons = styled.button`
border-radius: 15px;
width: 100px;
height: 40px;
background-color: lightblue;
`
const Tittle = styled.h1`
margin: auto;

`
function LoginPage() {
  return (
    <LoginContainer>  
        <Tittle>Login</Tittle>
        <Inputs type="email" placeholder="E-mail" />
        <Inputs type="password" placeholder="Senha" />
      
      <ButtonsContainer>
        <Buttons>Voltar</Buttons>
        <Buttons>Entrar</Buttons>
      </ButtonsContainer>
    </LoginContainer>
  );
}

export default LoginPage;
