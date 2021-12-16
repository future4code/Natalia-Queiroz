import React from "react";
import { ScreenContainer, LogoImage } from "./Styled";
import logo from "../../assets/logo.png";
import SingUpForm from "./SingUpForm";
import useUnprotectedPage from "../../hooks/useUnprotectedPage"


const SingUpPage = () => {
    useUnprotectedPage()
    return (
        <ScreenContainer>
            <LogoImage src={logo} />
            <SingUpForm />
        </ScreenContainer>
    )
};

export default SingUpPage;