import React from 'react'
import { PRODUCTS } from '../../products';
import Product from './product';
import "./shop.css";

const Shop = () => { // тук ще покажем продукта чрез product.jsx from shop folder
    return (
        <div className='shop'>
            <div className='shop-title'>
                <h1> Online Car Catalog</h1>
            </div>
            <div className='products'>

                {PRODUCTS.map((product) => (
                    <Product data={product} />)

                    /*чрез data={product} подавам данни към класа на продукта за да мога да му оформя данните*/

                )}

            </div>
        </div>
    )
}

export default Shop