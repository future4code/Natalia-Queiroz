import React from "react";
import styled from "styled-components";

const ButtonsContainer = styled.div`
border: 1px solid green;
display: flex;
flex-direction: row;
justify-content: space-around;
`
const Button = styled.button`
border-radius: 100%;
width: 45px;
height: 45px;
`

function ChooseButtons (props) {
        
    return (
        <ButtonsContainer>
            <Button onClick={props.onClickNo}>NÃO</Button>
            <Button onClick={props.onClickYes}>SIM</Button>
        
        </ButtonsContainer>
    )
};

export default ChooseButtons;