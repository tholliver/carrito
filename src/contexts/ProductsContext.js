import React, { createContext, useState } from 'react';
import { dummyProducts } from '../services/dummy';

export const ProductsContext = createContext()
//---------------------------------------------------------
let dummyProduct = [];
let url = "https://alfasoft-api.herokuapp.com/productos";

async function getapi(url) {
  
  // Storing response
  const response = await fetch(url);

  // Storing data in form of JSON
  var products = await response.json();
  //console.log(products);
  
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
getapi(url);
console.log(dummyProduct);
//export const dummyProducts = dummyProduct;

//-------------------------------------------------------
const ProductsContextProvider = ({children}) => {

    const [products] = useState(dummyProduct);

    return ( 
        <ProductsContext.Provider value= {{products}} >
            { children }
        </ProductsContext.Provider>
    
     );
}
export default ProductsContextProvider;