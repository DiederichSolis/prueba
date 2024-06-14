import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Pokemones.css';

const PokemonList = () => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=26'); 
        const pokemonList = response.data.results;

        // Realizar una solicitud para cada Pokémon para obtener más detalles, incluida la URL de la imagen esto lo hacemos para poder conseguir y mandar a llmaar lo ue se pide 
        const detailedPokemonList = await Promise.all(
          pokemonList.map(async (pokemon) => {
            const detailsResponse = await axios.get(pokemon.url);
            return detailsResponse.data;
          })
        );

        setPokemonData(detailedPokemonList);
      } catch (error) {
        console.error('Error fetching Pokémon data:', error);
      }
    };

    fetchPokemonData();
  }, []);

  return (
    <div>
      <h1>Lista de Pokémon</h1>
      <div className="pokemon-container">
      <p></p>
        {pokemonData.map((pokemon, index) => (
          <div key={index} className="pokemon">
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>{pokemon.name}</p>
          </div>
       
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
