export interface Pokemon {
  id: number;
  name: string;
  types: PokemonType[];
  height: number;
  weight: number;
  imageUrl: string;
}

export enum PokemonType {
  Grass = "Grass",
  Fire = "Fire",
  Water = "Water",
  Rock = "Rock",
  Poison = "Poison",
  Normal = "Normal",
}

// export const pokemonTypeMapping = {
//   [PokemonType.Grass]: "Grass",
//   [PokemonType.Fire]: "Fire",
//   [PokemonType.Water]: "Water",
//   [PokemonType.Rock]: "Rock",
//   [PokemonType.Poison]: "Poison",
//   [PokemonType.Normal]: "Normal",
// };

// export function getDisplayName(pokemonType: PokemonType): string {
//   return pokemonTypeMapping[pokemonType];
// }
