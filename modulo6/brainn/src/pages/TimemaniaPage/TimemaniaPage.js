import React from 'react'
import Logo from '../../components/Logo/Logo'
import SelectBox from '../../components/SelectBox/SelectBox'
import {ContestName, SidebarContainer} from './styled'

const TimemaniaPage = () => {
        return (
            <div>
                <SidebarContainer>
                    <SelectBox />
                    <Logo />
                    <ContestName>TIMEMANIA</ContestName>
                </SidebarContainer>
            </div>
        )
}
export default TimemaniaPage