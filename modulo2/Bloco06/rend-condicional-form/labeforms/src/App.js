import React from 'react';
import Etapa1 from './componentes/Etapa1';
import Etapa2 from './componentes/Etapa2';
import Etapa3 from './componentes/Etapa3';
import Final from './componentes/Final';
import { ContainerForms } from './componentes/Etapa1';


class App extends React.Component {
  state = {
    home: 1, 
  }

  onClickButton = () => {
      this.setState({home: this.state.home + 1})
      console.log(this.state)
  }

  mudaEtapa = () => {
    switch (this.state.home) {
      case 1:
        return <Etapa1/>        
      
      case 2: 
        return <Etapa2/>

      case 3: 
        return <Etapa3/>

      case 4:
        return <Final/>
      
      default: 
        this.setState({home: 1})
    }
  }

  render() {

    return (
      <ContainerForms>
      {this.mudaEtapa()}
      <button onClick = {this.onClickButton}>Próxima etapa</button>
      </ContainerForms>
    )
  }
}

export default App;