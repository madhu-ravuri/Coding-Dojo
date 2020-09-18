import React, { useState } from 'react'

export default (props) => {
    const { initialTitle, initialPrice, initialDesc, onSubmitProp } = props;
    const [title, setTitle] = useState(initialTitle); 
    const [price, setPrice] = useState(initialPrice);
    const [desc, setDesc] = useState(initialDesc);

    console.log(initialTitle);
    
    const onSubmitHandler = e => {
        e.preventDefault();

        onSubmitProp({title, price, desc});
    }
    
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label><br/>
                <input type="text" value={title} defaultValue={title} onChange = {(e)=>setTitle(e.target.value)}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="text" value={price} defaultValue={price} onChange = {(e)=>setPrice(e.target.value)}/>
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" value={desc} defaultValue={desc} onChange = {(e)=>setDesc(e.target.value)}/>
            </p>
            <input type="submit"/>
        </form>
    )
}
