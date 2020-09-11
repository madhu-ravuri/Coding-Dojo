import React, { useState } from 'react';
import axios from 'axios';

const PokeAxios = (props) => {
    const [pokemon, setPokemon] = useState([]);

    const buttonStyles = {
        margin: 20,
        padding: "8px 25px",
    };

    const fetchList = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then(response => setPokemon(response.data.results));
    };

    return(
        <div>
            <button style={buttonStyles} onClick={fetchList}>Fetch Pokemon (axios)</button>
            {pokemon.map((entry, i) => {
                return(
                    <li key={i}>{entry.name}</li>
                )
            })}
        </div>
    )
}

export default PokeAxios