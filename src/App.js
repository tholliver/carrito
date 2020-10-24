import React,{Component}from 'react';
import productos from './ejemplo/Productos.json';
import Productos from './components/productos.js';

import Titulo from './components/Titulo.js';
import Btns from './components/btns';

class App extends Component{
  state= {
    productos:productos
  } 
 
  render(){
    return<div>
        <Titulo/>
       <Productos 
        productos={productos} 
      />
       <Btns/>
    </div>
  }
}
export default App;
