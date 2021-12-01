import React, { useState } from "react";
import axios from "axios";
import {useEffect} from 'react';

function PokeCard (props) {
    const [pokemon, setPokemon] = useState({})
  
    const pegaPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?limit=151`)
      .then((response) => {
       setPokemon({ pokemon: response.data.results });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    pegaPokemon()
  }, [])

   
    const pokemons = props.pokemon;
    console.log(pokemons)
    return (
      <div>
        <p>{pokemons.name}</p>
        <p>{pokemons.weight} Kg</p>
        {pokemons.types && <p>{pokemons.types[0].type.name}</p>}
        {pokemons.sprites && (
          <img src={pokemons.sprites.front_default} alt={pokemons.name} />
        )}
      </div>
    );
  
}

export default PokeCard;

