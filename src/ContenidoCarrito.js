import React from 'react';
import './styles.css';

function ContenidoCarrito(props){
    return(
        <div className="container">
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
                <div className="contenido-detalles">
                    <p>Producto1</p>
                </div>
            </div>
            <div className="container-detalles">
                <div className="titulo-detalles">
                    <h3 className="columna">Precio Unitario <i className="fas fa-dollar-sign"></i></h3>
                </div>
                <div className="contenido-detalles">
                    <p>precioUnitario1</p>
                </div>
            </div>
            <div className="container-detalles">
                <div className="titulo-detalles">
                    <h3 className="columna">Descuento Unitario <i className="fas fa-dollar-sign"></i></h3>
                </div>
                <div className="contenido-detalles">
                    <p>descuentoUnitario1</p>
                </div>
            </div>
            <div className="container-detalles">
                <div className="titulo-detalles">
                    <h3 className="columna">Cantidad</h3>
                </div>
                <div className="contenido-detalles">
                    <p>Cantidad1</p>
                </div>
            </div>
            <div className="container-detalles">
                <div className="titulo-detalles">
                    <h3 className="columna">Total <i className="fas fa-dollar-sign"></i></h3>
                </div>
                <div className="contenido-detalles">
                    <p>total1</p>
                </div>
            </div>
        </div>
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
    );
}

export default ContenidoCarrito;