import { Pokemon, PokemonType } from "./types/Pokemon";

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

export const fetchPokemons = async (): Promise<Pokemon[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(pokemons);
    }, 2000);
  });
};
