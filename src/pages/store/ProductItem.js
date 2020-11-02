import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import { formatNumber } from '../../helpers/utils';

import {  toast  } from 'react-toastify' ;   
  import 'react-toastify/dist/ReactToastify.css' ; 
  
toast.configure()
 

/* Importando estilos*/



const ProductItem = ({product}) => {

    const { addProduct, cartItems, increase } = useContext(CartContext);

    const isInCart = product => {
        return !!cartItems.find(item => item.id === product.id);
    }
    const addProducto =()=>{
        return(
            addProduct(product),
            notificar()
        )
    }

    const notificar  = ( ) => {
        toast.success( 'Se agrego el producto al carrito al carrito',{
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000
    })
    }
    
    return (    
        <div className="card card-body">
            <img style={{display: "block", margin: "0 auto 10px", maxHeight: "200px"}} className="img-fluid" 
            src={product.photo + '?v=' + product.id} alt=""/>
            <p>{product.name}</p>
            <h3 className="text-left">{formatNumber(product.price)}</h3>
            <div className="text-right">
                <Link  to="/" className="btn btn-link btn-sm mr-2">Detalles</Link>

                {
                    isInCart(product) && 
                    <button 
                    onClick={() => increase(product)}
                    className="btn btn-outline-primary btn-sm">Añadir mas</button>
                }

                {
                    !isInCart(product) &&
                    <button 
                    onClick={addProducto}
                    className="btn btn-primary btn-sm">Añadir al carrito</button>
                }
               
            </div>
        </div>
     );
}
 
export default ProductItem;