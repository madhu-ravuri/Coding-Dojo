import React, { useState } from 'react';
import { navigate } from '@reach/router';

import Planets from './Planets';
import People from './People';

const Menu = (props) => {

    const [category, setCategory] = useState("");

    const divStyle = {
        display: "flex",
        margin: "auto",
        width: 500,
        marginTop: 40,
        alignItems: "baseline",
    };

    const menuStyle = {
        padding: "4px 60px 4px 12px",
        marginLeft: 20,
        marginRight: 40,
    };

    const inputStyle = {
        width: 40,
        margin: "0 20px",
    };

    const reqStyle = {
        position: "absolute",
        top: 150,
        left: 400,
    };

    const onClick = (e) => {
        const keyName = document.getElementById("keyName").value;
        const idNum = document.getElementById("idNum").value;

        setCategory(keyName);

        navigate(`/${keyName}/${idNum}`);
        // navigate("/"+keyName+"/"+idNum);
    };

    return(
        <div style={divStyle}>
            <p>Search for: </p>
            <select style={menuStyle} id="keyName">
                <option value="people">people</option>
                <option value="planets">planets</option>
            </select>
            <p>ID:</p>
            <input id="idNum" style={inputStyle} type="number" step="1" />
            <button onClick={onClick}>Search</button>

            <div style={reqStyle}>
                {category == "planets" ? <Planets searchID={props.id} />:<div />}
                {category == "people" ? <People searchID={props.id} />:<div />}
            </div>
        </div>
    )
}

export default Menu;