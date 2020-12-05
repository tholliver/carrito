import React, { useContext } from "react";
import Layout from "../../components/Layout";

import CartProducts from "./CartProducts";
import { CartContext } from "../../contexts/CartContext";
import { formatNumber } from "../../helpers/utils";
import { Link } from "react-router-dom";

import "./Styles.css";
import Titulo from "./Titulo.js";
import swal from '@sweetalert/with-react';
import Login from "../../components/auth/Login";

//handleCheckout,
//managing set to empty the cart
const Cart = () => {
  const { total, cartItems, itemCount, clearCart, checkout } = useContext(
    CartContext
  );

 const loginAlert =()=>{
      //if(cookies.get('username')){
      if(false){
        window.location.href="./pago";
    }else{
      swal(
        <div> 
          <Login  ubicacion = "carrito"></Login>
        </div>,{button: "Cancelar",}
      );
    }
  }
       
  return (
    <Layout title="Carrito" description="Cart page">
      <div>
        <div className="container-elementos-titulo">
          <div className="text-center mt-5 titulo-carrito">
            <h1>
              Tu carrito de compras<i className="fas fa-shopping-cart"></i>{" "}
            </h1>
            <p>Pagina con contenido de carrito</p>
          </div>
        </div>

        <div className="Contenedor">
        <div className="Caja-productos-general">
          <div className="row no-gutters justify-content-center probando">
            <div className="xv">
              <div className="col-sm-9 p-3 xs">
                {cartItems.length > 0 ? (
                  <div className="titulo">
                    <Titulo />
                    <CartProducts />
                  </div>
                ) : (
                  <div>
                    <img
                      className="emptycart img"
                      src={require("./boom.svg")}
                      alt="img"
                    />
                    <div className="p-3 text-center text-muted">
                      <p>Tu carrito esta vacio </p>
                      <Link to="/">Ir a la tienda</Link>
                    </div>
                  </div>
                )}

                {checkout && (
                  <div className="p-3 text-center text-success">
                    <p>Pago completado</p>
                    <Link to="/" className="btn btn-outline-success btn-sm">
                      Comprar mas
                    </Link>
                  </div>
                )}
              </div>
            </div>
            {cartItems.length > 0 && (
              <div className="contenedor-detalles">
                <div className="card card-body detalles">
                  <p className="mb-1">Cantidad de productos</p>
                  <h4 className=" mb-3 txt-right">{itemCount}</h4>
                  <p className="mb-1">Total</p>
                  <h3 className="m-0 txt-right">Bs. {total}</h3>
                  <hr className="my-4" />
                  <div className="text-center">
                    <button
                      type="button"
                      className="btnprocederpago btn-primary mb-2 boton-Detalle-Venta"
                    >
                      <Link to="/pago">Proceder a pago</Link>
                    </button>
                    <button onClick ={loginAlert}>login</button>
                    <button
                      type="button"
                      className="btnvaciarcarrito btn-outlineprimary btn-sm boton-Detalle-Venta"
                      onClick={clearCart}
                    >
                      Vaciar carrito
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
