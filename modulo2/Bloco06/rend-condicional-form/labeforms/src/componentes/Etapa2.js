import React from 'react';
import { ContainerForms } from './Etapa1';

export default class Etapa2 extends React.Component {
    render() {
        return (
            <ContainerForms>
                <h2>ETAPA 2: INFORMAÇÕES DO ENSINO SUPERIOR</h2>
                5. Qual curso?
                <input/>
                6. Qual a unidade de ensino?
                <input/>
            </ContainerForms>
        )
    }
}