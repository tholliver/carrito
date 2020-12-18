
import './estilos.css';

import React, { useState } from 'react';
import guia2 from './guia2.png'
import swal from '@sweetalert/with-react'


function Formulario() {
  
  function validar(){
    var numeTar=parseInt(document.getElementById('inputNumero').value); 
    console.log(numeTar);
    var numeSeg=parseInt(document.getElementById('inputCVV').value); 
    console.log(numeSeg);


    //Limitando la cantidad a 2
    var numeMes="";
    /////////
    numeMes=String(document.getElementById('inputAno').value);
    console.log("El mes es");
    console.log(numeMes);
    console.log(numeMes.length);
    console.log("El mes era");
    var mm=numeMes.length;
    ///////
    //numeMes=parseInt(document.getElementById('inputMes').value);
    //var mmm= numeMes.length();
    //console.log(mmm);
    //var m = new Number(numeMes);
    //var mm =m.toString().length;
    //console.log(mm);

    var numeAnio="";
    numeAnio=String(document.getElementById('inputMes').value); 
    console.log("El año es");
    console.log(numeAnio);
    console.log(numeAnio.length);
    console.log("El mes era");
    var aa=numeAnio.length;

    console.log("y dale funca")
    var todo_correcto = true;
    var expresion = /^[A-Z+ ]+$/i;
    var email = document.getElementById('inputNombre').value;
    if (!expresion.test(email)){
        todo_correcto = false;
    }


    if(mm<2){
      todo_correcto = false;
    }
    if(aa<2){
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
      console.log("Llego aqui")
      
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
      <form id="formulario-tarjeta" class="formulario-tarjeta" >   
      <h2>Ingresa los datos de tu tarjeta</h2>
       {/*input para ingreso del numero de tarjeta*/}
        <div className="grupo">
            <div className="subtitulos-formulario"> 
              <p for="inputNumero"> Número de tarjeta: </p> 
            </div>
            <input className= "pro" type="text" id="inputNumero" minlength="13" maxlength="18" autocomplete="off"  required pattern="[0-9]+"  />
        </div>
        <br/>
        {/*input para ingreso del nombre titular de la tarjeta*/}
        <div className="grupo">
            <div className="subtitulos-formulario">
              <p for="inputNombre">Nombre titular de la tarjeta:</p>
            </div>
            <input className= "pro" type="text" id="inputNombre" maxlength="30" autocomplete="off" required pattern="[a-zA-Z ]{2,254}" oninvalid="this.setCustomValidity('Hola')" />
        </div>
        
        <div className="grupo expira">
          <div className="grupo-select1">
            <p for="selectMes">Fecha de expiración: </p>
          </div> 
          <div className="flexbox-datos">
                  <p className= "pro2" for="inputMes">MM </p>
                  <h6 className= "pro44"> / </h6> 
                  <p className= "pro3" for="inputAno">AA</p> 
          </div>
          <div className="datos-de-entrada">
              {/*input para ingreso del mes*/}
              {/*limitando el numero de digitos en el input*/}
              <input className= "pro22" type="text" id="inputMes"  required pattern="[0-9]+" minlength="2" maxlength="2"/>
              {/*input para ingreso del año*/}
              {/*limitando el numero de digitos en el input*/}
              <input className= "pro33" type="text" id="inputAno"  required pattern="[0-9]+" minlength="2" maxlength="2"/>
          </div>
        </div>
        
        <div className="grupo ccv">
          {/*input para ingreso del codigo de seguridad*/}
            <p for="inputCVV">Código de seguridad:</p>
            <div align="center">
            
            <input className="segu" type="text" id="inputCVV" maxlength="4"  minlength="3"  required  pattern="[0-9]+" />
            <img  align="center"src={guia2}/>
            </div>
            
        
        </div>
        <br/>
        <div className="botones-formulario de tarjeta">
          <button className="contenedor-btn-tarjetar" to="/mis-pedidos"  formnovalidate type="submit"onClick={validar}  >Realizar pago</button>
          &nbsp;&nbsp;&nbsp;
          <button className="contenedor-btn-tarjetac" type="submit"onClick={pagoCancelado}  >Cancelar</button>
          </div>
        </form>
    </div>
  );
}

export default Formulario;
