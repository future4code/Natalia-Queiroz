import React from "react"
import { useHistory } from 'react-router-dom'
import { goToDetailsPage } from '../../router/coordinator'
import Menu from '../../components/Menu/Menu'
import MovieCard from "../../components/MovieCard/MovieCard"
import { HomePageContainer, MovieListContainer } from "./styled"
import { API_KEY } from "../../constants/API_KEY"
import { BASE_URL } from "../../constants/BASE_URL"
import useRequestData from "../../hooks/useRequestData"
import Loading from "../../components/Loading.js/Loading"

const HomePage = () => {
  const history = useHistory()

  const movies = [useRequestData([], `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`)]
  
  console.log(movies[0]) 
  let list = movies[0].results

  
  const movieList = !!list ? list.map((movie) => {
    return (
      <MovieCard
        key={movie.id}
        title={movie.title}
        image={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        release_date={movie.release_date}
        onClick={() => goToDetailsPage(history, movie.id)}
      />
    ) 
  }) : <Loading />
  console.log(movieList)

  return (
    <HomePageContainer>
      <Menu />
      <MovieListContainer>{movieList}</MovieListContainer>
      
    </HomePageContainer>
  )
}

export default HomePage