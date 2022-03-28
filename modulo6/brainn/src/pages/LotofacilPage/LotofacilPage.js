import React from 'react'
import Logo from '../../components/Logo/Logo'
import SelectBox from '../../components/SelectBox/SelectBox'
import {ContestName, SidebarContainer} from './styled'

const LotafacilPage = () => {
    return (
        <div>
            <SidebarContainer>
                <SelectBox />
                <Logo />
                <ContestName>LOTOFACIL</ContestName>
            </SidebarContainer>
        </div>
    )
}
export default LotafacilPage