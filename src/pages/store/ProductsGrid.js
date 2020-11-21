import React, { useContext } from "react";
import ProductItem from "./ProductItem";
import { ProductsContext } from "../../contexts/ProductsContext";

const ProductsGrid = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div>
      <div className="row-items">
        <div className="separacion">
          <div className="py-3-numero-de-productos"> <h3>{products.length} Items</h3></div>
        </div>
      </div>
      <div>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default ProductsGrid;
