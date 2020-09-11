import React, { useState } from 'react';

const Pokemon = (props) => {
    const [ pokemon, setPokemon ] = useState([]);

    const buttonStyles = {
        margin: 20,
        padding: "8px 25px",
    };

    const fetchList = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then(response => response.json())
        .then(response => setPokemon(response.results))
    };

    return(
        <div>
            <button style={buttonStyles} onClick={fetchList}>Fetch Pokemon</button>
            {pokemon.map((entry, i) => {
                return(
                    <li key={i}>{entry.name}</li>
                )
            })}
        </div>
    )
}

export default Pokemon;