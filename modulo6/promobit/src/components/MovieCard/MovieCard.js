import React from "react"
import { MovieCardContainer } from "./styled"

const MovieCard = (props) => {
  return (
    <MovieCardContainer onClick={props.onClick}>
      <img src={props.image}/>
      <div>
        <h3>{props.title}</h3>
        <p>{props.release_date}</p>
      </div>
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
//           // component={'img'}
//           image={props.image}
//           alt={props.title}
//           height={'150px'}
//         />
//         <MovieCardContent>
//           <Typography align={'center'}>
//             {props.title}
//           </Typography>
//         </MovieCardContent>
//       </CardActionArea>
//     </MovieCardContainer>
//   )
// }

// export default MovieCard

