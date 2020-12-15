import React, {Component} from 'react';
import swal from '@sweetalert/with-react';
import guia2 from './guia2.png'
import './estilos.css';
import Formulario from "./Formulario.js"

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
                <h4>Pagar con:</h4>
                <div >
                <label id="probandoID" >
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