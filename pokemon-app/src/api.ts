import { type Pokemon, type PokemonDto, PokemonType } from './types/Pokemon'
import axios from 'axios'

export const fetchPokemons = async (): Promise<PokemonDto[]> => {
  const results = (await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=20'))?.data?.results
  return results.map((dto: PokemonDto, index: number) => ({ ...dto, id: index + 1 }))
}

export const fetchPokemonDetails = async (id: number): Promise<Pokemon> => {
  const result = (await axios.get('https://pokeapi.co/api/v2/pokemon/' + id))?.data
  return {
    id,
    name: result?.name,
    height: result?.height,
    weight: result?.weight,
    imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    types: result.types?.map((typeDto: any) => getPokemonType(typeDto?.type?.name))
  } as Pokemon
}

const getPokemonType = (type: string): PokemonType => {
  switch (type) {
    case 'grass': return PokemonType.Grass
    case 'poison': return PokemonType.Poison
    case 'fire': return PokemonType.Fire
    case 'water': return PokemonType.Water
    case 'rock': return PokemonType.Rock
    default: return PokemonType.Normal
  }
}
