import React from 'react'
import Logo from '../../components/Logo/Logo'
import SelectBox from '../../components/SelectBox/SelectBox'
import useRequestData from '../../hooks/useRequestData'
import { ScreenContainer, SidebarContainer } from './styled'
import { BASE_URL } from '../../constants/urls'

const MegaSenaPage = () => {
    const result = useRequestData([], `${BASE_URL}/loterias`)
    console.log(result)

    const contest = result.map((result) => {
        return <p>{result.name}</p>
    })
        return (
            <ScreenContainer>
                <SidebarContainer>
                    <SelectBox />
                    <Logo />
                </SidebarContainer>
                
            </ScreenContainer>
        )
}
export default MegaSenaPage