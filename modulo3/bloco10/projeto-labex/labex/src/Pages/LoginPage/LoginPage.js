import React from "react";
import styled from "styled-components";


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
