import Pokemons from "./Pokemons";

export default {
  Query: {
    findPokemon(obj, args, ctx) {
      const { _id } = args;
      return Pokemons.findOne({ _id });
    },
    pokemons(obj, arg, ctx) {
      return Pokemons.find({}).fetch();
    }
  },
  Mutation: {
    getPokemon(obj, args, ctx) {
      const result = HTTP.get(
        `http://pokeapi.co/api/v2/pokemon/${args.number}`
      );
      const { forms } = result.data;
      const { name } = forms[0];
      const _id = Pokemons.insert({ number: args.number, name });
      return { _id };
    }
  }
};
