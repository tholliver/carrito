import React, { Component } from 'react';
import Producto from './producto.js';

export default class productos extends Component {
    render() {           
    return this.props.productos.map(producto=>
        <Producto 
             producto={producto}
             key={producto.id}
        />)
    }
}
