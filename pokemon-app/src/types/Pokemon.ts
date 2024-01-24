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
