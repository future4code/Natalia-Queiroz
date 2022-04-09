import React from "react"
import useRequestDetails from "../../hooks/useRequestDetails"
import { BASE_URL } from '../../constants/BASE_URL'
import { API_KEY } from "../../constants/API_KEY"
import { useParams } from "react-router-dom"

const DetailsPage = () => {

  const params = useParams()

  const details = useRequestDetails([], `${BASE_URL}/movie/${params.id}?api_key=${API_KEY}&language=pt-BR`)
  console.log(details)

  

  return (
    <div>
      DetailsPage
    </div>
  );
}

export default DetailsPage