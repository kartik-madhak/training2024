import { type ReactElement } from 'react'
import { type PokemonDto } from '../types/Pokemon'
import './PokeInfo.css'

export interface PokeInfoProps {
  pokemon: PokemonDto
}

const PokeInfo = ({ pokemon }: PokeInfoProps): ReactElement => {
  const { id, name } = pokemon
  const imageSize = 100

  return (
        <div className="d-flex flex-column align-items-center bg-primary-subtle rounded-4 pokemon-info-card p-4 mt-4">
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                alt="PokemonImage"
                height={imageSize}
                width={imageSize}
            />
            <div>#{id}</div>
            <div className={'text-capitalize'}>{name}</div>
        </div>
  )
}

export default PokeInfo
