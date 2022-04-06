import React from "react"
import { HeaderContainer, Logo } from "./styled";
import tmdb from '../../assets/tmdb.png'

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={tmdb} alt="cabeçalho" />

    </HeaderContainer>
  );
}

export default Header