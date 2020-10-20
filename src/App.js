import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nombres from "./Nombres";

function App() {
  /* HERE SHOULD */
  const team = [
    {
      nombre: "Miguel LaMadness",
      gitUser: "miguel" /*Nombre de usario de git Local*/,
    },
    
    {
      nombre: "Omar Trujillo",
      gitUser: "userGitName" /*Nombre de usario de git Local*/,
    },
    {
      nombre: "Tu nombre",
      gitUser: "userGitName" /*Nombre de usario de git Local*/,
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Nombres team={team}/>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
