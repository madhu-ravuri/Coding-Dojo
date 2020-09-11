import React, { Component } from 'react';

class PersonCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            personsAge : this.props.age
         };
    }

    addAge = () => {
        this.setState({
            personsAge : this.state.personsAge += 1
        });
    };

    render() {
        return(
            <div>
                <h1>{ this.props.lastName }, { this.props.firstName }</h1>
                <p>Age: { this.state.personsAge }</p>
                <p>Hair Color: { this.props.hairColor }</p>
                <button onClick={this.addAge}>Birthday Button for { this.props.firstName } { this.props.lastName }</button>
            </div>
        );
    }
}

export default PersonCard;