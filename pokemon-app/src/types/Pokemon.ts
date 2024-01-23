export interface Pokemon {
  name: string;
  type: PokemonType;
  height: number;
  weight: number;
}

export enum PokemonType {
  Grass,
  Fire,
  Water,
  Rock,
  Other,
}
