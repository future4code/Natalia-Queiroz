import React from "react";
import styled from 'styled-components';



const ContainerApp = styled.div`
display: flex;
flex-direction: column;
width: 400px;
height: 500px;
border: 2px solid black;
`



function App() {

  return (
    <Global> 
      <ContainerApp>

      </ContainerApp>
    </Global>


  );
}

export default App;
