import React, { useState } from "react";
import { ContestName, ScreenContainer, SidebarContainer } from './styled'
import megaSenaSidebar from '../../assets/desktop/megaSenaSidebar.svg'
import quinaSidebar from '../../assets/desktop/quinaSidebar.svg'
import lotofacilSidebar from '../../assets/desktop/lotofacilSidebar.svg'
import lotomaniaSidebar from '../../assets/desktop/lotomaniaSidebar.svg'
import timemaniaSidebar from '../../assets/desktop/timemaniaSidebar.svg'
import diaDeSorteSidebar from '../../assets/desktop/diaDeSorteSidebar.svg'
import path2 from '../../assets/logo/path2.png'
import path3 from '../../assets/logo/path3.png'
import { LogoImg, SelectContainer } from './styled'
import useRequestLotteries from "../../hooks/useRequestLotteries"
import { BASE_URL } from "../../constants/urls"
import useLotteriesContests from "../../hooks/useLotteriesContests";
import useContests from "../../hooks/useContests";


// export const sidebarColor = megaSenaSidebar

export const Home = () => {
    const [sidebar, setSidebar] = useState(megaSenaSidebar)
    
    const lottery = useRequestLotteries([], `${BASE_URL}/loterias`)
    console.log(lottery)
    const [chooseLottery, setChooseLottery] = useState(lottery[0])
    console.log(chooseLottery)

    const lotteryContest = useLotteriesContests([], `${BASE_URL}/loterias-concursos`)
    console.log(lotteryContest)
    const [chooseLotteryContest, setChooseLotteryContest] = useState()

    const contest = useContests([], `${BASE_URL}/concursos/2200`)
    console.log(contest)
    const [chooseContest, setChooseContest] = useState()

    const onChangeSelect = (event) => {
        setSidebar(event.target.value)
    }

    return (
        <ScreenContainer>
            <SidebarContainer
                sidebarColor={sidebar}>
                <SelectContainer onChange={onChangeSelect}>
                    <option value={megaSenaSidebar}>MEGA-SENA</option>
                    <option value={quinaSidebar}>QUINA</option>
                    <option value={lotofacilSidebar}>LOTOFACIL</option>
                    <option value={lotomaniaSidebar}>LOTOMANIA</option>
                    <option value={timemaniaSidebar}>TIMEMANIA</option>
                    <option value={diaDeSorteSidebar}>DIA DE SORTE</option>
                </SelectContainer>

                <LogoImg src={path2} alt="Logo" />
                <LogoImg src={path3} alt="Logo" />

                <ContestName>{lottery.nome}</ContestName>
                <p>{contest.numeros}</p>
            </SidebarContainer>

        </ScreenContainer>
    )
}
