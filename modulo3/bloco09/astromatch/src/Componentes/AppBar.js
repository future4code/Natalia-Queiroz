import React from "react";
import styled from "styled-components";

const AppBarContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
border-bottom: 1px solid lightgray;
padding: 0 10px;
`

function AppBar (props) {
    return (
        <AppBarContainer>
            <button onClick={props.goToChooseProfilePage}>Dar matches</button>
            <p>Astromach</p>
            <button onClick={props.goToMatcheListPage}>Meus Matches</button>
        </AppBarContainer>
    )
};

export default AppBar;