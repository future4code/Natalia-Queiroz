import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";


function TelaInicial(props) {

    const [perfil, setPerfil] = useState({});

    const pegarPerfil = () => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person"
        axios
            .get(url, {
                headers: {
                    Authorization: "Natalia-Queiroz-Carver"
                }
            })

            .then((resposta) => {
                setPerfil({ perfil: resposta.data })
                alert("Perfil buscado com sucesso!")
            })

            .catch((erro) => {
                console.log(erro.response.data)
                alert("Ocorreu um erro!")
            })
    };




    return (
    
            <div>
                <header>
                    <button onClick={pegarPerfil}>buscar perfil</button>
                    <button onClick={props.proximaEtapa}>Ir pra tela de match</button>
                    Tela de inicio
                </header>
                <body>
                    <img />
                </body>
                <footer>
                    <button>Limpar dados</button>
                </footer>
            </div>
        
    )
}

export { TelaInicial };