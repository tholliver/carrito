import React from "react";
import axios from "axios";
import Pedidito from "./pedidito";
import "./detalles.css"
import Cookies from "universal-cookie";
//import Produc from './Produc';
var idclientePru=1;
var num =0;
const cookies = new Cookies();

setInterval('imprimirValor()', 1000);

export default class MisPedidos extends React.Component {
  state = {
    
    value:"Pendiente",
    products: [],
    estado:"pendiente",
    
  };
  
  aumentar = ()=>{
    console.log("entraaaa");
    var select = document.getElementById("combo-carrito");
    this.setState({value: select.value});
  }
  

  componentDidMount() {
    axios.get(`https://alfasoft-api.herokuapp.com/pedidousuario`).then((res) => {
      const products = res.data;
      this.setState({ products });
      console.log(products)
      //estoy probando una modificacion
    });
  }
  render() {
    return (
      <div className="conte">
        {this.state.products.map((item) => (
          <div className='container-pedido'>
             {item.idcliente===idclientePru&&(
               <div className = "numeroPro">
                 <div className="cajas">
                 <div className= "nu"> 
                 Pedido número: {num=num+1}
                  {cookies.get('tipoUsuario')==='admin' &&
                    <div className="estado-carrito">
                      <p>{this.state.value}</p>
                      <select className="combobox-estado-carrito" id="combo-carrito" onchange={this.aumentar}>
                        <option value="Pendiente">Pendiente</option>
                        <option value="En Camino">En Camino</option>
                        <option value="Entregado" onchange={this.aumentar}>Entregado</option>
                      </select>
                      <button onClick={this.aumentar}>Guardar</button>
                    </div>
                    
                  }
                  </div>
              <div  className="row-mi no-gutters py-2 container contenedor-indi">     
                <Pedidito key={item.id} productito={item} product={'producto mal parido '}/>
              </div>  
              </div>
              </div>
            ) 
          }         
          </div>
        ))} 
        <div hidden>
        {num=0}         
        </div>
      </div>
    );
  }
}
