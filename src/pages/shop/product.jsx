import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context';


const Product = (props) => {
  // ще вземем всички данни от обекта и ще ги подадем на props.data
  const { id, productName, price, productImage } = props.data;
  const {addToCart, cartItems} = useContext(ShopContext);

  const cartItemsAmount = cartItems[id] ;

  return ( <div className='product'>
    <img src={productImage} alt="" />
    <div className="description">
      <p>
        <b>{productName}</b>
      </p>
      <p>${price}</p>
    </div>
    <button className="addToCartBttn" onClick={() => addToCart(id)}> Add To List
    {cartItemsAmount > 0 && <>({cartItemsAmount})</>}</button>
  </div>
  

)}

export default Product