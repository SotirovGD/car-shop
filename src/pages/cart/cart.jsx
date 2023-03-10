import React, { useContext } from 'react'
import { PRODUCTS } from '../../products'

import { ShopContext } from '../../context/shop-context';
import CartItem from './cart-item';
import "./cart.css"
import { useNavigate } from 'react-router-dom';

const image = "https://media.istockphoto.com/id/480144800/vector/depressed-emoticon.jpg?s=612x612&w=0&k=20&c=GLnC-j2BhRvfCkQKk8J7cnLu3IvKOHaiW_Qgca6eUOk="


const Cart = () => {

  const navigate = useNavigate();

  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  let amount = getTotalCartAmount();
  return (
    <div className="cart">
      <div>
        <h1>Your catalog  ..</h1>
      </div>

      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
              return <CartItem data={product}/>
          }
          return null;
        })}
      </div>
      {amount > 0 ? (<div className="checkout">
        <h1>Subtotal: ${" " + amount.toFixed(3)}</h1>
        <button onClick={() =>  navigate("/")}>Back to Catalog</button>
        <button>Checkout</button>
      </div>) : (<div className="checkout"> 

        <h1><img src= {image} alt=""/></h1>
      <footer>created by code-wizard </footer>
      <button onClick={() =>  navigate("/")}>Back to Catalog</button>
      </div>
      
      )}
      

        
    </div>
    
  )
}

export default Cart