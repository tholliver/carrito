import React from "react";
import Layout from "../../components/Layout";
import Pedidos from "./Pedidos";

const Conta = () => {
  //getting the data
  return (
    <div className="tabla-scroll-pedidos">
      <h2>Aqui los pedidos</h2>
      <h3> </h3>

      <Layout title="Pedidos" description="Orders page">
          {/*Not showing the navbar*/}
        <style type="text/css">{`.header-main {display: none}`}</style>
        <div className="text-center mt-5">
          <Pedidos />
        </div>
      </Layout>
    </div>
  );
};

export default Conta;
