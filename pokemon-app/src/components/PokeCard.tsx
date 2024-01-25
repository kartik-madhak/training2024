import { type ReactElement, useEffect, useState } from 'react'
import { type Pokemon, PokemonType } from '../types/Pokemon'
import './PokeCard.css'
import { fetchPokemonDetails } from '../api.ts'
import { useParams } from 'react-router-dom'

const imageSize = 150

const PokeCard = (): ReactElement => {
  const { id } = useParams()
  const [pokemon, setPokemon] = useState<Pokemon>()

  const effectCallback = async (): Promise<void> => {
    const pokemon = await fetchPokemonDetails(+(id ?? 0))
    setPokemon(pokemon)
  }

  useEffect(() => {
    void effectCallback().then()
  }, [])

  return (
    pokemon != null
      ? <div className="d-flex flex-column align-items-center bg-primary-subtle rounded-4 pokemon-card p-4 mt-4">
                <div>#{id}</div>
                <img
                    src={pokemon.imageUrl}
                    alt="PokemonImage"
                    height={imageSize}
                    width={imageSize}
                />
                <div className={'text-capitalize'}>{pokemon.name}</div>
                <div>Height: {pokemon.height} ft</div>
                <div>Weight: {pokemon.weight} kgs</div>
                <div>
                    Type:{' '}
                    {pokemon.types.map((type) => (
                        <span
                            key={type}
                            className={` rounded ms-1 px-2 ${getTypeClassName(type)}`}
                        >
            {type}
          </span>
                    ))}
                </div>
            </div>
      : <div>Loading...</div>
  )
}

const getTypeClassName = (type: PokemonType): string => {
  switch (type) {
    case PokemonType.Grass:
      return 'bg-success text-light'
    case PokemonType.Poison:
      return 'bg-dark text-light'
    case PokemonType.Fire:
      return 'bg-danger text-light'
    case PokemonType.Normal:
      return 'bg-secondary text-light'
    case PokemonType.Water:
      return 'bg-info text-light'
    case PokemonType.Rock:
      return 'bg-secondary-subtle'
    default:
      return 'bg-secondary'
  }
}

export default PokeCard
