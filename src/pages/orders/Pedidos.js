import React from 'react';
import axios from 'axios';

export default class Pedidos extends React.Component {
  state = {
    products: []
  }

  componentDidMount() {
    axios.get(`https://alfasoft-api.herokuapp.com/pedido`)
      .then(res => {
        const products = res.data;
        this.setState({ products });
        console.log(products);
      })
  }

  render() {
    return (

      <ul>
          
    { this.state.products.map(item => <li>Codigo del pedido: {item.idpedido } <br/> { item.direccion }</li>) }
      </ul>
    )
  }
}
