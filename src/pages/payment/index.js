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
      
    </Layout>
  );
};

export default Payment;
