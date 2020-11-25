import React, { useContext } from 'react';
import { Link,withRouter } from "react-router-dom";
import { CartContext } from '../../contexts/CartContext';

/*IMPORTANDO ESTILOS */



const Header = () => {

    const {itemCount} = useContext(CartContext);

    return ( 
        <header className="header-main">
            <Link className="link-header" to='/'>Tienda  </Link>
            <Link className="link-header" to='/acercade'>Acerca de</Link>
            <Link className="link-header" to='/carrito'>Carrito ({itemCount})</Link>
            <Link className="link-header" to='/mis-pedidos'>Mis pedidos</Link>
        </header>
     );
}
 
export default withRouter(Header);
