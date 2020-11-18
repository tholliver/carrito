import React, { useContext } from "react";
import Layout from "../../components/Layout";

import { Link } from "react-router-dom";

import "./Styles.css";
import {formatNumber} from "../../helpers/utils";
import { CartContext } from "../../contexts/CartContext";
//import Titulo from './Titulo.js';

const Payment = () => {
  const {
    total,
  } = useContext(CartContext);

  return (
    <Layout title="Pago" description="Payment page">
      
      <div className ="contenedor-general">
        <div className="contenedor-forma-de-pago">
            <div className="text-center-forma de pago">
              <h3>FORMA DE PAGO <i className="fas fa-dollar-sign"></i> </h3>
            </div>
        </div>
        
        <div className="caja-forma-de-pago">
            <div className="caja-resumen-de-factura">
                <div className="resumen-de-factura">
                  <h3 className="resumen de factura">Resumen de factura <i className="fas fa-money-bill"></i> </h3>
                  <h3 className="total-parcial">Total parcial</h3>
                  <p className="total-parcial-numero">{formatNumber(total)}</p>
                  <h3 className="metodo-de-pago">Metodo de pago <i className="fas fa-dollar-sign"></i> </h3>
                    <div className="contenedor-boton-enviar-mi-pedido">
                      <button
                      type="button"
                      className="boton-enviar-mi-pedido"
                      > Enviar Mi Pedido En Efectivo
                      </button>
                    </div>      
                </div>    
            </div>
    
             <div className="boton-elegir-ubicacion-de-entrega">
                 <button
                 type="button"
                 className="elegir-ubicacion-de-entrega">
                 <a href="prueba.html">Elegir Ubicacion De Entrega</a>
                </button>
            </div>
        </div> 
      </div> 
       
    </Layout>
  );
};

export default Payment;
