import React, { useContext } from "react";
import Layout from "../../components/Layout";
import axios from "axios";
//import { Link } from "react-router-dom";

import "./Styles.css";
import { formatNumber } from "../../helpers/utils";
import { CartContext } from "../../contexts/CartContext";
//import Titulo from './Titulo.js';
import swal from 'sweetalert';
import { Redirect } from "react-router-dom";
import Tarjeta from  './tarjeta'
import Cookies from "universal-cookie";

  

const cookies = new Cookies();


const Payment = () => {
  const { total, cartItems, itemCount, clearCart, checkout } = useContext(
    CartContext
  );
 var Direccion = "";
 var NombreCalle = "";
 var NumeroCalle ="";
 

  function func1() {
    let current_datetime = new Date();
    let formatted_date =
      current_datetime.getFullYear() + "-" +
      (current_datetime.getMonth() + 1) + "-" +
      current_datetime.getDate() +  " " +
      current_datetime.getHours() + ":" +
      current_datetime.getMinutes() + ":" +
      current_datetime.getSeconds();

   let estadoP = "Por pagar";
   if(cookies.get('estadoPago')==='tarjeta'){
      estadoP='Pago efectuado'
   }else{
     estadoP='Por pagar';
   }
    const newPedido = [
      {
        direccion: cookies.get('direccion')+'-N° '+cookies.get('numCasa'),
        fechaPedido: formatted_date,
        cantidadTotal: itemCount,
        totalPagar: total, 
        idclienteP: cookies.get('ci'),
        estado: 'Pendiente',
        estadoPago: estadoP        
      },
    ];
    cookies.remove('direccion',{path: "/"});
    cookies.remove('numCasa',{path: "/"});
    cookies.remove('estadoPago',{path:"/"});
    axios
      .post("https://alfasoft-api.herokuapp.com/pedidoIn", newPedido, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    }

    function func2() {
      const arr = [];
      cartItems.map((item) => {
        var newADE = 21;
        arr.push({
          pedido_idpedido: newADE,
          producto_idproducto: item.id,
          cantidadComp: item.quantity,
        });
      });
      console.log(arr, "Showing the array insert to pedidosProductos");
      axios
        .post("https://alfasoft-api.herokuapp.com/pedido/items", arr, {
          headers: { "Content-Type": "application/json" },
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }

  const mostrarAlerta =()=>{if (cookies.get('direccion') && cookies.get('numCasa')) {
    func1();
    swal({
      text: 'El Envio del pedido fue un Exito ',
      icon: 'success',
    }).then((value) => {
      func2()
      clearCart()
    });
  } else {
    swal({
      title: 'Es Obligatorio llenar el campo direccion ',
    
    })
  }
  };
  const mostrarDireccion =()=>{
    swal({
      text: 'Ingrese su Direccion de entrega.',
      content: "input",
      
      buttons: {
        cancel: "Cancelar",
        catch: {
          text: "Aceptar",
          value: "catch",
        },
      },
    })
    .then((value) => {
      switch (value) {
     
     
        case "catch":
          swal("Realizado!", "Se guardo la direccion de tu ubicacion!", "success");
          break;
     
        default:
          swal("Se cancelo!");
      }
    })
    .then(name => {
      if (!name) throw null;
     
      return fetch(`https://itunes.apple.com/search?term=${name}&entity=movie`);
    })
    .then(results => {
      return results.json();
    })
    .then(json => {
      const movie = json.results[0];
     
      if (!movie) {
        return swal("No movie was found!");
      }
     
      const name = movie.trackName;
      const imageURL = movie.artworkUrl100;
     
      swal({
        title: "Top result:",
        text: name,
        icon: imageURL,
      });
    })
    .catch(err => {
      if (err) {
        swal("Oh noes!", "The AJAX request failed!", "error");
      } else {
        swal.stopLoading();
        swal.close();
      }
    });
  };
  const onChange =(e)=>{
    cookies.remove('direccion',{path: "/"});
    cookies.set('direccion', e.target.value , {path: "/"});
    console.log(cookies.get('direccion'))
  }
  const onChange2 =(e)=>{
    cookies.remove('numCasa',{path: "/"});
    cookies.set('numCasa', e.target.value , {path: "/"});
    console.log(cookies.get('numCasa'))
  }

  if(cookies.get("username")){
  return (
    <React.Fragment>
    <Layout title="Pago" description="Payment page">
      <div className="contenedor-general">
        <div className="contenedor-forma-de-pago">
          <div className="text-center-forma de pago">
            <h3>
              FORMA DE PAGO Bs.{" "}
            </h3>
          </div>
        </div>

        <div className="caja-forma-de-pago">
          <div className="caja-resumen-de-factura">
            <div className="resumen-de-factura">
              <h3 className="resumen de factura">
                Resumen de factura <i className="fas fa-money-bill"></i>{" "}
              </h3>
              <div className="xv">
                <h4>Detalle de su pedido.</h4>
                <div className="col-sm-9 p-3 xs">
                  {cartItems.map((number) => (
                    <ul>
                      <li>
                        <p>
                          {number.name} || {number.quantity} {"     X      "}Bs. 
                          {number.price * number.quantity}
                        </p>
                      </li>
                    </ul>
                  ))}
                  {cartItems.length > 0 ? (
                    <div className="titulo"></div>
                  ) : (
                    <div>
                      <img className="emptycart img" alt="img" />
                      <div className="p-3 text-center text-muted">
                        <p>Tu carrito esta vacio </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <h3 className="total-parcial">Total parcial</h3>
              <p className="total-parcial-numero">Bs. {total}</p>
              <h3 className="metodo-de-pago">
                Direccion {" "}
              </h3>
              

              <div className="ubicacion">

                <div className="form-row">
                     <div class="form-group col-md-3">
                     <label for="inputAddress2">Direccion </label>
                     </div>
                     <div class="form-group col-md-5">
                     <input type="text" className="form-control1" id="inputAddress2" placeholder="Av America / Libertador " onChange={onChange}/>
                     </div>
                     <div className="numerodecasa">
                     <label for="inputAddress2">N° Casa </label>
                     </div>
                     <div class="form-group col-md-1">
                     <input type="number" className="form-control2" id="inputAddress2" placeholder="55" min="0" onChange={onChange2}/>
                  
                     </div>
                </div>
                
              </div>
              
              <h3 className="metodo-de-pago">
                Metodo de pago Bs.{" "}
              </h3>
              
        
              <Tarjeta></Tarjeta>
              <div className="contenedor-boton-enviar-mi-pedido">
                <button
                  type="button"
                  className="boton-enviar-mi-pedido"
                  onClick={mostrarAlerta}
                >{/*cambiando texto de confirmar pedido  */}
                   Confirmar mi pedido
                </button>
              </div>
            </div>
          </div>

          {/*<div className="boton-elegir-ubicacion-de-entrega">
            <button 
              type="button" 
              className="elegir-ubicacion-de-entrega"
              onClick={mostrarDireccion}
            >
              Elegir Ubicacion De Entrega
                  
            </button>
          </div>*/}
        </div>
      </div>
    </Layout>
    {cartItems.length === 0 && <Redirect to='/carrito'/> }
    </React.Fragment>
  );
}else{
  window.location.href='./';
}
};

export default Payment;
