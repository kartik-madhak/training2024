import { type ReactElement } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import PokeInfo from '../components/PokeInfo.tsx'
import { usePokemonsApi } from '../hooks/usePokemonsApi.ts'

interface HomeProps {
  setRoute: (route: string) => void
}

export const Home = (props: HomeProps): ReactElement => {
  // const [pokemonDtos, setPokemonDtos] = useState<PokemonDto[]>([])

  const { pokemons } = usePokemonsApi()

  // const effectCallback = async (): Promise<void> => {
  //   const pokemonDtos = await fetchPokemons()
  //   setPokemonDtos(pokemonDtos)
  // }
  //
  // useEffect(() => {
  //   void effectCallback().then()
  // }, [])

  return (
        <div className="container">
            <div className={'row'}>
                {pokemons.length > 0
                  ? pokemons.map(pokemonDto => <div onClick={() => {
                    props.setRoute('pokemon/' + pokemonDto.id)
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
                      props.setRoute('about')
                    }}>
                    Change Route
                </button>
            </div>
        </div>
  )
}
