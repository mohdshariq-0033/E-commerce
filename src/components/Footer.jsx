import React from 'react'
import { Link } from 'react-router-dom'

export default function footer() {
  return (
      <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><Link to="/" className="nav-link px-2 text-muted">Home</Link></li>
      <li className="nav-item"><Link to="/cart" className="nav-link px-2 text-muted">Cart</Link></li>
    </ul>
    <p className="text-center text-muted">© 2025 Company, Shopping</p>
  </footer>
  )
}
