
import './estilos.css';

import React, { useState } from 'react';
import guia2 from './guia2.png'
import swal from '@sweetalert/with-react'


function Formulario() {
  function validar(){
    console.log("y dale funca")
    var todo_correcto = true;
    var expresion = /^[A-Z+ ]+$/i;
    var email = document.getElementById('inputNombre').value;
    if (!expresion.test(email)){
        todo_correcto = false;
    }


    if(isNaN(document.getElementById('inputNumero').value)){
        todo_correcto = false;
    }
    if(document.getElementById('inputNumero').value===""){
      todo_correcto = false;
    }
    if(isNaN(document.getElementById('inputMes').value)){
      todo_correcto = false;
  }
  if(document.getElementById('inputMes').value===""){
    todo_correcto = false;
  }
  if(isNaN(document.getElementById('inputAno').value)){
    todo_correcto = false;
  }
  if(document.getElementById('inputAno').value===""){
  todo_correcto = false;
  }
  if(isNaN(document.getElementById('inputCVV').value)){
    todo_correcto = false;
  }
  if(document.getElementById('inputCVV').value===""){
  todo_correcto = false;
  }
  if(document.getElementById('inputNombre').value===""){
    todo_correcto = false;
    }
    
    if(!todo_correcto){
    }else{
      swal({
        text: 'Transacción exitosa',
        icon: 'success',
        timer: 2000
      })
      
    }
    
    return todo_correcto;
    } 
  const pagoCancelado=()=>{
    console.log("y dale funca")
    swal("Se canceló la transacción");
  };



  const mostrame =()=>{
    swal(
      <img src={guia2}/>
      )
  }
  const p2 =()=>{
    
     

  }
  function handleClick() {
    console.log('The link was clicked.');
    
  }
return (
    <div>
      <form id="formulario-tarjeta" class="formulario-tarjeta" onsubmit='return validar()'>
      
      <h2>Ingresa los datos de tu tarjeta</h2>
   
        <div className="grupo">
            <h4 for="inputNumero"> Número de tarjeta </h4>
            <input className= "pro" type="text" id="inputNumero" minlength="13" maxlength="18" autocomplete="off"  required pattern="[0-9]+"  />
        </div>
        <br/>
        <div className="grupo">
            <h4 for="inputNombre">Nombre titular de la tarjeta</h4>
            <input className= "pro" type="text" id="inputNombre" maxlength="30" autocomplete="off" required pattern="[a-zA-Z ]{2,254}" />
        </div>
        
        <br/>
        <div className="grupo expira">
          <label for="selectMes">Fecha de expiración</label>
          <br/>
          
          <div className="flexbox">
              <div className="grupo-select">
              <label className= "pro2" for="inputMes">MM</label>
              <br/>
            <input className= "pro22" type="text" id="inputMes" maxlength="30" required pattern="[0-9]+" minlength="1" maxlength="2"/>
   
              </div>
              <p className= "pro44">   /</p>
              <div className="grupo-select">
              <label className= "pro3" for="inputAno">AA</label>
              <br/>
            <input className= "pro33" type="text" id="inputAno" maxlength="30"  required pattern="[0-9]+" minlength="2" maxlength="2"/>
               
              </div>
            </div>
            </div>
        
        <div className="grupo ccv">
        
            <label for="inputCVV">Código de seguridad</label>
            <div align="center">
            
            <input className="segu" type="text" id="inputCVV" maxlength="4"  minlength="3"  required  pattern="[0-9]+" />
            <img  align="center"src={guia2}/>
            </div>
            
        
        </div>
        <br/>
        <button className="contenedor-btn" to="/mis-pedidos"  formnovalidate type="submit"onClick={validar}  >Realizar pago</button>
        </form>
        <br/>
        <button className="contenedor-btn" type="submit"onClick={pagoCancelado}  >Cancelar</button>
    
    </div>
  );
}

export default Formulario;
