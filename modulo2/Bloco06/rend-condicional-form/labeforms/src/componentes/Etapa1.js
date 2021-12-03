import React from 'react';
import styled from 'styled-components';

export const ContainerForms = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
  gap: 10px;

  button{
    margin: 10px;
  }
`

export default class Etapa1 extends React.Component {
    render() {
        return (
            <ContainerForms>
                <h2>ETAPA 1: DADOS GERAIS</h2>
                1. Qual o seu nome?
                <input/> 
                2. Qual a sua idade?
                <input/>
                3. Qual o seu e-mail?
                <input/>
                4. Qual o seu grau de escolaridade?
                
                <select>
                    <option>Ensino médio incompleto</option>
                    <option>Ensino médio completo</option>
                    <option>Ensino superior incompleto</option>
                    <option>Ensino superior completo</option>
                </select>
            </ContainerForms>
        )
    }
}
