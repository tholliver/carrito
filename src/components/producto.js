import React, { Component } from 'react'
import './styles.css';
export default class producto extends Component {

    ff(){
        return{
            fontsize: '40px',
            color: this.props.producto.done ? 'red' : 'silver',
            textDecoration: this.props.producto.done ? 'line-through' : 'none',
            textDecorationStyle: 'solid'
        }
    }
    
    render() {
        const{producto} = this.props;
        return (
            <div className="container">            
            <div className="container-productos" >
            <input type="checkbox" className="boton" onChange={this.props.doneW.bind(this, producto.id)} ></input>
                <div className="container-detalles">
                    <div className="contenido-detalles">
                        <p style={this.ff()}>{producto.nombre}</p>
                    </div>
                </div>
                <div className="container-detalles">
                    <div className="contenido-detalles">
                        <p style={this.ff()}>{producto.precioUnitario}</p>
                    </div>
                </div>
                <div className="container-detalles">
                    <div className="contenido-detalles">
                        <p style={this.ff()}>{producto.descuentoU}</p>
                    </div>
                </div>
                <div className="container-detalles">
                    <div className="contenido-detalles">
                        <p style={this.ff()}>{producto.cantidad}</p>
                        <div className="btnCambiar">
                            <button style={btnD}>+</button>
                            <br/>
                            <button style={btnD}>-</button> 
                        </div>
                    </div>
                </div>
                <div className="container-detalles">
                    <div className="contenido-detalles">
                        <p style={this.ff()}>total1</p>
                    </div>
                </div>
                <button onClick={this.props.EliminarProducto.bind(this, producto.id)}>
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