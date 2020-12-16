import React, {Component} from 'react';
import swal from '@sweetalert/with-react';
import guia2 from './guia2.png'
import './estilos.css';
import Formulario from "./Formulario.js"

import './estilos.css';


class Tarjeta extends Component{
    state ={
        value:'efectivo'
    };
    onChange =e =>{
        
        this.setState({value:e.target.value})
        if(e.target.value==="tarjeta"){
        swal(
           
          <Formulario/>,  {
            buttons: {
             defeat: {
               text: "Cancelar",
               value: "catch",
             },
     
           defeat: {
             text: "Realizar pago",
             value: "catch",
           },
           },buttons: ["Cancelar"],
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

                <div className="contenedorRadioButton3" >

                <h4>Pagare con:</h4>

                <div >
                <label className="radioC">
                Tarjeta 
                    <input  className="radioB "  type="radio" value="tarjeta" 
                                checked ={value==='tarjeta'}
                                onChange={this.onChange} />
                   
                </label>
                </div>

                <div>
                <label id="probandoID"  className="radioC">
                Efectivo
                    <input className="radioB" type="radio" value="efectivo"  
                                checked ={value==='efectivo'}
                                onChange={this.onChange} />
                    
                </label>
                </div>


                
                </div>

            </form>
        )
    }

}

export default Tarjeta;