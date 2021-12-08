import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import MatchListItem from "./MatchListItem";

const ListContainer = styled.div`
padding: 8px;
`
function MatchListPage() {
    const [matches, setMatches] = useState([
        {
            "id": "71gMbZs2txS9LDvGK5Ew",
            "age": 26,
            "name": "Anitta",
            "photo": "https://images.outgo.com.br/clients/1/events/2923/Anitta-Perfil-4-1.png",
            "bio": "Amo cachorros e sair para dançar. Procuro alguém animado e sem neuras."
          }
    ]);

    useEffect(() => {
        axios
        .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/matches", {
            headers: {
                "Authorization": "natalia-queiroz-carver" 
            }
        })
        .then((response) => {
            setMatches(response.data.matches)
        })
    }, []);


    return ( 
        <ListContainer>
            {matches.map((profile) => {
                return <MatchListItem profile={profile}/>
            })}
        </ListContainer>
    )
};

export default MatchListPage;