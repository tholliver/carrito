import React, { Component } from 'react';
import "./Styles.css"


export default class Titulo extends Component {
    render() {
        return (<div className="containe contenedor-campos-carrito">
        
        
            <div className="container-detalles contenedor-titulos-campos">
                    <h3 className="columna">Producto</h3>
                
            </div>
            <div className="container-detalles contenedor-titulos-campos">
                    <h3 className="columna">Precio Unitario Bs.</h3>
            </div>
            
            <div className="container-detalles ">
                <div className="titulo-detalles contenedor-titulos-campos">
                    <h3 className="columna">Cantidad</h3>
                </div>
            </div>
            <div className="container-detalles ">
                <div className="titulo-detalles contenedor-titulos-campos">
                    <h3 className="columna">Modificar </h3>
                </div>
            </div>
            <div className="container-detalles">
                <div className="titulo-detalles contenedor-titulos-campos">
                    <h3 className="columna">Subtotal </h3>
                </div>
            </div>
            
        
        </div>
        )
    }
}
