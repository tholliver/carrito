import React, { useContext } from "react";
import Layout from "../../components/Layout";

import { Link } from "react-router-dom";

import "./Styles.css";
//import Titulo from './Titulo.js';

const Payment = () => {
  return (
    <Layout title="Pago" description="Payment page">
      
      <div className="text-center mt-5 titulo-carrito">
      <h3>Proceder a pago.</h3>
      <p>Elija un metodo de pago</p>
      </div>
    </Layout>
  );
};

export default Payment;
