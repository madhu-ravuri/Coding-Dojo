import React from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

export default props => {
    const { productId, successfulCallback } = props;

    const deleteProduct = (productId) => {
        console.log(productId);
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                navigate('/products');
            })
    }

    return(
        <div>
            <button onClick={(e)=>{deleteProduct(productId)}}>
                Delete
            </button>
        </div>
    )

}