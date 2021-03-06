import React from "react";
import { InputsContainer } from "./Styled";
import { TextField } from "@material-ui/core";
import useForm from "../../hooks/useForm";
import { Button } from "@material-ui/core";


const LoginForm = () => {
    const [form, onChange, clear] = useForm({ name: "", email: "", password: "" })
    const onSubmitForm = (event) => {
        console.log(form)
        event.preventDefault()
    }

    return (
            <InputsContainer>
                <form onSubmit={onSubmitForm}>
                <TextField
                        name={"name"}
                        value={form.name}
                        onChange={onChange}
                        label={"Nome"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                    />

                    <TextField
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        label={"E-mail"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"email"}
                    />

                    <TextField
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        label={"Senha"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"password"}
                    />

                    <Button
                        type={"submit"}
                        fullWidth
                        variant={"contained"}
                        color={"primary"}
                    >
                        Fazer cadastro
                    </Button>
                </form>
            </InputsContainer>
            
    )
};

export default LoginForm;