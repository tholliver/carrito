import React, { Component } from "react";
import "./App.css";
import "./Lista.css";

class Nombres extends Component {
  render() {
    return (
      <div className="team-list">
        <h3>DEV TEAM</h3>
        {this.props.team.map((p) => (
          <div className="member">
            <h3>{p.nombre}</h3>
            <p>userToCommit: {p.gitUser}</p>
          </div>
        ))}
      </div>
    );
  }
}
export default Nombres;
