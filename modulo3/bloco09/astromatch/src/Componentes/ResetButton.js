import axios from "axios";
import React from "react";

function ResetButton () {
    const onCLickReset = () => {
        axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/clear", {
            Headers: {
                "Authorization": "natalia-queiroz-carver"
            }
        })
    }
    return (
        <div>
            <button onClick={onCLickReset()}>Reset Matches</button>
        </div>
    )
};

export default ResetButton;