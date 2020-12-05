import React, {Component} from 'react';
import swal from '@sweetalert/with-react';



class Tarjeta extends Component{
    state ={
        value:'efectivo'
    };
    onChange =e =>{
        
        this.setState({value:e.target.value})
        if(e.target.value==="tarjeta"){
        swal(
            <div>
                <h1>Pago con Tarjeta</h1>
            </div>
        );
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