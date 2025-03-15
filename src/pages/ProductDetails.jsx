import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { CartContext } from './cartContext';
import Navbar from '../components/Navbar';

const ProductDetails = () => {
    
    const {addToCart} = useContext(CartContext);
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(response => setProduct(response.data))
            .catch(error => console.error(error));
    }, [id]);

    if (!product) return <p>Loading...</p>;

    return (
        <>
        <Navbar/>
        <div className="marTop container">
            <div className="row">
                <div className="col-md-6">
                    <img src={product.image} alt={product.title} className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <h4>₹{product.price}</h4>
                    <button id="btn" onClick={() => addToCart(product)} className="btn btn-success">Add to Cart</button>
                </div>
            </div>
        </div>
        </>
    );
};

export default ProductDetails;
