import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';

export default props => {
    const { id } = props;
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [desc, setDesc] = useState('');
    const [product, setProduct] = useState();

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setProduct(res.data);
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDesc(res.data.desc);
                setLoaded(true);
            })
    }, [])
    const updateProduct = product => {
        axios.put('http://localhost:8000/api/products/' + id, product)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }
    return (
        <div>
        {loaded && (
            <ProductForm
                onSubmitProp={updateProduct}
                initialTitle={product.title}
                initialPrice={product.price}
                initialDesc={product.desc}
            />)}
        </div>)
}