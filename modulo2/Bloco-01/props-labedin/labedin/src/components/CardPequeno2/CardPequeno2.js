import React from 'react';
import styled from 'styled-components';


const Imagem = styled.img`
    width: 10%;
`

const ContainerLittleCard = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
`

function CardPequeno2 (props) {
    return (
        <ContainerLittleCard>
            <Imagem src={ props.imagem }/>
            <div>
                <h4>{ props.endereco }</h4>
            </div>
        </ContainerLittleCard>
    )
}
export default CardPequeno2;