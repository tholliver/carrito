import React, { Component } from "react";
import "./App.css";
import Routes from "./routes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  /* HERE SHOULD */

  /*CALLING UP API PRODUCTS */
 
    return (
      <Router>
        <div className="App">
          
          <Routes />
        </div>
      </Router>
    );
  
  
}

export default App;
