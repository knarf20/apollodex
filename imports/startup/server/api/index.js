import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";
import merge from "lodash/merge";

import PokemonSchema from "../../../api/pokemon/Pokemon.graphql";
import PokemonResolvers from "../../../api/pokemon/resolvers";

const typeDefs = [PokemonSchema];

const resolvers = merge(PokemonResolvers);

const schema = makeExecutableSchema({ typeDefs, resolvers });

createApolloServer({ schema });
