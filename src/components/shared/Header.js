import React, { useContext } from 'react';
import { Component } from 'react';
import { Link,withRouter } from "react-router-dom";
import swal from '@sweetalert/with-react';
import { CartContext } from '../../contexts/CartContext';
import Login from '../auth/Login';
import Cookies from 'universal-cookie';

/*IMPORTANDO ESTILOS */

var name = 'Iniciar Sesion'
const cookies = new Cookies();

const Header = () => {

    const {itemCount} = useContext(CartContext);

    const loginPedidos =()=>{
        if (cookies.get('username')) {
            window.location.href='./mis-pedidos';
        } else {
            swal(
                <div> 
                    <Login key='15252525' ubicacion='pedidos'></Login>
                  
                </div>,{button: "Cancelar",}
              );
        }
        name=cookies.get('username');
    }

    const cerrarSesion=()=>{
        cookies.remove('id', {path: "/"});
        cookies.remove('username', {path: "/"});
        cookies.remove('tipoUsuario', {path: "/"});
        window.location.href='./';
    }
    const loginA =()=>{
        if (cookies.get('username')) {
            swal(
                <div> 
                    <h3>cerrar Sesion</h3>
                     <button onClick={cerrarSesion}>Cerrar</button>
                </div>,{button: "Cancelar",}
              );
        } else {
            swal(
                <div> 
                    <Login key='15252525' ubicacion='loginPrincipal'></Login>
                  
                </div>,{button: "Cancelar",}
              );
        }
        
    }
    const isUsuario=()=>{
        if (cookies.get('username')) {
            return true;
        } else {
            return false
        }
    }

    return ( 
        <header className="header-main">
            <Link className="link-header" to='/'>Tienda  </Link>
            <Link className="link-header" to='/acercade'>Acerca de</Link>
            <Link className="link-header" to='/carrito'>Carrito ({itemCount})</Link>
            { cookies.get('tipoUsuario')!=='admin' &&
            <Link className="link-header" onClick={loginPedidos} >Mis pedidos</Link>
            }
            { cookies.get('tipoUsuario')==='admin' &&
            <Link className="link-header" onClick={loginPedidos} >Pedidos</Link>
            
            }
            <div>
                    {isUsuario()  && <Link className="link-header" onClick={loginA} >{cookies.get('username')}</Link>}
                    {!isUsuario() && <Link className="link-header" onClick={loginA} >Iniciar Sesion</Link>}
                    {/*<button onClick={loginA}>{name}</button>*/}
           </div>
            
 
        </header>
     );
}
export default withRouter(Header);
