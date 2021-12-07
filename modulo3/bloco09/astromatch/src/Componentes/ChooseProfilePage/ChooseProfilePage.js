import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import ProfileCard from "./ProfileCard";
import ChooseButtons from "./ChooseButtons";

function ChooseProfilePage() {
    const [profileToChoose, setProfileToChoose] = useState(undefined);

    const getProfileToChoose = () => {
        axios
            .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person", {
                Headers: {
                    "Authorization": "natalia-queiroz-carver"
                }
            })
            .then((profile) => {
                setProfileToChoose(profile)
            })
        };

    const chooseProfile = (choice) => {
        const body = {
            choice: choice,
            id: profileToChoose.id
        }
        axios
            .post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person", body
            )
                getProfileToChoose()
            }
    
 
    useEffect(() => {
        getProfileToChoose()
    }, []);

    const onClickNo = () => {
        chooseProfile(false)
    };

    const onClickYes = () => {
        chooseProfile(true)
    };


    return (
        <div>
            {profileToChoose ?
                (<>
                    <ProfileCard profile={profileToChoose} />
                    <ChooseButtons onClickNo={onClickNo} onClickYes={onClickYes} />
                </>) : <p>Carregando...</p>
            }
        </div>
    )
};

export default ChooseProfilePage;