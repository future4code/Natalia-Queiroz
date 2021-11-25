import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
    post: [
      {
        nomeUsuario: "paulinha",
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },
      {
        nomeUsuario: "natt.queiroz",
        fotoUsuario: 'https://picsum.photos/50/40',
        fotoPost: 'https://picsum.photos/200/151'
      },
      {
        nomeUsuario: "Labenu_",
        fotoUsuario: 'https://picsum.photos/50/30',
        fotoPost: 'https://picsum.photos/200/152'
      }
    ],
    nomeUser: "",
    fotoUser: "",
    postUser: ""
  }

  adicionaPessoa = () => {
    const novaPessoa = {
      nomeUsuario: this.state.nomeUser,
      fotoUsuario: this.state.fotoUser,
      fotoPost: this.state.postUser
    }
    this.setState({ 
    nomeUser: "",
    fotoUser: "",
    postUser: ""})

    const adicionarPessoa = [...this.state.post, novaPessoa]
    this.setState({post: adicionarPessoa})
  
  }
  adicionaFoto = (event) => {
    this.setState({fotoUser: event.target.value})
  }
  adicionaNome = (event) => {
    this.setState({nomeUser: event.target.value})
  }
  adicionaPost = (event) => {
    this.setState({postUser: event.target.value})
  }

  render() {
    const insta = this.state.post.map((user) => {
      return (
        <Post 
          // key = {user.nomeUsuario}
          nomeUsuario = {user.nomeUsuario}
          fotoUsuario = {user.fotoUsuario}
          fotoPost = {user.fotoPost}
        />
      )
    })

    return (
    <MainContainer>
      {insta}
      <input onChange= {this.adicionaFoto} value= {this.state.fotoUser} placeholder="Foto"/>
      <input onChange= {this.adicionaNome} value= {this.state.nomeUser} placeholder="Nome"/>
      <input onChange= {this.adicionaPost} value= {this.state.postUser} placeholder="Post"/>
      <button onClick= {this.adicionaPessoa}>Postar</button>
    </MainContainer>    
    );
  }
}

export default App;
