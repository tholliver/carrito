import React from "react";
import Layout from "../../components/Layout";

const UserOrder = () => {
  //getting the data
  return (
    <div className="tabla-scroll-pedidos">
      <Layout title="Mis Pedidos" description="User orders">
        <div className="text-center mt-5">
          <h2>Aqui sus pedidos</h2>
          
        </div>
      </Layout>
    </div>
  );
};

export default UserOrder;
