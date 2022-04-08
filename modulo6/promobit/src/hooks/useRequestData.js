import { useEffect, useState } from 'react'
import axios from 'axios'
import { API_KEY } from '../constants/API_KEY'

const useRequestData = (initialData, url) => {
  const [data, setData] = useState(initialData)

  useEffect(() => {
    axios.get(url, {
      headers: {
        Authorization: `${API_KEY}`
      }
    })
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.log(error)
        alert(error)
      })
  }, [url])

  return (data)
}

export default useRequestData