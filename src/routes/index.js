import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "../components/shared/Header";

import Store from "../pages/store";
//import About from "../pages/store";
//import  NotFound from "../pages/NotFound";
import Cart from "../pages/cart";

const Routes = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Store} />
          
        <Route path="/carrito" component={Cart} />
      </Switch>
    </Router>
  );
};
export default Routes;
