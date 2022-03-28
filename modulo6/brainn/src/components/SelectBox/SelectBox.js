import React from "react"
import { SelectContainer } from "./styled"
// import {goToMegaSena, goToQuina} from '../../router/coordinator'
import { useHistory } from "react-router-dom"

const SelectBox = () => {
  const history = useHistory
  const goToPage = (history) => {
    history.push(`${screen}`)
  }
  const inputController = (event) => {
    setScreen(event.target.value)
  }
  goToPage(history)
  
  return (
    <SelectContainer onChange={inputController} value={screen}>
      <option value={'MegaSena'}>MEGA-SENA</option>
      <option value={'Quina'}>QUINA</option>
      <option value={'Lotofacil'}>LOTOFACIL</option>
      <option value={'Lotomania'}>LOTOMANIA</option>
      <option value={'Timemania'}>TIMEMANIA</option>
      <option value={'DiaDeSorte'}>DIA DE SORTE</option>
    </SelectContainer>
  )
}

export default SelectBox