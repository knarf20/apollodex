import { Mongo } from "meteor/mongo";

const Pokemons = new Mongo.Collection("pokemons");

export default Pokemons;
