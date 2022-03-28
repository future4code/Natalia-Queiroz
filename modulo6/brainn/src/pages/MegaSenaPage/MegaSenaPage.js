import React from 'react'
import Logo from '../../components/Logo/Logo'
import SelectBox from '../../components/SelectBox/SelectBox'
import { ContestName, SidebarContainer } from './styled'

const MegaSenaPage = () => {
        return (
            <div>
                <SidebarContainer>
                    <SelectBox />
                    <Logo />
                    <ContestName>MEGA-SENA</ContestName>
                </SidebarContainer>
            </div>
        )
}
export default MegaSenaPage