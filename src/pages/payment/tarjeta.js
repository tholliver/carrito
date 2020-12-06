import React, {Component} from 'react';
import swal from '@sweetalert/with-react';
import guia2 from './guia2.png'
import './estilos.css';


class Tarjeta extends Component{
    state ={
        value:'efectivo'
    };
    onChange =e =>{
        
        this.setState({value:e.target.value})
        if(e.target.value==="tarjeta"){
        swal(
            <div id="formulario-tarjeta" class="formulario-tarjeta">
      
      <h1>Ingresa los datos de tu tarjeta</h1>
   
        <div className="grupo">
            <label for="inputNumero">Número de tarjeta</label>
            <input className= "pro" type="text" id="inputNumero" maxlength="18" autocomplete="off"/>
        </div>
        <div className="grupo">
            <label for="inputNombre">Nombre titular de la tarjeta</label>
            <input className= "pro" type="text" id="inputNombre" maxlength="30" autocomplete="off"/>
        </div>
        
        
          <div className="grupo expira">
          <label for="selectMes">Fecha de expiración</label>
          
          <div className="flexbox">
              
              <div className="grupo-select">
                <select className="selec" >
                  <option disabled selected>Mes</option>
                  <option value="value11">1.Enero</option> 
                  <option value="value12">2.Febrero</option>
                  <option value="value13">3.Marzo</option>
                  <option value="value14">4.Abril</option> 
                  <option value="value15">5.Mayo</option>
                  <option value="value16">6.Junio</option>
                  <option value="value17">7.Julio</option> 
                  <option value="value18">8.Agosto</option>
                  <option value="value19">9.Septiembre</option>
                  <option value="value20">10.Octubre</option>
                  <option value="value21">11.Noviembre</option>
                  <option value="value22">12.Diciembre</option>
                </select>
              </div>

              <div className="grupo-select">
                <select className="selec" >
                  <option disabled selected>Año</option>
                  <option value="value1">2019</option> 
                  <option value="value2">2020</option>
                  <option value="value3">2021</option>
                  <option value="value1">2022</option> 
                  <option value="value2">2023</option>
                  <option value="value3">2024</option>
                  <option value="value1">2025</option> 
                  <option value="value2">2026</option>
                  <option value="value3">2027</option>
                </select>
               
              </div>
            </div>
            </div>
        
        <div className="grupo ccv">
        
            <label for="inputCVV">Código de seguridad</label>
            <div align="center">
            
            <input className="segu" type="text" id="inputCVV" maxlength="4"/>
            <img  align="center"src={guia2}/>
            </div>
            
        
        </div>
     
      
        </div>,  {
           buttons: {
            defeat: {
              text: "Cancelar",
              value: "catch",
            },
    
          defeat: {
            text: "Realizar pago",
            value: "catch",
          },
          },buttons: ["Cancelar", "Realizar pago"],
}
           





        ).then((willDelete) => {
        if (willDelete) {
          swal("Su pago fue procesado exitosamente", {
            icon: "success",
          });
        } else {
          swal("No se confirmo el pago");
        }
      });
        }
    }

    
    render(){
        const {value} = this.state;
        return(
            <form>
                <h4>Pagar con:</h4>
                <div >
                <label>
                Efectivo
                    <input type="radio" value="efectivo"  
                                checked ={value==='efectivo'}
                                onChange={this.onChange} />
                    
                </label>
                </div>
                <div >
                <label>
                Tarjeta
                    <input type="radio" value="tarjeta" 
                                checked ={value==='tarjeta'}
                                onChange={this.onChange} />
                   
                </label>
                </div>
            </form>
        )
    }

}

export default Tarjeta;