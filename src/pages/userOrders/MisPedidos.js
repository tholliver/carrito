import React from "react";
import axios from "axios";
import Pedidito from "./pedidito";
import Produc from './Produc';
var idclientePru=1;
var num =0;
export default class MisPedidos extends React.Component {
  state = {
    products: [],
  };

 
  componentDidMount() {
    axios.get(`https://alfasoft-api.herokuapp.com/pedidousuario`).then((res) => {
      const products = res.data;
      this.setState({ products });
      console.log(products)
    });
  }
  render() {
    return (
      <div >
        {this.state.products.map((item) => (
          <div>
             {item.idcliente===idclientePru&&(
               <div>
                 Pedido número: {num=num+1}
              <div  className="row no-gutters py-2 container contenedor-individual-producto">     
                <Pedidito key={item.id} productito={item} product={'producto mal parido '}/>
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
