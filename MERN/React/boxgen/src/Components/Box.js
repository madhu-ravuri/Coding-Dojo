import React from 'react';
import { findAllByPlaceholderText } from '@testing-library/react';

const Box = (props) => {
    const boxStyle = {
        backgroundColor : props.inputs.color,
        width : 200,
        height : 200,
    };

    return(
        <div style={boxStyle}></div>
    )
};

export default Box