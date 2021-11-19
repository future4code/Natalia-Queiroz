import React from 'react';
import {createGlobalStyle} from 'styled-components';
import styled from 'styled-components';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import NAT from './img/NAT.png';
import email1600 from './img/email1600.png';
import local from './img/local.png';
import CardPequeno2 from './components/CardPequeno2/CardPequeno2';


const GlobalStyle = createGlobalStyle`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`
const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`
const  PageSection = styled.div`
  width: 40vw;
  margin: 10px 0;
` 
const TituloDasSessoes = styled.h2`
display: flex;
justify-content: center;
margin-bottom: 20px;
`


function App() {
  return (
    <>
    <GlobalStyle/>
      <StyledApp>
        <PageSection>
          <TituloDasSessoes>Dados pessoais</TituloDasSessoes>
          <div>
            <CardGrande
              imagem={NAT}
              nome="Natália Dias Queiroz"
              descricao="Oi, eu sou a Natália. Sou estudante Web Full Stack da Labenu. Pretendendo me tornar no va grande descoberta do mundo da programação ."
            />
          </div>

          <ImagemButton
            imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
            texto="Ver mais"
          />
        </PageSection>

        <PageSection>
          <CardPequeno
            imagem={email1600}
            email="nat.diasqueiroz@gmail.com"
          />
        </PageSection>

        <PageSection>
          <CardPequeno2
            imagem={local}
            endereco="Rua B, 28, Itapuã, Unaí-MG"
          />
        </PageSection>

        <PageSection>
          <TituloDasSessoes>Experiências profissionais</TituloDasSessoes>
          <CardGrande
            imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
            nome="Labenu"
            descricao="Aprendiz do Astrodev"
          />

          <CardGrande
            imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg"
            nome="NASA"
            descricao="Apontando defeitos."
          />
        </PageSection>

        <PageSection>
          <TituloDasSessoes>Minhas redes sociais</TituloDasSessoes>
          <ImagemButton
            imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
            texto="Facebook"
          />

          <ImagemButton
            imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
            texto="Twitter"
          />
        </PageSection>
      </StyledApp>
    </>
  );
}

export default App;
