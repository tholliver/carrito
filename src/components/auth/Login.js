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
        }else{if (this.props.ubicacion==="carrito") {
            window.location.href="./pago";
        } else {
            
            //window.location.href="./pago";
        }
       }

    }
    render() {

    return (
        <div className="container login-container">
            <div className="containerSecundario">
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
            <button className="btn btn-primary" onClick={()=> this.iniciarSesion1()}>Iniciar Sesión</button>
            <a href="/"> registarse</a>
          </div>
        </div>  
        </div>
    )
 }
}

export default Login;