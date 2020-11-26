import React, { useState } from "react";
import axios from "axios";
import Produc from "./Produc";
//import MisPedidos from './MisPedidos'
//import { formatNumber } from "../../helpers/utils";
import "../cart/Styles.css";
//import swal from 'sweetalert';
import swal from '@sweetalert/with-react'
//import swal from 'sweetalert'
//var num =0;
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

     const pp =()=>{
      
      swal(
        <div className="contenedor-pedidos">
          <h1>Detalle del Pedido</h1>
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
        <br/>
        <b>Cantidad Total:</b>  {this.props.productito.cantidadTotal}
        <br/>
        <b>Total compra:</b> Bs. {this.props.productito.totalPagar}
        <p></p>
        <br></br>
      </div>  
      )
     }
    return (
      <div className="contenedor-pedidos">
        <b>Dirección:</b> {this.props.productito.direccion}
        <br></br>
        <br/>
        <b>Nombre del Cliente:</b> {this.props.productito.nombreCli}
        <br></br> 
       {/* <b>Resumen:</b>
        <br></br>
        <div>
        <b>Nombre del producto</b>/ <b>Cantidad</b>  /<b>Precio unitario</b>
       </div>*/}
        
        {this.state.products.map((item) => (
          
          <div>
  
             {this.props.productito.idpedido===item.pedido_idpedido&&(
              <div>
                
                {/*<Produc key={item.id} productitoCom={item} />*/}
              </div>  
            ) 
            }         
          </div>
        ))}
        <br/>
        <b>Cantidad Total:</b>  {this.props.productito.cantidadTotal}
        <br/>
        <br/>
        <b>Total compra:</b> Bs. {this.props.productito.totalPagar}
        <br/>
        <p></p>
          <button onClick={pp} type="button" className="ver-pedido">
            <a href="#">Ver pedido</a>
          </button>
        <br></br>
      </div>     
    );
  }
}