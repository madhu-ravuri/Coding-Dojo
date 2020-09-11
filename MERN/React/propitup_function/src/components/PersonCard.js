import React, { Component } from 'react';
// import React, { useState } from 'react'; // for functional components w/ this.state

const PersonCard = props => {
    return (
        <div>
            <h1>{ props.lastName }, { props.firstName }</h1>
            <p>Age: { props.age }</p>
            <p>Hair Color: { props.hairColor }</p>
        </div>
    );
}

export default PersonCard;