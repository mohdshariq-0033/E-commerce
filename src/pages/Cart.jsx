import { useContext } from 'react';
import { CartContext } from './cartContext';
import Navbar from '../components/Navbar';

const cart = () => {
    const {cart} =useContext(CartContext);

    return (
        <>
        <Navbar/>
        <div className="marTop container" style={{minHeight : "60vh"}}>
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? <p>Your cart is empty.</p> : cart.map((item, index) => (
                <div key={index} className="card mb-3">
                    <div className="card-body">
                        <div className="cartImgContainer">
                        <img src={item.image} alt='productImg'></img>
                        </div>
                        <h5>{item.title}</h5>
                        <p>₹{item.price}</p>
                    </div>
                </div>
            ))}
        </div>
        </>
    );
};

export default cart;
