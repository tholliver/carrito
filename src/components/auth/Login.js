import React, { Component } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';

const baseUrl='https://api-thejuniors.herokuapp.com/api/user/'
const cookies = new Cookies();

class Login extends Component {
    state={
        form:{
            username: '',
            password: ''
        },
        usuario:''
    }
   
    handleChange=async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }
    iniciarSesion1 =()=>{
        console.log({username: this.state.form.username, password: (this.state.form.password)})
        
        cookies.set('username', this.state.form.username, {path: "/"});
        if(this.props.ubicacion==="loginPrincipal"){
        window.location.href="./";
        }else { if (this.props.ubicacion==="carrito") {
            window.location.href="./pago";
        } else {
            
            //window.location.href="./pago";
        }
       }

    }

    iniciarSesion=async()=>{
        console.log(baseUrl+this.state.form.username,'hola soy yo');
        await axios.get(baseUrl+this.state.form.username)
        .then(response=>{
            return response.data;
        })
        .then(response=>{
            console.log(response.CI,'hola soy yo4');
           // {"CI":"8585998","nombreUsuario":"omar10","password":"omar123456","tipoUsuarioNombre":"Cliente","nombreEstado":"Habilitado"}
            if(response.password===this.state.form.password){
                console.log(response.password,'hola soy yo');
               // var respuesta=response[0];
                cookies.set('ci', response.CI, {path: "/"});
                cookies.set('username', response.nombreUsuario, {path: "/"});
                alert(`Bienvenido ${response.nombreUsuario}`);
                if(this.props.ubicacion==="pedidos"){
                    window.location.href="./mis-pedidos";
                    }else { if (this.props.ubicacion==="carrito") {
                        window.location.href="./pago";
                    } else {
                        window.location.href="./";
                    }
                   }
                       
            }else{
                alert('El usuario o la contraseña no son correctos');
            }
        })
        .catch(error=>{
            console.log(error);
        })

    }


    render() {

    return (
        <div className="container login-container">
            <div className="containerSecundario">
            <div><h2>Login</h2></div>
             <div className="form-group">
            <label>Usuario: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="username"
              onChange={this.handleChange}
            />
            <br />
            <label>Contraseña: </label>
            <br />
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={this.handleChange}
            />
            <br />
            <button className="btn btn-primary" onClick={()=> this.iniciarSesion()}>Iniciar Sesión</button>
            <a href="/"> registarse</a>
          </div>
        </div>  
        </div>
    )
 }
}

export default Login;