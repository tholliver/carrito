import React from 'react';
import Layout from '../../components/Layout';
import ProductsGrid from './ProductsGrid';

import "./Styles.css";

const Store = () => {
    
    return ( 
        <Layout title="Tienda" description="Store page" >
            <div className="contenedor-tienda">
                <div className="titulo-tienda">
                    <h1 className="tienda">
                        Tienda<i className="fas fa-store"></i>
                    </h1>
                </div>
                <ProductsGrid/>
            </div>
        </Layout>
     );
}
 
export default Store;