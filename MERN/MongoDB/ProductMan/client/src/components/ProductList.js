import React, { useEffect } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';
import DeleteButton from '../components/DeleteButton';

export default props => {
    const { products, setProducts } = props;

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => setProducts(res.data));
    }, [])

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId));
    }
    
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
    }

    return (
        <div>
            {products.map((product, i)=> {
                return(
                    <div key={i}>
                    <Link to={`/products/${product._id}`}>{product.title}</Link>
                    |
                    <DeleteButton productId={product._id} successCallback={()=>deleteProduct(product._id)}/>
                </div>
                )
            })}

        </div>
    )
}
