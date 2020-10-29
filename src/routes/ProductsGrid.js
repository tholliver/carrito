import React, { useContext } from 'react';
import ProductItem from './ProductItem.js';
import { ProductsContext } from '../../contexts/ProductsContext';

const ProductsGrid = () => {

    const { products} = useContext(ProductsContext)

    return ( 
        <div className={''}>
            <div className="">
                <div className="">
                    <div className=''>
                        {products.length} Products
                    </div>
                </div>
            </div>
            <div className={''}>

                {
                    products.map(product => (
                        <ProductItem key={product.id} product={product}/>
                    ))
                }

            </div>
            <div className={''}>

            </div>
        </div>
     );
}
 
export default ProductsGrid;