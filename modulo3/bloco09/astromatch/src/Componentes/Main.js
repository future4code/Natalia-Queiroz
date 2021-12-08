import React, { useState } from "react";
import AppBar from "./AppBar";
import ChooseProfilePage from "./ChooseProfilePage/ChooseProfilePage";
import MatchListPage from "./MatchListPage/MatchListPage";
import styled from "styled-components";


 
const ConatinerMain = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    border-radius: 5px;
    margin: auto;
    width: 400px;
    height: 600px;
`

function Main() {
    const [selectedPage, setSelectedPage] = useState(1)

    const renderSelectedPage = () => {
        switch (selectedPage) {
            case 1:
                return <ChooseProfilePage />

            case 2:
                return <MatchListPage />

            default:
                return 1
        }
    };

    const goToChooseProfilePage = () => {
        setSelectedPage(1)
    };

    const goToMatchListPage = () => {
        setSelectedPage(2)
    };

    return (
        <ConatinerMain>

            <AppBar
                goToChooseProfilePage={goToChooseProfilePage}
                goToMatchListPage={goToMatchListPage}
            />
            {renderSelectedPage()}

        </ConatinerMain>
    )
};

export default Main;