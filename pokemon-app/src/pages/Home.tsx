import { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import PokeCard from "../components/PokeCard";
import { Pokemon, PokemonType } from "../types/Pokemon";

const pokemons: Pokemon[] = [
  {
    id: 1,
    name: "Bulbasaur",
    types: [PokemonType.Grass, PokemonType.Poison],
    height: 12,
    weight: 23,
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    id: 4,
    name: "Charmandar",
    types: [PokemonType.Fire],
    height: 12,
    weight: 23,
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    id: 7,
    name: "Squirtle",
    types: [PokemonType.Water],
    height: 12,
    weight: 23,
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
];

export const Home = () => {
  const [index, setIndex] = useState<number>(0);

  const nextPokemon = () => setIndex(index + 1);
  const previousPokemon = () => setIndex(index - 1);
  const isFirstPokemon = index == 0;
  const isLastPokemon = index == pokemons.length - 1;

  return (
    <div className="container d-flex flex-column align-items-center">
      <PokeCard key={pokemons[index].name} pokemon={pokemons[index]} />

      {/* {!isFirstPokemon && (
        <button className="btn btn-primary" onClick={previousPokemon}>
          Previous Pokemon
        </button>
      )}
      {!isLastPokemon && <button onClick={nextPokemon}>Next Pokemon</button>} */}

      <div className="mt-4">
        <button
          className="btn btn-primary mx-1"
          disabled={isFirstPokemon}
          onClick={previousPokemon}
        >
          Previous
        </button>
        <button
          className="btn btn-primary mx-1"
          disabled={isLastPokemon}
          onClick={nextPokemon}
        >
          Next
        </button>
      </div>
    </div>
  );
};
