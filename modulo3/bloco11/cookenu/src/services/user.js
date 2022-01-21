import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToRecipesList } from "../routes/coordinator"

export const login = (body, clear, history) => {
    axios
        .post(`${BASE_URL}/user/login`, body)
        .then((response) => {
            localStorage.setItem("token", response.data.token)
            clear()
            goToRecipesList(history)
        })
        .catch((err) => {
            alert("Erro no login!")
        })
};

