import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/productDetails';
import Cart from './pages/cart';
import { CartProvider } from './pages/cartContext';
import Footer from './components/footer';

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
            <Footer/>
        </>
    );
};

export default App;
