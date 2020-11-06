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

const Routes = () => {
  return (
    <Router>
        <Switch>
          {/*<Route path="/about" component={About} /> */}
          
          <Route exact path="/" component={Store}/>
          <Route path="/acercade" component={About} /> 
          <Route path="/carrito" component={Cart} />
          <Route path="/pago" component={Pago} />
        </Switch>
    </Router>
  );
}

export default Routes;
