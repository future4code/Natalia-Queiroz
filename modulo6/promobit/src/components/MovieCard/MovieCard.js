import React from "react"
import { MovieCardContainer, MovieImage, Title, ReleaseDate } from "./styled"

const MovieCard = (props) => {
  return (
    <MovieCardContainer onClick={props.onClick} >
      <MovieImage src={props.image} alt='poster' className="scale"/>   
        <Title >{props.title}</Title>   
        <ReleaseDate>{props.release_date}</ReleaseDate>        
    </MovieCardContainer>
  )
}
export default MovieCard



// import React from 'react'
// import CardActionArea from '@material-ui/core/CardActionArea'
// import CardMedia from '@material-ui/core/CardMedia'
// import Typography from '@material-ui/core/Typography'
// import { MovieCardContainer, MovieCardContent } from './styled'

// const MovieCard = (props) => {

//   return (
//     <MovieCardContainer onClick={props.onClick}>
//       <CardActionArea>
//         <CardMedia
//           key={props.id}
//           title={props.title}
//           component={'img'}
//           image={props.image}
//           alt={props.title}
//           // height={'150px'}
//         />
        
//       </CardActionArea>
//       <MovieCardContent>
//           <Typography align={'center'}>
//             {props.title}
//           </Typography>
//         </MovieCardContent>
//     </MovieCardContainer>
//   )
// }

// export default MovieCard

