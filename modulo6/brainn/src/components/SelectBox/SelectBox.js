import React from "react"
import { SelectContainer } from "./styled"
import megaSenaSidebar from '../../assets/desktop/megaSenaSidebar.svg'
import quinaSidebar from '../../assets/desktop/quinaSidebar.svg'
import lotofacilSidebar from '../../assets/desktop/lotofacilSidebar.svg'
import lotomaniaSidebar from '../../assets/desktop/lotomaniaSidebar.svg'
import timemaniaSidebar from '../../assets/desktop/timemaniaSidebar.svg'
import diaDeSorteSidebar from '../../assets/desktop/diaDeSorteSidebar.svg'


const SelectBox = () => {

  return (
    <SelectContainer>
      <option value={megaSenaSidebar}>MEGA-SENA</option>
      <option value={quinaSidebar}>QUINA</option>
      <option value={lotofacilSidebar}>LOTOFACIL</option>
      <option value={lotomaniaSidebar}>LOTOMANIA</option>
      <option value={timemaniaSidebar}>TIMEMANIA</option>
      <option value={diaDeSorteSidebar}>DIA DE SORTE</option>
    </SelectContainer>
  )
}

export default SelectBox