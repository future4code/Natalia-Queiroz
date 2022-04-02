import styled from 'styled-components'
import megaSenaSidebar from '../../assets/desktop/megaSenaSidebar.svg'


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
background: url(${megaSenaSidebar}) no-repeat center center;
background-size: 100vh 100vw;
`
export const ContestName = styled.div`
height: 5.433989121061574vh;
width: 36.00135836832324vw;
left: 26.10188622831773vw;
top: 86.16748288200165vh;
border-radius: 0px;
/* font-family: Montserrat; */
font-size: 1.875rem;
font-style: normal;
font-weight: 700;
line-height: 2.3125rem;
letter-spacing: 0em;
text-align: left;
position: absolute;
left: 11.11%;
right: 73.57%;
top: 48.43%;
bottom: 48.52%;
color: #FFFFFF;
`
