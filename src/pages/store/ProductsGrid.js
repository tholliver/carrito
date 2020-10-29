import React, { useContext } from "react";
import ProductItem from "./ProductItem";
import { ProductsContext } from "../../contexts/ProductsContext";

const ProductsGrid = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div>
      <div className="row">
        <div className="col-sm-8">
          <div className="py-3">{products.length} Items</div>
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
