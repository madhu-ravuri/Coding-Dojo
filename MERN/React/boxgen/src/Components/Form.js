import React, { useState } from 'react';

const Form = (props) => {
    const { inputs, setInputs } = props;

    const [color, setColor] = useState("");

    const createBox = (event) => {
        event.preventDefault();

        const Box = {
            color: color,
            size: 200,
        };

        setInputs([...inputs, Box]);

        setColor("");
    }

    return(
        <div>
            <form onSubmit={(createBox)}>
                <label htmlFor="color">Color</label>
                <input onChange={ (event) => setColor(event.target.value) } type="text" value={color}></input>
                <button>Add</button>
            </form>
        </div>
    )
}

export default Form