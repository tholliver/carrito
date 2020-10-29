import React, { Component, useContext } from "react";
import { Link } from "react-router-dom";


/*IMPORETS TEMPS */
import productos from '../../ejemplo/Productos.json';
import Productos from '../../components/productos.js';

import Titulo from '../../components/Titulo.js';
import Btns from '../../components/btns';

//const Cart = () => {



class Cart extends Component {
  //Aqui van las viriables que modifican el ocntexto del carrito
  /* VISTA TEMPORAL DE PRODUCTOS
   */

  state= {
    productos:productos
  } 
   EliminarProducto=(id)=>{
    const newProducto= this.state.productos.filter(Producto=>Producto.id !==id)
    this.setState({productos:newProducto})
  }
  
  doneW =(id) =>{
    const newProductos = this.state.productos.map(
      producto =>{
        if(producto.id ===id){
          producto.done =!producto.done
        }
        return producto
      }
      );
    this.setState({productos:newProductos})
  }


render(){return (
  <div>
    <h1>Carito</h1>
    <p>Esta es la pagina del carrito.</p>
    <div>
        <Titulo/>
       <Productos 
        productos={productos} 
        doneW={this.doneW} 
        EliminarProducto={this.EliminarProducto} 
      />
       <Btns/>
    </div>
    
    <Link to="/">Seguir comprando</Link>
  </div>
);}
  
};

export default Cart;
