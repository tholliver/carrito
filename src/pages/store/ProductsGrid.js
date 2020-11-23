import React, { useContext,Component } from "react";
import ProductItem from "./ProductItem";
import { ProductsContext } from "../../contexts/ProductsContext";


//sconst ProductsGrid= ()=>{}
let dummyProduct = [];
let m =0;
class ProductsGrid extends Component {
  state ={
    productos:[]
  };

  
  
  async componentDidMount(){
    
    const res = await fetch("http://alfasoft-api.herokuapp.com/productos")
    const products = await res.json();
   // this.setState({products: date})
  m = dummyProduct.length;
  if(m==0){
    for (let i = 0; i < products.length; i++) {
      dummyProduct.push({
        'id': products[i].idproducto,
        'name': products[i].nombre,
        'price': products[i].precio,
        'photo': products[i].img,
        'cantDisponible': products[i].cantidad,
      });

  }
}
  this.setState({productos:dummyProduct});

}


 // const { products } = useContext(ProductsContext);
render(){
  return (
    <div>
      <div className="row-items">
        <div className="separacion">
          <div className="py-3-numero-de-productos"> <h3>{this.state.productos.length} Items</h3></div>
        </div>
      </div>
      <div>
        {this.state.productos.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
      <div></div>
    </div>
  );}
};

export default ProductsGrid;
