import React, { Component } from 'react'
import './styles.css';


export default class btns extends Component {
    render() {
        return (
            <div className="container">
        <div className="container-buttons ">
            <div className="boton-aceptar btn">
                <a href="#">Aceptar</a>
            </div>
            <div className="boton-cancelar btn">
                <a href="#">Cancelar</a>
            </div>
            <div className="boton-vaciar btn">
                <a href="#">Vaciar Carrito</a>
            </div>
        </div>
        </div>
        )
    }
}
