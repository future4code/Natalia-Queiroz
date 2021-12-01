import React, { useState } from "react";
import "./styles.css";
import axios from "axios";
import { useEffect } from 'react';
import PokeCard from "./Componentes/PokeCard";

function App() {
  const [pokeList, setPokeList] = useState([])
  const [pokeName, setPokeName] = useState("")
  
  const getPoke = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=151`)

    .then((response) => {
      setPokeList({pokeList: response.data.results})
    })

    .catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    getPoke()
  }, [])

  const changePokeName = (event) => {
    setPokeName(event.target.value);
  };
 
  const lista = pokeList.pokeList || []
  console.log(lista)
  return (
    <div className="App">
      
      <select onChange={changePokeName}>
        <option value={""}>Nenhum</option>
        
        {lista.map((pokemon) => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          );
        })}
      </select>
      
      {pokeName && <PokeCard pokemon={pokeName} />}
    </div>
  );
}


export default App;

