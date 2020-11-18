import React, { useContext } from "react";
import Layout from "../../components/Layout";
import { CartContext } from "../../contexts/CartContext";
//import { Link } from "react-router-dom";
import { formatNumber } from "../../helpers/utils";
import axios from "axios";

import "./Styles.css";
//import Titulo from './Titulo.js';

const Payment = () => {
  const { total, cartItems, itemCount, clearCart, checkout } = useContext(
    CartContext
  );
  function func1() {
    let current_datetime = new Date();
    let formatted_date =
      current_datetime.getFullYear() +
      "-" +
      (current_datetime.getMonth() + 1) +
      "-" +
      current_datetime.getDate() +
      " " +
      current_datetime.getHours() +
      ":" +
      current_datetime.getMinutes() +
      ":" +
      current_datetime.getSeconds();
    
    const newPedido = [
      {
        direccion: "sameHouseEveryone",
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
  //We are sending the last idPedido the we got.
  function func2() {}

  const arr = [];
  cartItems.map((item) => {
    var newADE = 7; //Maybe get (select max(idpedido) from pedido; then asign the id to newADE)
    arr.push({ idpedido: newADE, idproducto: item.id });
    /*if (temp.name === oldName) {
              temp.name = name;
          }*/
  });
  //Getting the tuple [{pedido_idpedido}{producto_idproducto}]
  console.log(arr);
  console.log(itemCount);

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
                    <li key={number.id}>
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
        {/*HERE CALL THE METHODS to getLast idpedido and then post into pedidosProductos*/}
        <button 
          href="#"
          onClick={() => {
            func1();
          }}
        >
          Test Link
        </button>
        
        
      </div>
    </Layout>
  );
};

export default Payment;
