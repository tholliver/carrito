import React, { Component } from 'react';


export default class Titulo extends Component {
    render() {
        return (<div className="row no-gutters py-2 containe">
        
        
            <div className="container-detalles">
                    <h3 className="columna">Producto</h3>
                
            </div>
            <div className="container-detalles">
                    <h3 className="columna">Precio Unitario <i className="fas fa-dollar-sign"></i></h3>

            </div>
            
            <div className="container-detalles">
                <div className="titulo-detalles">
                    <h3 className="columna">Cantidad</h3>
                </div>
            </div>
            <div className="container-detalles">
                <div className="titulo-detalles">
                    <h3 className="columna">Modificar </h3>
                </div>
            </div>
            <div className="container-detalles">
                <div className="titulo-detalles">
                    <h3 className="columna">Subtotal </h3>
                </div>
            </div>
        </div>
        )
    }
}
