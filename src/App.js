import React,{Component}from 'react';
import productos from './ejemplo/Productos.json';
import Productos from './components/productos.js';

import Titulo from './components/Titulo.js';
import Btns from './components/btns';

class App extends Component{
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
 
  render(){
    return<div>
        <Titulo/>
       <Productos 
        productos={productos} 
        doneW={this.doneW} 
        EliminarProducto={this.EliminarProducto} 
      />
       <Btns/>
    </div>
  }
}
export default App;
