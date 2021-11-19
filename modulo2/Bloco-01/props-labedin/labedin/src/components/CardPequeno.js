import React from "react";
import styled from 'styled-components';


const ContainerLittleCard = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
`

const Imagem = styled.img`
width: 10%;
`

function CardPequeno (props) {
    return (
        <ContainerLittleCard>
            <Imagem src={ props.imagem } />
            <div>
                <h4>{ props.email }</h4>
            </div>
        </ContainerLittleCard>
    )
}
export default CardPequeno;