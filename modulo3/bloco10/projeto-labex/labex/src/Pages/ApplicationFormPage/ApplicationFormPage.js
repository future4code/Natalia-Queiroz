import React from "react";



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
