import React, { useContext } from "react";


import Pedidito from './pedidito'
import { formatNumber } from "../../helpers/utils";
import "../cart/Styles.css"

import swal from 'sweetalert'

const Produc = ({ productitoCom}) => {
    console.log(productitoCom)
  return (
    <div >
      {productitoCom.nombre}  {productitoCom.cantidadComp}  Bs.{productitoCom.precio}
    </div>
  );
};

export default Produc;