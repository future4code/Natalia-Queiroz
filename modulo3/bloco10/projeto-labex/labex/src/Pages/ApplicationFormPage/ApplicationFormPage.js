import React from "react";
import styled from "styled-components";

const Titlle = styled.h1`
color: grey;
`

const ApplicationFormConatiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Input = styled.input`
width: 400px;
height: 30px;
margin: 8px;
border-radius: 8px;
`
const Select = styled.select`
width: 410px;
height: 38px;
margin: 8px;
border-radius: 8px;
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

function ApplicationFormPage() {

  return (
    <ApplicationFormConatiner>
      <Titlle>Inscreva-se para uma viagem</Titlle>
      <Select placeholder="Escolha uma viagem">
        <option>Havana</option>
        <option>MilkWay Tour</option>
        <option>Viagem da minha vida</option>
        <option>Labenu</option>
        <option>Viagem da Labenu</option>
        <option>PLANETA VERMELHO</option>
        <option>Venus Night Out</option>
        <option>Drops of Jupter</option>
      </Select>

      <Input placeholder="Nome"/>
      <Input placeholder="Idade"/>
      <Input placeholder="Texto de candidatura"/>
      <Input placeholder="Profissão"/>

      <Select placeholder="Escolha um país"> 
        <option>Brasil</option>
        <option>Brasil</option>
        <option>Brasil</option>
        <option>Brasil</option>
        <option>Brasil</option>
        <option>Brasil</option>
        <option>Brasil</option>
        <option>Brasil</option>
        <option>Brasil</option>
      </Select>

      <ButtonsContainer>
      <Buttons>Voltar</Buttons>
      <Buttons>Enviar</Buttons>
      </ButtonsContainer>
    </ApplicationFormConatiner>
  );
}

export default ApplicationFormPage;
