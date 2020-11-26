import React, { useContext, Component } from "react";
import ProductItem from "./ProductItem";
import { ProductsContext } from "../../contexts/ProductsContext";

//sconst ProductsGrid= ()=>{} some ramdom comment
let dummyProduct = [];
let m = 0;
class ProductsGrid extends Component {
  state = {
    productos: [],
  };

<<<<<<< HEAD
  async componentDidMount() {
    const res = await fetch("https://alfasoft-api.herokuapp.com/productos");
=======
  
  
  async componentDidMount(){
    
    const res = await fetch("https://alfasoft-api.herokuapp.com/productos")
>>>>>>> 1aec0f9c87f2b96725531d5e2138fa6268b7f015
    const products = await res.json();
    // this.setState({products: date})
    m = dummyProduct.length;
    if (m == 0) {
      for (let i = 0; i < products.length; i++) {
        dummyProduct.push({
          id: products[i].idproducto,
          name: products[i].nombre,
          price: products[i].precio,
          photo: products[i].img,
          cantDisponible: products[i].cantidad,
        });
      }
    }
    this.setState({ productos: dummyProduct });
  }

  // const { products } = useContext(ProductsContext);
  render() {
    return (
      <div>
        <div className="row-items">
          <div className="separacion">
            <div className="py-3-numero-de-productos">
              {" "}
              <h3>{this.state.productos.length} Items</h3>
            </div>
          </div>
        </div>{" "}
        <div className="container-product">
          {this.state.productos.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))} 
        </div>
      </div>
    );
  }
}

export default ProductsGrid;
