import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { withRouter } from "react-router-dom";

import PokemonList from "../components/PokemonList";

const DOWNLOAD_POKE_INFO = gql`
  mutation getPokemon($number: String) {
    getPokemon(number: $number) {
      _id
    }
  }
`;

class HomePage extends Component {
  state = {
    option: "",
    loading: false
  };

  handleChange = event => {
    const value = event.target.value;
    this.setState({ option: value });
  };

  handleSubmit = event => {
    const { history } = this.props;
    event.preventDefault();
    this.toggleLoading();
    this.props
      .findPokemon({ variables: { number: this.state.option } })
      .then(({ data }) => {
        const { _id } = data.getPokemon;
        history.push(`/pokemon/${_id}`);
      })
      .catch(error => {
        console.log(error);
      });
    this.toggleLoading();
  };

  toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
  };

  render() {
    const { option, loading } = this.state;
    if (loading) return <h1>LOADING</h1>;
    return (
      <div>
        <h1>Apollodex</h1>
        <p>Download your favorite pokemon info</p>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="search by pokemon number"
            onChange={this.handleChange}
            value={option}
          />
          <button type="submit">DOWNLOAD!</button>
        </form>
        <PokemonList />
      </div>
    );
  }
}

export default graphql(DOWNLOAD_POKE_INFO, {
  name: "findPokemon"
})(withRouter(HomePage));
