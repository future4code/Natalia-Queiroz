import React from 'react';
import { ContainerForms } from './Etapa1';

export default class Etapa3 extends React.Component {
    render() {
        return (
            <ContainerForms>
                <h2>ETAPA 3:  INFORMAÇÕES GERAIS DE ENSINO</h2>
                5. Por que você não terminou um curso de graduação?
                <input />
                6. Você fez algum curso complementar?
                <select>
                    <option>Nenhum</option>
                    <option>Curso técnico</option>
                    <option>Curso de inglês</option>
                </select>
            </ContainerForms>
        )
    }
}