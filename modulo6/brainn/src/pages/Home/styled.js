import styled from 'styled-components'
// import megaSenaSidebar from '../../assets/desktop/megaSenaSidebar.svg'
// import { sidebarColor } from './Home'

export const ScreenContainer = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: row;
background: rgba(239, 239, 239, 1);
`

export const SidebarContainer = styled.div`
height: 100vh;
width: 38.3125vw;
background: url(${props => props.sidebarColor}) no-repeat center center;
background-size: 100vh 100vw;
`
export const SelectContainer = styled.select`
height: 8.072132383074079vh;
width: 15.805759681266014vw;
left: 7.027818448023426vw;
top: 16.428571428571427vh;
border: 0px;
border-radius: 10px;
position: absolute;
left: 6%;
/* right: 80.51%; */
top: 8.52%;
/* bottom: 87.3%; */
`

export const LogoImg = styled.img`
height: 55.3084716796875px;
width: 59.28553771972656px;
left: 95.79315185546875px;
top: 512.041259765625px;
/* border-radius: 0px; */
position: absolute;
left: 5.99%;
/* right: 90.31%; */
top: 47.41%;
/* bottom: 47.47%; */
`
export const ContestName = styled.p`
position: absolute;
left: 11.11%;
right: 73.57%;
top: 48.43%;
bottom: 48.52%;
font-style: normal;
font-weight: 700;
font-size: 30px;
line-height: 37px;

color: #FFFFFF;
`

// height:  9.8941809802661vh;
// width:  9.292404031305104vw;
// left: 15.014600604305446vw;
// top: 91,59950979707067vh;