import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';

const CartItem = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemsCount } = useContext(ShopContext);
    return (
        <>

            <div className="cartItem">

                <img src={productImage} alt="" />
                <p className='description'>
                    <b> {productName} </b>
                    <p className='price'>€{" " + price}</p>
                    
                </p>

                <div className="countHandler">
                    <button onClick={() => removeFromCart(id)}> - </button>
                    <input value={cartItems[id]} onChange={(e) => updateCartItemsCount(Number(e.target.value), id)} />
                    <button onClick={() => addToCart(id)}> + </button>
                </div>

            </div>



        </>

    )
}

export default CartItem