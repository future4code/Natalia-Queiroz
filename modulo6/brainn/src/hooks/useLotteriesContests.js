import { useEffect, useState } from 'react'
import axios from 'axios'

const useLotteriesContests = (initialLotteryContest, url) => {
  const [lotteryContest, setLotteryContest] = useState(initialLotteryContest)

  useEffect(() => {
    axios.get(url)
      .then((response) => {
        setLotteryContest(response.data)
      })
      .catch((error) => {
        console.log(error)
        alert('Ocorreu um erro, tente novamente')
      })
  }, [url])

  return (lotteryContest)
}

export default useLotteriesContests