import React from 'react';

const StyleWord = (props) => {

    const styles = {
        backgroundColor: props.Bcolor,
        color: props.Tcolor,
    };

    return(
        <h1 style={styles}>The word is: {props.word}</h1>
    )
}

export default StyleWord;