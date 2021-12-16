import React from "react";
import { ScreenContainer, LogoImage, SignUpButtonContainer } from "./Styled";
import logo from "../../assets/logo.png";
import LoginForm from "./LoginForm";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { goToSingUp } from "../../routes/coordinator"
import useUnprotectedPage from "../../hooks/useUnprotectedPage";



const LoginPage = () => {
    useUnprotectedPage()
    const history = useHistory()

    return (
        <ScreenContainer>
            <LogoImage src={logo} />
            <LoginForm />
            <SignUpButtonContainer>
                <Button
                    onClick={() => goToSingUp(history)}
                    type={"submit"}
                    fullWidth
                    variant={"text"}
                    color={"primary"}
                >
                    Não possui conta? Cadastre-se Aqui!
                </Button>
            </SignUpButtonContainer>
        </ScreenContainer>
    )
};

export default LoginPage;