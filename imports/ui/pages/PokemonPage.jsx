import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { withRouter } from "react-router-dom";

const FIND_POKEMON = gql`
  query findPokemon($_id: String!) {
    findPokemon(_id: $_id) {
      name
      number
    }
  }
`;

class PokemonPage extends Component {
  render() {
    const { _id } = this.props.match.params;
    return (
      <Query query={FIND_POKEMON} variables={{ _id }} pollInterval={500}>
        {({ loading, error, data }) => {
          if (loading) return <h1>Loading</h1>;
          if (data) {
            const { name, number } = data.findPokemon;
            return (
              <div>
                <p>Pokemon Name: {name}</p>
                <p>Pokemon Number: {number}</p>
              </div>
            );
          }
          return <h1>PokemonPage</h1>;
        }}
      </Query>
    );
  }
}

export default withRouter(PokemonPage);
