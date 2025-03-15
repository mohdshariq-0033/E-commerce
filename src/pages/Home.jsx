import React, { useState, useEffect } from 'react';
import ProductCard from '../components/productCard';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Carosal from '../components/carosal';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => setProducts(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <>
        <Navbar/>
        <Carosal/>
        <div className="newCont container mt-4">
            <div className="row">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
        </>
    );
};

export default Home;
