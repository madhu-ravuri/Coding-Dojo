import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import DeleteButton from '../components/DeleteButton';

export default props => {
    const [products, setProducts] = useState({});
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + props.id)
            .then(res => {setProducts(res.data)
            console.log(res.data)
        });
    }, [])
    
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                navigate('/products');
            })
    }

    return (
        <div>
            <h4>{products.title}</h4>
            <p>Price: {products.price}</p>
            <p>Description: {products.desc}</p>
            <Link to={"/products/" + products._id + "/edit"}>Edit</Link>
            |
            <DeleteButton productId={products._id} successCallback={()=>deleteProduct(products._id)}/>
        </div>
    )
}
