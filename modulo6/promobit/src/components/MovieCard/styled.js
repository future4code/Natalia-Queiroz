import styled from 'styled-components'

export const MovieCardContainer = styled.button`
    border: none;
    max-width: 200px;
    margin-left: 10%;
    margin-bottom: 15%;
    transition: all 0.5s;
    cursor: pointer;
    .scale:hover {
        -webkit-transform: scale(1.5);
        transform: scale(1.5);  
    }
 `
export const Title = styled.p`
   
    width: 176px;
   /* align-items: center; */
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    justify-content: space-around;
    color: #000000;
    
`
export const ReleaseDate = styled.p`
    width: 176px;   
    margin-top: -12px;
    font-size: 14px;
    line-height: 24px;
    display: flex;
    justify-content: space-around;
    color: #000000;
`

export const MovieImage = styled.img`
    width: 176px;
    height: 264px;
    left: 112px;
    top: 534px;

    background: url(image.png);
    border: 1px solid #E7E7E7;
    box-sizing: border-box;
    border-radius: 6px;
    `

export const Infos = styled.div`
height: 65px;
`

// import styled from 'styled-components'
// import Card from '@material-ui/core/Card'
// import CardContent from '@material-ui/core/CardContent'

// export const MovieCardContainer = styled(Card)`
//   width: 250px;
//   height: 300px ;
//   margin: 15px
// `

// export const MovieCardContent = styled(CardContent)`
//   margin-top: 100px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 40px;
// `