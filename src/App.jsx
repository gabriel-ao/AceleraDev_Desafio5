import React from "react";

import "./App.scss";
import Topbar from "./components/Topbar";
import Filters from "./components/Filters";
import Contacts from "./components/Contacts";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      contatos: [],
      filtrar: "",
    };
  }
  async componentDidMount() {
    const response = await fetch(
      "https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts"
    );
    const data = await response.json();

    this.setState({
      contatos: data,
    });
  }

  handleFilter = (event) => {
    this.setState({
      filtrar: event.target.value,
    });
  };

  sortByKey = (contatos, key) => {
    return contatos.sort((a, b) => {
      const x = b[key];
      const y = a[key];
      return x < y ? 1 : x > y ? -1 : 0;
    });
  };

  handleSort = (key) => {
    const { contatos } = this.state;

    this.setState({
      contatos: this.sortByKey(contatos, key),
    });
  };

  render() {
    const { contatos, filtrar } = this.state;

    const exibirContatos = filtrar
      ? contatos.filter((contato) => {
          const regex = new RegExp(filtrar, "i");
          return regex.test(contato.name);
        })
      : contatos;

    return (
      <React.Fragment>
        <Topbar />
        <Filters
          handleFilter={this.handleFilter}
          handleSort={this.handleSort}
        />
        <Contacts contatos={exibirContatos} />
      </React.Fragment>
    );
  }
}

export default App;
