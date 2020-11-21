import React, { useState } from "react";
import axios from "axios";
import Produc from "./Produc";
import MisPedidos from './MisPedidos'
import { formatNumber } from "../../helpers/utils";
import "../cart/Styles.css"

import swal from 'sweetalert'
var num =0;
export default class Pedidito extends React.Component {
  state = {
    products: [],
  };
 
  componentDidMount() {
    axios.get(`https://alfasoft-api.herokuapp.com/productopedido`).then((res) => {
      const products = res.data;
      this.setState({ products });
     console.log(products)
    });
  }

  render() {
    return (
      <div>
        <b>Dirección:</b> {this.props.productito.direccion}
        <br></br>
        <b>Nombre del Cliente:</b> {this.props.productito.nombreCli}
        <br></br> 
        <b>Resumen:</b>
        <br></br>
        <div>
        <b>Nombre del producto</b>/ <b>Cantidad</b>  /<b>Precio unitario</b>
        </div>
        
        {this.state.products.map((item) => (
          
          <div>
  
             {this.props.productito.idpedido===item.pedido_idpedido&&(
              <div>
                
                <Produc key={item.id} productitoCom={item} />
              </div>  
            ) 
            }         
          </div>
        ))}
        <b>Total de compra:</b> Bs. {this.props.productito.totalPagar}
        <br></br>
      </div>
    );
  }
}


