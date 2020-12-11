import React, { useContext } from 'react';
import { Component } from 'react';
import { Link,withRouter } from "react-router-dom";
import swal from '@sweetalert/with-react';
import { CartContext } from '../../contexts/CartContext';
import Login from '../auth/Login';
import Cookies from 'universal-cookie';
import axios from "axios";

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
        cookies.remove('ci', {path: "/"});
        cookies.remove('username', {path: "/"});
        cookies.remove('tipoUsuario', {path: "/"});
        cookies.remove('name', {path: "/"});
        cookies.remove('apellido', {path: "/"});
        window.location.href='./';
    }
    const loginA =()=>{
       console.log( cookies.get('name') + '  '+ cookies.get('apellido'));
       console.log( cookies.get('username'));
       console.log( cookies.get('ci'));
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
    const obtener=async()=>{
        const ci = cookies.get('ci');
        if (cookies.get('username')==='admin') {
            cookies.set('name', 'Alfasoft', {path: "/"});
            cookies.set('apellido', '', {path: "/"});
            return 'Alfasoft'
        } else { 
            const nombre = await axios.get('http://api-thejuniors.herokuapp.com/api/accountData/'+ci)
            .then(response=>{
                return response.data;
            })
            .then(response=>{
                var respuesta=response[0]
                cookies.set('name', respuesta.usuarioNombre, {path: "/"});
                cookies.set('apellido', respuesta.usuarioApellido, {path: "/"});
                return respuesta.usuarioNombre+' '+respuesta.usuarioApellido;
            });
            return nombre;
        }
            
       }
    const isUsuario=()=>{
        if (cookies.get('username')) {
            
            obtener();
            if (cookies.get('name')) {
                return true
            } else {
                return false
            }
            
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
                    {isUsuario()   && <Link className="link-header" onClick={loginA} >{cookies.get('name')+' '+cookies.get('apellido')}</Link>}
                    {!isUsuario() && <Link className="link-header" onClick={loginA} >Iniciar Sesion</Link>}
                    {/*<button onClick={loginA}>{name}</button>*/}
           </div>
            
 
        </header>
     );
}
export default withRouter(Header);
