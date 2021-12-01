import React from "react";

function TelaMatch(props) {
    return (
        <div>
            <button onClick = {props.proximaEtapa}>Ir pra tela inicial</button>
            Tela de match
        </div>
    )
}

export {TelaMatch};