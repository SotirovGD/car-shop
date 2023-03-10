import React from 'react'
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'phosphor-react';
import "./navbar.css";


const Navbar = () => {
  return (
    <div className="navbar">
        <div className="links">
            <Link to="/">Shop</Link>
            <Link to="/cart">
            <ShoppingBag size={30}/>
            </Link>
            

        </div>
    </div>
  )
}

export default Navbar