import React from "react";
import axios from "axios";
import Pedidito from "./pedidito";
import "./detalles.css"
import Cookies from "universal-cookie";
//import Produc from './Produc';
var idclientePru=1;
var num =0;
const cookies = new Cookies();
export default class MisPedidos extends React.Component {
  state = {
    
    value:"Pendiente",
    products: [],
  };
  onChange(e) {
    console.log(e.target.value)
    this.setState({value: e.target.value});
    
  }
 
  componentDidMount() {
    axios.get(`https://alfasoft-api.herokuapp.com/pedidousuario`).then((res) => {
      const products = res.data;
      this.setState({ products });
      //console.log(products)
      //estoy probando una modificacion
    });
  }
  render() {
    return (
      <div className="conte">
        {this.state.products.map((item) => (
          <div>
             {item.idcliente===idclientePru&&(
               <div className = "numeroPro">
                 <div className="cajas">
                 <div className= "nu"> 
                 Pedido número: {num=num+1}
                  {cookies.get('tipoUsuario')==='admin' &&
                    <select value={this.state.value} onChange={this.onChange}>
                      <option value="Pendiente">Pendiente</option>
                      <option value="En Camino">En Camino</option>
                      <option value="Entregado">Entregado</option>
                    </select>
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
