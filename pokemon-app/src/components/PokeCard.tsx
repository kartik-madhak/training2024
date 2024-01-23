import { Pokemon } from "../types/Pokemon"

export interface PokeCardProps {
  pokemon: Pokemon
}

const PokeCard = (input: PokeCardProps) => {
  return (<>
    <div>{input.pokemon.name}</div>
    </>
  )
}

export default PokeCard