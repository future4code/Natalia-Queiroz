import React from 'react';
import { useState } from 'react';
import {TelaInicial} from './componentes/TelaInicial';
import {TelaMatch} from './componentes/TelaMatch';

import styled from 'styled-components';
import axios from 'axios';


function App() {
  const [etapa, setEtapa] = useState(1);

  const mudarTela = () => {
    switch (etapa) {
      case 1: 
        return <TelaInicial
          proximaEtapa = {proximaEtapa}
        />

      case 2:
        return <TelaMatch
        proximaEtapa = {proximaEtapa}
        />

      default:
        return setEtapa(1)
    }
  }

  const proximaEtapa = () => {
        setEtapa(etapa + 1)
  }

  
  return (
    <div>
      {mudarTela()}
      
    </div>
  );
}

export default App;
