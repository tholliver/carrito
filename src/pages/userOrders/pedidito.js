import React, { useState } from "react";
import axios from "axios";
import Produc from "./Produc";
//import MisPedidos from './MisPedidos'
//import { formatNumber } from "../../helpers/utils";
import "../cart/Styles.css";
import "./detalles.css"
//import swal from 'sweetalert';
import swal from '@sweetalert/with-react'
import Cookies from "universal-cookie";
//import swal from 'sweetalert'
//var num =0;
const cookies =new Cookies();
export default class Pedidito extends React.Component {
  state = {
    products: [],
  };
  
  componentDidMount() {
     //axios.get(`https://alfasoft-api.herokuapp.com/productopedido`).then((res) => {
       const idP = this.props.productito.idpedido;
      axios.get("https://alfasoft-api.herokuapp.com/productopedido/"+idP).then((res) => {
      const products = res.data;
      console.log(res.data);
      this.setState({ products });
    // console.log(products)
    });
  }
  

  render() {

     const pp =()=>{
      
      swal(
        <div className="contenedor-detalle">
          <div className="detalle-codigo-pedido">
            <p>Codigo de pedido: {this.props.productito.idpedido}</p>
          </div>
            
            <div className="detalle-direccion">
              <p>Dirección: {this.props.productito.direccion}</p>
            </div> 

            <div className="detalle-nombre"> 
              <p>Nombre del Cliente: {this.props.productito.nombreCli}</p>
            </div>

             <div className="detalle-resumen">  
            <p>Resumen:</p>
            </div>
              
          <div className="detalle-pedidos-productos">
            <p>Nombre del producto  /  Cantidad  /  Precio unitario</p>
          </div>

          <div className="recuperar-producto">
             <pre>{this.state.products.map((item) =>(
            <div className="recuperar-cantidad">
             
              <Produc key={item.id} productitoCom={item} />
             
            </div>
              )
              )
            }</pre>
         </div>    
            
          <div className="detalle-cantidad-total">
            <p>Cantidad Total:  {this.props.productito.cantidadTotal}</p>
          </div>
            
          <div className="detalle-total-compra">
            <p>Total compra: Bs. {this.props.productito.totalPagar}</p>
          </div>
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
        
      
        <br/>
        <b>Cantidad Total:</b>  {this.props.productito.cantidadTotal}
        <br/>
        <br/>
        <b>Total compra:</b> Bs. {this.props.productito.totalPagar}
        <br/>
        <div className='estadoPago'><b> Estado de pago: </b> 
        {this.props.productito.estadoPago ==='Por pagar' && <p className='porPagar'> {this.props.productito.estadoPago}</p>}
          {this.props.productito.estadoPago !=='Por pagar' && <p> {this.props.productito.estadoPago}</p>}
        </div> 
        <div className = "caja-boton">
          <button onClick={pp} type="button" className="ver-pedido">
            {/*mejorando diseño del boton ver pedidos */}
          {cookies.get('tipoUsuario')==='admin' && <a className='verPedido' href="#">Ver pedido</a>}
           {cookies.get('tipoUsuario')!=='admin'&& <a href="#">Ver pedido</a>}
          
          </button>
          </div>
        <br></br>
      </div>     
    );
  }
}