import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nombres from "./Nombres";
import "./style.css";

function App() {
  /* HERE SHOULD */
  const team = [
    {
      nombre: "Miguel LaMadness",
      gitUser: "miguel" /*Nombre de usario de git Local*/,
    },
    
    {
      nombre: "Omar Trujillo",
      gitUser: "userGitName" /*Nombre de usario de git Local*/,
    },
    {
      nombre: "Luis Vallejos Vallejos",
      gitUser: "userGitName" /*Nombre de usario de git Local*/,
    },

/*aQUI */
    {
      nombre: "Tu nombre",
      gitUser: "userGitName" /*Nombre de usario de git Local*/,
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Nombres team={team}/>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function tabla() {
  return(
    <div id = "styleTable">
      <table id="tablaModelo">
        <tr>
          <th>Producto</th>
          <th>Precio Unitario</th>
          <th>Descuento Unitario</th>
          <th>Cantidad</th>
          <th>Total Producto</th>
        </tr>
        <tr>
          <td>Producto1</td>
          <td>Precio1</td>
          <td>Descuento Unitario1</td>
          <td>cantidad1</td>
          <td>Total Producto1</td>
        </tr>
        <tr>
          <td>Producto2</td>
          <td>Precio2</td>
          <td>Descuento Unitario2</td>
          <td>cantidad2</td>
          <td>Total Producto2</td>
        </tr>
        <tr>
          <td>Producto3</td>
          <td>Precio3</td>
          <td>Descuento Unitario3</td>
          <td>cantidad3</td>
          <td>Total Producto3</td>
        </tr>
        <tr>
          <td>Producto4</td>
          <td>Precio4</td>
          <td>Descuento Unitario4</td>
          <td>cantidad4</td>
          <td>Total Producto4</td>
        </tr>
        <tr>
          <td>Producto5</td>
          <td>Precio5</td>
          <td>Descuento Unitario5</td>
          <td>cantidad5</td>
          <td>Total Producto5</td>
        </tr>
        <tr id="contenidoTabla"></tr>
      </table>
    </div>
  );
}

function botones() {
  return(
    <div>
      <button>ACEPTAR</button>
      <button>CANCELAR</button>
    </div>
  );
}




export default tabla;
