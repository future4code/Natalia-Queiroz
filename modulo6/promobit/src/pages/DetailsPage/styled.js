import styled from 'styled-components'
export const ScreenContainer = styled.div`
  display: flex;
  /* align-items: center;
  justify-content: center; */
  /* margin: 30px; */
`

export const DetailsContainer = styled.div`
 /* position: absolute; */
width: 100%;
height: 560px;
/* left: 0px; */
top: 56px;

background: #2D0C5E;
`

export const DetailsImage = styled.img`
position: absolute;
width: 383px;
height: 574px;
left: 70px;
top: 128px;

background: url(image.png);
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
border-radius: 8px;
`

export const Title = styled.p`
position: absolute;
width: 580px;
height: 38px;
left: 510px;
top: 128px;

/* Desktop/H2/Left */

/* font-family: 'Roboto';  */
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 38px;
/* identical to box height, or 119% */

display: flex;
align-items: center;
letter-spacing: -0.005em;

color: #FFFFFF;
`

export const Infos = styled.p`
position: absolute;
width: 580px;
height: 24px;
left: 510px;
top: 190px;
/* font-family: 'Roboto'; */
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 30px;
display: flex;
align-items: center;
color: #FFFFFF;`

export const Overview = styled.div`
position: absolute;
width: 580px;
height: 120px;
left: 510px;
top: 340px;
/* font-family: Roboto; */
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
display: flex;
text-align: justify;
align-items: center;
letter-spacing: -0.005em;

/* Neutral Colors / Gray / Gray 300 */

color: #DDDDDD;
`