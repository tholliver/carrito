import React, { Component } from 'react';
import './styles.css';


export default class Titulo extends Component {
    render() {
        return (<div className="container">
        <div className="container-title">
            <h2 className="title">Tu Carrito de Compras</h2>
            <div className="icon">
                <i className="fas fa-shopping-cart"></i>
            </div>
        </div>
        
        <div className="container-productos">
            <div className="container-detalles">
                <div className="titulo-detalles">
                    <h3 className="columna">Producto</h3>
                </div>
            </div>
            <div className="container-detalles">
                <div className="titulo-detalles">
                    <h3 className="columna">Precio Unitario <i className="fas fa-dollar-sign"></i></h3>
                </div>
            </div>
            <div className="container-detalles">
                <div className="titulo-detalles">
                    <h3 className="columna">Descuento Unitario <i className="fas fa-dollar-sign"></i></h3>
                </div>
            </div>
            <div className="container-detalles">
                <div className="titulo-detalles">
                    <h3 className="columna">Cantidad</h3>
                </div>
            </div>
            <div className="container-detalles">
                <div className="titulo-detalles">
                    <h3 className="columna">Total <i className="fas fa-dollar-sign"></i></h3>
                </div>
            </div>
        </div>
        </div>
        )
    }
}
