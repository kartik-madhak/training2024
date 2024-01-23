import { Pokemon } from "../types/Pokemon"

interface PokeCardProps {
  pokemon: Pokemon
}

const PokeCard = (props: PokeCardProps) => {
  return (
    <div>{props.pokemon.name}</div>
  )
}

export default PokeCard