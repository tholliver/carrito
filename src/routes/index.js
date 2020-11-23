import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Store from '../pages/store';
import About from '../pages/About';
import Cart from "../pages/cart";
import Pago from "../pages/payment";
import Pedidos from '../pages/orders';
import misPedidos from '../pages/userOrders';

const Routes = () => {
  return (
    <Router>
        <Switch>
          
          
          <Route exact path="/" component={Store}/>
          <Route path="/acercade" component={About} /> 
          <Route path="/carrito" component={Cart} />
          <Route path="/pago" component={Pago} />
          <Route path="/pedidos" component={Pedidos} />
          <Route path="/mis-pedidos" component={misPedidos} />
        </Switch>
    </Router>
  );
}

export default Routes;
