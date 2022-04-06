import axios from 'axios'
import BASE_URL from '../constants/BASE_URL'
import API_KEY from '../constants/API_KEY'

const getPopularMovies = () => {
    axios.get(`${BASE_URL}/movie/popular/${API_KEY}`)
    .then((response) => {
        console.log(response.data)
    }).catch((error) => {
        console.log("Deu ruim")
    })
}
export default getPopularMovies