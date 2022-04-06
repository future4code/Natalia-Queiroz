import React from "react";
import Header from '../../components/Header/Header'
import Menu from '../../components/Menu/Menu'
import { PageContainer } from "./styled";

const HomePage = () => {
  return (
    <PageContainer>
      <Menu />
      <div>MovieCards</div>
    </PageContainer>
  );
}

export default HomePage;