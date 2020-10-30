import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import CartItem from './CartItem';


const CartProducts = () => {

    const { cartItems } = useContext(CartContext);

    return ( 
        <div className="container">
            <div className="card card-body border-0">

                {
                    cartItems.map(product =>  <CartItem key={product.id} product={product}/>)
                    /*probando*/
                }

            </div>
        </div>

     );
}
 
export default CartProducts;