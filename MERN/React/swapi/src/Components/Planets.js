import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { navigate } from '@reach/router';

const Planets = (props) => {
    const {searchID} = props;
    const [planet, setPlanet] = useState({});

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${searchID}/`)
        .then(res => {
            setPlanet(res.data);})
        .catch(err => {
            navigate("/error");
        });
    }, []);
    
    return(
        <div>
            <h1>{planet.name}</h1>
            <p>Population: {planet.population}</p>
            <p>Diameter: {planet.diameter}</p>
            <p>Climate: {planet.climate}</p>
            <p>Terrain: {planet.terrain}</p>
        </div>
    )
}

export default Planets;