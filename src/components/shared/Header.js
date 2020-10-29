import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../../contexts/CartContext';

/*IMPORTANDO ESTILOS */



const Header = () => {

    const {itemCount} = useContext(CartContext);

    return ( 
        <header className="header-main">
            <Link to='/'>Tienda </Link>
            <Link to='/acercade'>Acerca de</Link>
            <Link to='/carrito'>Carrito ({itemCount})</Link>
        </header>
     );
}
 
export default Header;
