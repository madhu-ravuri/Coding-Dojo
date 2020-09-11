import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { navigate } from '@reach/router';

const People = (props) => {
    const {searchID} = props;
    const [person, setPerson] = useState({});

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${searchID}`)
        .then(res => {
            setPerson(res.data);})
        .catch(err => {
            navigate("/error");
        });
    }, []);
    
    return(
        <div>
            <h1>{person.name}</h1>
            <p>Height: {person.height}</p>
            <p>Mass: {person.mass}</p>
            <p>Hair Color: {person.hair_color}</p>
            <p>Gender: {person.gender}</p>
        </div>
    )
}

export default People;