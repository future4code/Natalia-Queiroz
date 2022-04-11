import React from "react"
import useRequestData from "../../hooks/useRequestData"
import { BASE_URL } from '../../constants/BASE_URL'
import { API_KEY } from "../../constants/API_KEY"
import { useParams } from "react-router-dom"
import { DetailsContainer, DetailsImage, Infos, Overview, ScreenContainer, Title } from "./styled"

const DetailsPage = () => {

  const params = useParams()

  const details = useRequestData({}, `${BASE_URL}/movie/${params.id}?api_key=${API_KEY}&language=pt-BR`)
  console.log(details)

 
  const runtime = (props) => {
    const hour = Math.floor(props.runtime / 60);
    const min = props.runtime % 60;
    const textHour = (`00${hour}`).slice(-2);
    const textMin = (`00${min}`).slice(-2);
    return `${textHour}h${textMin}m`;
  }


  return (
    <ScreenContainer>
      {details &&
        <DetailsContainer>
          <DetailsImage src={`https://image.tmdb.org/t/p/original/${details.poster_path}`} />
          <Title>{details.title}</Title>
          <Infos> | {details.release_date}(BR) | {runtime(details)} |</Infos>
          <Overview>{details.overview}</Overview>
        </DetailsContainer>}
        {/* {acting} */}
    </ScreenContainer >
  )
}

export default DetailsPage