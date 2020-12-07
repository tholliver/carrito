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
import Tarjeta from  './tarjeta'
import Cookies from "universal-cookie";

const cookies = new Cookies()


const Payment = () => {
  const { total, cartItems, itemCount, clearCart, checkout } = useContext(
    CartContext
  );

  function func1() {
    let current_datetime = new Date();
    let formatted_date =
      current_datetime.getFullYear() + "-" +
      (current_datetime.getMonth() + 1) + "-" +
      current_datetime.getDate() +  " " +
      current_datetime.getHours() + ":" +
      current_datetime.getMinutes() + ":" +
      current_datetime.getSeconds();
    let ramdom = Math.floor(Math.random() * 50) + 1;;
    const newPedido = [
      {
        direccion: "Calle Antezana y Ladislao Cabrera N"+ramdom,
        fechaPedido: formatted_date,
        cantidadTotal: itemCount,
        totalPagar: total, 
        idclienteP: 1,
      },
    ];
    axios
      .post("https://alfasoft-api.herokuapp.com/pedido", newPedido, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    }

    function func2() {
      const arr = [];
      cartItems.map((item) => {
        var newADE = 21;
        arr.push({
          pedido_idpedido: newADE,
          producto_idproducto: item.id,
          cantidadComp: item.quantity,
        });
      });
      console.log(arr, "Showing the array insert to pedidosProductos");
      axios
        .post("https://alfasoft-api.herokuapp.com/pedido/items", arr, {
          headers: { "Content-Type": "application/json" },
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }

  const mostrarAlerta =()=>{
    func1();
    swal({
      text: 'El Envio del pedido fue un Exito ',
      icon: 'success',
    }).then((value) => {
      func2()
      clearCart()
    });
  };
  if(cookies.get("username")){
  return (
    <React.Fragment>
    <Layout title="Pago" description="Payment page">
      <div className="contenedor-general">
        <div className="contenedor-forma-de-pago">
          <div className="text-center-forma de pago">
            <h3>
              FORMA DE PAGO Bs.{" "}
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
                          {number.name} || {number.quantity} {"     X      "}Bs. 
                          {number.price * number.quantity}
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
              <p className="total-parcial-numero">Bs. {total}</p>
              <h3 className="metodo-de-pago">
                Metodo de pago Bs.{" "}
              </h3>
              <Tarjeta></Tarjeta>
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
    {cartItems.length === 0 && <Redirect to='/carrito'/> }
    </React.Fragment>
  );
}else{
  window.location.href='./';
}
};

export default Payment;
