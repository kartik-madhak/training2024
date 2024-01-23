import PokeCard from "../components/PokeCard"
import { Pokemon, PokemonType } from "../types/Pokemon"

const pokemonObj: Pokemon = {
  name: 'Pikachu',
  type: PokemonType.Other,
  height: 12,
  weight: 23
}

export const Home = () => {
  return (
    <div>
      <PokeCard pokemon={pokemonObj}/>
    </div>
  )
}