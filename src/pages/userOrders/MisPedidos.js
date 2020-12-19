import React from "react";
import axios from "axios";
import Pedidito from "./pedidito";
import "./detalles.css"
import Cookies from "universal-cookie";
//import Estado from "./Estado"

//import Produc from './Produc';

var num =0;
const cookies = new Cookies();

export default class MisPedidos extends React.Component {
  state = {    
    value:"Pendiente",
    products: [],
    estado:"pendiente",
    
  };
  
  aumentar = ()=>{
    var select = document.getElementById("combo-carrito");
    //this.setState({value: select.value});
  }
  
  componentDidMount() {
    if (cookies.get('tipoUsuario')==='cliente') {
      const idU = cookies.get('ci')
      axios.get("https://alfasoft-api.herokuapp.com/pedidousuario/"+idU).then((res) => {
      const products = res.data;
      console.log(res.data);
      this.setState({ products });
      console.log(products)
      //estoy probando una modificacion
    });
      
    } else {
      axios.get(`https://alfasoft-api.herokuapp.com/pedidousuario`).then((res) => {
      const products = res.data;
      this.setState({ products });
      //console.log(products)
      //estoy probando una modificacion
    });
    }
  }
  
  render() {
    
    
    //  returns the whole pedidos
    return (
      <div className="conte">
        {this.state.products.map((item) => (
          <div className='container-pedido'>
              <div className = "numeroPro">
                <div className="cajas">
                <div className= "nu"> 
                Pedido número: {num=num+1}
                  <Estado key={item.idpedido} idPedido={item.idpedido} value={item.estado}></Estado>
                    
                  </div>
              <div  className="row-mi no-gutters py-2 container contenedor-indi">     
                <Pedidito key={item.id} productito={item} product={'producto mal parido '}/>
              </div>  
              </div>
              </div>
        
          </div>
        ))} 
        <div hidden>
        {num=0}         
        </div>
      </div>
    );
  }

}

class Estado extends React.Component {
  constructor(props) {
      super(props);
      this.state = {value:this.props.value};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
      this.setState({value: event.target.value});
      console.log(event.target.value+'   '+ this.props.idPedido)
      //realizar la actualizacion en la bd
      axios.post("https://alfasoft-api.herokuapp.com/estadoPedido/", {estado: event.target.value,idpedido:this.props.idPedido}, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
      
  }

  handleSubmit(event) {
      alert('Your favorite flavor is: '+ this.state.value);
      event.preventDefault();
  }

  

  render() {
    {/*se elimino la funcion que estaba sobrando */}
    
      const {value} = this.state;
      return (
              <label className="estado"><p className = "combobox-estado-carrito2" >{value}</p>
                  {cookies.get('tipoUsuario')==='admin' && value !=='Entregado' &&
                      <select  className="combobox-estado-carrito" id="combo-carrito" value={this.state.value} onChange={this.handleChange}>
                          <option value="Pendiente">Pendiente</option>
                          <option value="En Camino">En Camino</option>
                          <option value="Entregado">Entregado</option>
                      </select>
                  }
                  { value === 'Entregado' && cookies.get('tipoUsuario')==='admin' && 
                    <select disabled className="combobox-estado-carrito " id="combo-carrito1" value ='Entregado' onChange={this.handleChange}>
                     <option value="Entregado">Entregado</option>
                    </select>
                  }

              </label>
      );
  }
}
