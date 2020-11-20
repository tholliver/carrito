import React from "react";
import Layout from "../../components/Layout";
import MisPedidos from "./MisPedidos";

const UserOrder = () => {
  //getting the data
  return (
    <div className="tabla-scroll-pedidos">
      <Layout title="Mis Pedidos" description="User orders">
        <div className="text-center mt-5">
          <h2>Pedidos realizados:</h2>
            <MisPedidos/>
        </div>
      </Layout>
    </div>
  );
};

export default UserOrder;
