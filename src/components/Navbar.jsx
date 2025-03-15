import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../cssCompo/style.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <Link className="navbar-brand me-5" to="/">Shoping</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item mx-auto"><Link className="nav-link" to="/">Home</Link></li>
                        <li className="nav-item mx-auto"><Link className="nav-link" to="/cart">Cart</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
