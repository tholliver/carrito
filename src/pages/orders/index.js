import React from 'react';
import Layout from "../../components/Layout";
import Pedidos from './Pedidos';

const Conta = () => {
    //getting the data
    return ( 
            
        <div className="tabla-scroll-pedidos">
            <h2>Aqui los pedidos</h2>
            <h3> </h3>
            <Pedidos/>
        </div>
    
 );
   
}
 
export default Conta;
