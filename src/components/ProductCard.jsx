import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <>
        <div className="mt-4 col-12 col-sm-6 col-md-4 col-lg-3 mb-1">
            <div className="card mx-2">
                <img src={product.image} className="card-img-top" alt={product.title} />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">₹{product.price}</p>
                    <Link to={`/product/${product.id}`} className="btn btn-primary">View Details</Link>
                </div>
            </div>
        </div>
        </>
    );
};

export default ProductCard;
