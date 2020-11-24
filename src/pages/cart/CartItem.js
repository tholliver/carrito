import React, { useContext } from "react";
import {
  PlusCircleIcon,
  MinusCircleIcon,
  TrashIcon,
} from "../../components/icons";
import { CartContext } from "../../contexts/CartContext";

import { formatNumber } from "../../helpers/utils";
import "./Styles.css"

import swal from 'sweetalert'

const CartItem = ({ product }) => {
  const { increase, decrease, removeProduct } = useContext(CartContext);

  const mostrarAlerta =()=>{
    swal({
      title: 'Eliminar',
      text: 'Esta Seguro de eliminar este producto? ',
      icon: 'warning',
      buttons:['NO','Si']
    }).then(respuesta=>{
      if(respuesta){
        return removeProduct(product),
        swal({ text: 'se elimino el producto producto?',
        icon: 'success',
        timer: 1000
      
      })
      }
    }
)
  };

  return (
    <div className="row no-gutters py-2 container contenedor-individual-producto">
      <div className="col-sm-2 p-2 image">
        <img
          alt={product.name}
          style={{ margin: "0 auto", maxHeight: "50px" }}
          src={product.photo}
          className="img-fluid d-block"
        />
        <h5 className="mb-1 nombre-producto">{product.name}</h5>
      </div>
      <div className="col-sm-4 p-2">
        <div className="contenedor-nombre-precio precio">
         <h5 className="mb-1">{''} </h5>
         <br/>
          <p className="mb-1">{formatNumber(product.price)} </p>
        </div>
      </div>
      <div className="col-sm-2cantidad p-2 text-center container-cantidad subtotal">
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
            onClick={mostrarAlerta/*removeProduct(product)*/}
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
         <div className="col-sm-2cantidad p-2 text-center  subtotal">
            <p className="mb-0">${ (Math.round((product.quantity)*(product.price)  * 100) / 100).toFixed(2)  }</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
