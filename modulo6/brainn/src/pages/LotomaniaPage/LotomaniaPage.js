import React from 'react'
import Logo from '../../components/Logo/Logo'
import SelectBox from '../../components/SelectBox/SelectBox'
import {ContestName, SidebarContainer} from './styled'

const LotomaniaPage = () => {
    return (
        <div>
            <SidebarContainer>
                <SelectBox />
                <Logo />
                <ContestName>LOTOMANIA</ContestName>
            </SidebarContainer>
        </div>
    )
}
export default LotomaniaPage