import React from 'react';

import axios from 'axios';

export default class Pedidos extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://alfasoft-api.herokuapp.com/pedido`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
        console.log(persons);
      })
  }

  render() {
    return (
      <ul>
          
        { this.state.persons.map(person => <li>{person.name}</li>)}
      </ul>
    )
  }
}
