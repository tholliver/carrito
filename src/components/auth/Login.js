import React, { Component } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import "./estiloLogin.css"

//const baseUrl='https://api-thejuniors.herokuapp.com/api/user/'
const baseUrl='https://alfasoft-api.herokuapp.com/auth'
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

    iniciarSesion=async()=>{
        console.log(baseUrl+this.state.form.username,'hola soy yo');
        if(this.state.form.username==='admin'){
           // cookies.set('name', 'alfasolft', {path: "/"});
            if(this.state.form.password==='12345678'){
            cookies.set('username', this.state.form.username, {path: "/"});
            cookies.set('tipoUsuario', 'admin', {path: "/"});
            alert(`Bienvenido `);
            window.location.href="./mis-pedidos";
            }else{
            alert('El usuario o la contraseña no son correctos');
            }
        }else{
        await axios.post(baseUrl,this.state.form, {headers: { "Content-Type": "application/json" }})
        .then(response=>{
            return response.data;
        })
        .then(response=>{
            console.log(response[0],'hola soy omar');
            console.log(this.state.form,'hola so');
           // {"CI":"8585998","nombreUsuario":"omar10","password":"omar123456","tipoUsuarioNombre":"Cliente","nombreEstado":"Habilitado"}
            if(response.length>0){
                console.log(response.password,'hola soy yo');
                var respuesta=response[0];
                cookies.set('ci', respuesta.idcliente, {path: "/"});
                cookies.set('username', respuesta.username, {path: "/"});
                cookies.set('tipoUsuario', respuesta.tipoUsuario, {path: "/"});
                cookies.set('name', respuesta.nombre, {path: "/"});
                cookies.set('apellido', respuesta.apellido, {path: "/"});
                alert(`Bienvenido ${respuesta.nombre}`);
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

    }


    render() {

    return (
        <div className="container login-container">
            <div className="containerSecundario">
                <div className="titulo-contenedor"><h2>Login</h2></div>
                <div className="form-group">
                    <div className="descriptor">
                        <label>Usuario: </label>
                    </div>
                    <br />
                    <input
                        type="text"
                        className="form-control"
                        name="username"
                        onChange={this.handleChange}
                        placeholder="Ingrese su nombre de usuario"
                    />
                    <div className="descriptor descriptor-pwd">
                        <label className="passwd">Contraseña: </label>
                    </div>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        onChange={this.handleChange}
                        placeholder="Ingrese su contraseña"
                    /> 
                <div className="options">
                    <button className="btn btn-primary btn-iniciar" onClick={()=> this.iniciarSesion()}>Iniciar Sesión</button>
                    <a href="/"> registarse</a>
                    
                </div>
            </div>
        </div>  
        </div>
    )
    }
}

export default Login;