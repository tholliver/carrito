import React, { Component } from 'react'
import './styles.css';
export default class producto extends Component {


    
    render() {
        const{producto} = this.props;
        return (
            <div className="container">            
            <div className="container-productos" >
            <input type="checkbox" className="boton"  ></input>
                <div className="container-detalles">
                    <div className="contenido-detalles">
                        <p >{producto.nombre}</p>
                    </div>
                </div>
                <div className="container-detalles">
                    <div className="contenido-detalles">
                        <p >{producto.precioUnitario}</p>
                    </div>
                </div>
                <div className="container-detalles">
                    <div className="contenido-detalles">
                        <p >{producto.descuentoU}</p>
                    </div>
                </div>
                <div className="container-detalles">
                    <div className="contenido-detalles">
                        <p >{producto.cantidad}</p>
                        <div className="btnCambiar">
                            <button style={btnD}>+</button>
                            <br/>
                            <button style={btnD}>-</button> 
                        </div>
                    </div>
                </div>
                <div className="container-detalles">
                    <div className="contenido-detalles">
                        <p >total1</p>
                    </div>
                </div>
                <button >
                    X
                </button>
            </div>
        </div>
        );
    }
}

const btnD={
    fontsize:'500px',
    background:'#ea2027',
    color:'#fff',
    borderRadius: '50%',
    cursor: 'pointer',
    width: '30px',
    height: '30px'
}