import React, { useContext } from "react";


import Pedidito from './pedidito'
import { formatNumber } from "../../helpers/utils";
import "../cart/Styles.css"

import swal from 'sweetalert'

const Produc = ({ productitoCom}) => {
    console.log(productitoCom)
  return (
    <div className="contenedor-llamada-de-productos">
      <div className="llamada-de-productos">
        <div className="recuperacion1"> {productitoCom.nombre} </div>
        </div>
          <div className="llamada-de-productos">
            <div className="recuperacion2"> {productitoCom.cantidadComp} </div>
          </div> 
              <div className="llamada-de-productos">
                <div className="recuperacion3"> Bs.{productitoCom.precio} </div>
              </div>
    </div>
  );
};

export default Produc;