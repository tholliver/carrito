import React, { useContext } from "react";
import Layout from "../../components/Layout";
import axios from "axios";
//import { Link } from "react-router-dom";

import "./Styles.css";
import { formatNumber } from "../../helpers/utils";
import { CartContext } from "../../contexts/CartContext";
//import Titulo from './Titulo.js';
import swal from 'sweetalert';
import { Redirect } from "react-router-dom";


const mostrarAlerta =()=>{
  swal({
    text: 'El Envio del pedido fue un Exito ',
    icon: 'success',
  }).then((value) => {
    return <Redirect to ='/carrito'/>
  });
};



const Payment = () => {
  const { total, cartItems, itemCount, clearCart, checkout } = useContext(
    CartContext
  );

  var ridoff = (clearCart) => {
    return clearCart;
  };
  
  return (
    <Layout title="Pago" description="Payment page">
      <div className="contenedor-general">
        <div className="contenedor-forma-de-pago">
          <div className="text-center-forma de pago">
            <h3>
              FORMA DE PAGO <i className="fas fa-dollar-sign"></i>{" "}
            </h3>
          </div>
        </div>

        <div className="caja-forma-de-pago">
          <div className="caja-resumen-de-factura">
            <div className="resumen-de-factura">
              <h3 className="resumen de factura">
                Resumen de factura <i className="fas fa-money-bill"></i>{" "}
              </h3>
              <div className="xv">
                <h4>Detalle de su pedido.</h4>
                <div className="col-sm-9 p-3 xs">
                  {cartItems.map((number) => (
                    <ul>
                      <li>
                        <p>
                          {number.name} || {number.quantity} {"     X      "}
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

              <h3 className="total-parcial">Total parcial</h3>
              <p className="total-parcial-numero">{formatNumber(total)}</p>
              <h3 className="metodo-de-pago">
                Metodo de pago <i className="fas fa-dollar-sign"></i>{" "}
              </h3>
              <div className="contenedor-boton-enviar-mi-pedido">
                <button
                  type="button"
                  className="boton-enviar-mi-pedido"
                  onClick={mostrarAlerta}
                >
                  Enviar Mi Pedido En Efectivo
                </button>
              </div>
            </div>
          </div>

          <div className="boton-elegir-ubicacion-de-entrega">
            <button type="button" className="elegir-ubicacion-de-entrega">
              <a href="prueba.html">Elegir Ubicacion De Entrega</a>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Payment;
