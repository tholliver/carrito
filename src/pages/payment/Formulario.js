
import './estilos.css';

import React, { useState } from 'react';
import guia2 from './guia2.png'
import swal from '@sweetalert/with-react'


function Formulario() {

  

  function validar2(){
    
  }
  
  function validar(){
    var numeTar=parseInt(document.getElementById('inputNumero').value); 
    console.log(numeTar);
    var numeSeg=parseInt(document.getElementById('inputCVV').value); 
    console.log(numeSeg);

    var numeMes="";
    numeMes=parseInt(document.getElementById('inputMes').value); 
    console.log(numeMes);
    var num111=""+numeMes.toString;
    console.log(num111);

    var numeAnio="";
    numeAnio=parseInt(document.getElementById('inputAno').value); 
    console.log(numeAnio);
    console.log(numeAnio.length);

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
  //el numero sea mayor a 2 digitos
    if(numeTar <100000000000000){
      todo_correcto = false;
      console.log('true')
  }


  //el numero sea mayor a 2 digitos
  if(numeSeg <100){
      todo_correcto = false;
      console.log('true')
  }

  if(document.getElementById('inputNombre').value===""){
    todo_correcto = false;
    }
    
    if(!todo_correcto){
    }else{
      //ocultando el boton de pago en efectivo 
      document.getElementById('probandoID').style.display="none"
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
      
      <h1>Ingresa los datos de tu tarjeta</h1>
       {/*input para ingreso del numero de tarjeta*/}
        <div className="grupo">
            <label for="inputNumero">Número de tarjeta</label>
            <input className= "pro" type="text" id="inputNumero" minlength="13" maxlength="18" autocomplete="off"  required pattern="[0-9]+"  />
        </div>
        <br/>
        {/*input para ingreso del nombre titular de la tarjeta*/}
        <div className="grupo">
            <label for="inputNombre">Nombre titular de la tarjeta</label>
            <input className= "pro" type="text" id="inputNombre" maxlength="30" autocomplete="off" required pattern="[a-zA-Z ]{2,254}" oninvalid="this.setCustomValidity('Hola')" />
        </div>
        
        <br/>
        <div className="grupo expira">
          <label for="selectMes">Fecha de expiración</label>
          <br/>
          <label for="selectMes">MM/AA</label>
          <div className="flexbox">
              <div className="grupo-select">
                 {/*input para ingreso del mes*/}
              <label className= "pro2" for="inputMes">Mes</label>
              <br/>
               {/*limitando el numero de digitos en el input*/}
            <input className= "pro22" type="text" id="inputMes"  required pattern="[0-9]+" minlength="2" maxlength="2"/>
   
              </div>
              <p className= "pro44">   /</p>
              <div className="grupo-select">
              <label className= "pro3" for="inputAno">Año</label>
              <br/>
              {/*input para ingreso del año*/}
              {/*limitando el numero de digitos en el input*/}
            <input className= "pro33" type="text" id="inputAno"  required pattern="[0-9]+" minlength="2" maxlength="2"/>
               
              </div>
            </div>
            </div>
        
        <div className="grupo ccv">
          {/*input para ingreso del codigo de seguridad*/}
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
