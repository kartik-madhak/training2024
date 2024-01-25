import { type ReactElement } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import PokeInfo from '../components/PokeInfo.tsx'
import { usePokemonsApi } from '../hooks/usePokemonsApi.ts'
import { useNavigate } from 'react-router-dom'
import { PokemonHeader } from '../components/PokemonHeader.tsx'

export const Home = (): ReactElement => {
  const navigate = useNavigate()
  const { pokemons } = usePokemonsApi()

  return (
        <div className="container">
            <PokemonHeader/>
            <div className={'row'}>
                {pokemons.length > 0
                  ? pokemons.map(pokemonDto => <div onClick={() => {
                    navigate('/pokemons/' + pokemonDto.id)
                  }} key={pokemonDto?.name} className={'col'}>
                        <PokeInfo pokemon={pokemonDto}/>
                    </div>)
                  : <div>Loading...</div>
                }
            </div>

            <div className="mt-4">
                <button
                    className="btn btn-primary mx-1"
                    onClick={() => {
                      navigate('about')
                    }}>
                    Change Route
                </button>
            </div>
        </div>
  )
}
