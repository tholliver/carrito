import React from 'react';
import Layout from '../../components/Layout';
import ProductsGrid from './ProductsGrid';

const Store = () => {
    
    return ( 
        <Layout title="Tienda" description="Store page" >
            <div >
                <div>
                    <h1>Tienda</h1>
                    <p>Esta es la pagina de la tienda.</p>
                </div>
                <ProductsGrid/>
            </div>
        </Layout>
     );
}
 
export default Store;