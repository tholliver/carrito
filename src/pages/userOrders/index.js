import React from "react";
import Layout from "../../components/Layout";
import MisPedidos from "./MisPedidos";
import "./detalles.css"
import Cookies from "universal-cookie";

const cookies = new Cookies();

const UserOrder = () => {
  //getting the data
  if(cookies.get("username")){
  return (
    <div className="tabla-scroll-pedidos">
      <Layout title="Mis Pedidos" description="User orders">
        
        <div className="text-center mt-5">
        <div className = "titulo-pedido">
          <h3>Pedidos Realizados</h3> </div>
            <MisPedidos/>
        </div>
       
      </Layout>
    </div>
  );
  }else{
    window.location.href='./';
  }
};

export default UserOrder;
