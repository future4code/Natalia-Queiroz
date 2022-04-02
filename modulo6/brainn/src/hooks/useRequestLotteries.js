import { useEffect, useState } from 'react'
import axios from 'axios'

const useRequestLotteries = (initialLottery, url) => {
  const [lottery, setLottery] = useState(initialLottery)

  useEffect(() => {
    axios.get(url)
      .then((response) => {
        setLottery(response.data)
      })
      .catch((error) => {
        console.log(error)
        alert('Ocorreu um erro, tente novamente')
      })
  }, [url])

  return (lottery)
}

export default useRequestLotteries