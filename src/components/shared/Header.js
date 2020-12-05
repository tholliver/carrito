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

    return ( 
        <header className="header-main">
            <Link className="link-header" to='/'>Tienda  </Link>
            <Link className="link-header" to='/acercade'>Acerca de</Link>
            <Link className="link-header" to='/carrito'>Carrito ({itemCount})</Link>
            <Link className="link-header" to='/mis-pedidos'>Mis pedidos</Link>
            <div>
             <InLogin></InLogin>
            </div>
 
        </header>
     );
}
export default withRouter(Header);
var na = 'omar t'
class  InLogin extends Component{
     
    componentDidMount() {
        if(cookies.get('username')){
            
            name=na;
        }
    }
    
    render(){
        const tipoU="loginPrincipal";
        const loginA =()=>{
            if (cookies.get('username')) {
                swal(
                    <div> 
                        <h3>cerrar Sesion</h3>
                      
                    </div>,{button: "Cancelar",}
                  );
            } else {
                swal(
                    <div> 
                        <Login key='15252525' ubicacion={tipoU}></Login>
                      
                    </div>,{button: "Cancelar",}
                  );
            }
            
            }
            return(
                <div>
                    <Link className="link-header" onClick={loginA} >{name}</Link>
                    {/*<button onClick={loginA}>{name}</button>*/}
                </div>
            )
        }
    }
