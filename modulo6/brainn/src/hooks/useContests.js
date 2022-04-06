import { useEffect, useState } from 'react'
import axios from 'axios'

const useContests = (initialContest, url) => {
  const [contest, setContest] = useState(initialContest)

  useEffect(() => {
    axios.get(url)
      .then((response) => {
        setContest(response.data)
      })
      .catch((error) => {
        console.log(error)
        alert('Ocorreu um erro, tente novamente')
      })
  }, [url])

  return (contest)
}

export default useContests