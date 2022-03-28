import React from 'react'
import SelectBox from '../../components/SelectBox/SelectBox'
import {ContestName, SidebarContainer} from './styled'
import Logo from '../../components/Logo/Logo'
const DiaDeSortePage = () => {
    return (
        <div>
            <SidebarContainer>
                <SelectBox />
                <Logo />
                <ContestName>DIA DE SORTE</ContestName>
            </SidebarContainer>
        </div>
    )
}
export default DiaDeSortePage