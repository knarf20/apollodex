import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";

const ALL_POKEMONS = gql`
  query getAllPokemons {
    pokemons {
      _id
      name
    }
  }
`;

export default (PokemonList = () => (
  <Query query={ALL_POKEMONS}>
    {({ loading, error, data }) => {
      if (loading) return <h1>Loading</h1>;
      const { pokemons } = data;

      return (
        <div>
          <h1>PokemonList</h1>
          {pokemons.map(pokemon => (
            <Link key={pokemon._id} to={`/pokemon/${pokemon._id}`}>
              <p>{pokemon.name}</p>
            </Link>
          ))}
        </div>
      );
    }}
  </Query>
));
