import React from 'react'
import { ContestName, SideBarContainer } from './styled'
import SelectBox from '../../components/SelectBox/SelectBox'
import Logo from '../../components/Logo/Logo'

const QuinaPage = () => {
        return (
            <SideBarContainer>
                <SelectBox />
                <Logo />
                <ContestName>QUINA</ContestName>
            </SideBarContainer>
        )
}
export default QuinaPage