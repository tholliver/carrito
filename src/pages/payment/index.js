import React, { useContext } from "react";
import Layout from "../../components/Layout";
import { CartContext } from "../../contexts/CartContext";
//import { Link } from "react-router-dom";
import { formatNumber } from "../../helpers/utils";

import "./Styles.css";
//import Titulo from './Titulo.js';

const Payment = () => {
  const { total, cartItems, itemCount, clearCart, checkout } = useContext(
    CartContext
  );

   //Testing some


  return (
    <Layout title="Pago" description="Payment page">
      <div>
        <h3>Proceder a pago.</h3>
        <p>Elija un metodo de pago</p>

        <div className="Caja-productos-general">
          <div className="row no-gutters justify-content-center probando">
            <div className="xv">
            <h4>Detalle de su pedido.</h4>
              <div className="col-sm-9 p-3 xs">
              
                {cartItems.map((number) => (
                  <ul>
                    <li>
                      <p>
                        {number.name} || {number.quantity} {" X "}
                        {formatNumber(number.price * number.quantity)} 
                      </p>
                    </li>
                  </ul>
                ))}
                {cartItems.length > 0 ? (
                  <div className="titulo"></div>
                ) : (
                  <div>
                    <img className="emptycart img" alt="img" />
                    <div className="p-3 text-center text-muted">
                      <p>Tu carrito esta vacio </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            
            <hr className="my-4" />
          </div>
        </div>
        <h4 className=" mb-3 txt-right">{itemCount} Productos</h4>
            <p className="mb-1">Total a cancelar</p>
            <h3 className="m-0 txt-right">{formatNumber(total)}</h3>
      </div>
    </Layout>
  );
};

export default Payment;
