import React, { useContext } from "react";
import {
  PlusCircleIcon,
  MinusCircleIcon,
  TrashIcon,
} from "../../components/icons";
import { CartContext } from "../../contexts/CartContext";

import { formatNumber } from "../../helpers/utils";
import "./Styles.css"

const CartItem = ({ product }) => {
  const { increase, decrease, removeProduct } = useContext(CartContext);

  return (
    <div className="row no-gutters py-2 container">
      <div className="col-sm-2 p-2">
        <img
          alt={product.name}
          style={{ margin: "0 auto", maxHeight: "50px" }}
          src={product.photo}
          className="img-fluid d-block"
        />
        <h5 className="mb-1">{product.name}</h5>
      </div>
      <div className="col-sm-4 p-2">
        <div className="contenedor-nombre-precio">
         <h5 className="mb-1">{''} </h5>
         <br/>
          <p className="mb-1">{formatNumber(product.price)} </p>
        </div>
      </div>
      <div className="col-sm-2cantidad p-2 text-center container-cantidad">
        <p className="mb-0">{product.quantity}</p>
      </div>
      <div className="col-sm-4-botones p-2 text-right contenedor-botones-modificacion">
        <div className="container-botons">
        


      
          <button
            
            onClick={() => increase(product)}
            className="btnaumentar btn-primary btn-sm mr-2 mb-1"
          >
            <PlusCircleIcon width={"20px"} />
          </button>
      

        {product.quantity > 1 && (
          <button
            onClick={() => decrease(product)}
            className="btndisminuir btn-danger btn-sm mb-1"
          >
            <MinusCircleIcon width={"20px"} />
          </button>
        )}

        {product.quantity === 1 && (
          <button
            disabled={product.quantity === 1}
            className="btn btn-danger btn-sm mb-1"
          >
            <MinusCircleIcon width={"20px"} />
          </button>
        )}
        {//
          <button
            onClick={() => removeProduct(product)}
            className="btn-eliminar"
          >
            <TrashIcon width={"20px"} />
          </button>
          }
        </div>
      </div>
      {/* lo nuevo q estoy agregando*/}
      <div className="col-sm-4 p-2">
        <div className="contenedor-nombre-precio">
         <h5 className="mb-1">{''} </h5>
         <div className="col-sm-2cantidad p-2 text-center container-cantidad">
            <p className="mb-0">${ (Math.round((product.quantity)*(product.price)  * 100) / 100).toFixed(2)  }</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
