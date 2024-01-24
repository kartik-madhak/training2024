import { type ReactElement, useEffect, useState } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import PokeCard from '../components/PokeCard'
import { fetchPokemons } from '../api'
import { type Pokemon } from '../types/Pokemon'

interface HomeProps {
  setRoute: (route: string) => void
}

export const Home = (props: HomeProps): ReactElement => {
  const [index, setIndex] = useState<number>(0)
  const [pokemons, setPokemons] = useState<Pokemon[]>([])

  const effectCallback = async (): Promise<void> => {
    const response = await fetchPokemons()
    setPokemons(response)
  }

  useEffect(() => {
    void effectCallback().then()
  }, [])

  const nextPokemon = (): void => { setIndex(index + 1) }
  const previousPokemon = (): void => { setIndex(index - 1) }
  const isFirstPokemon = index === 0
  const isLastPokemon = index === pokemons.length - 1

  return (
    <div className="container d-flex flex-column align-items-center">
      {pokemons.length > 0
        ? <PokeCard key={pokemons[index].name} pokemon={pokemons[index]} />
        : <div>Loading...</div>
      }

      <div className="mt-4">
        <button
          className="btn btn-primary mx-1"
          disabled={isFirstPokemon}
          onClick={previousPokemon}
        >
          Previous
        </button>
        <button
          className="btn btn-primary mx-1"
          disabled={isLastPokemon}
          onClick={nextPokemon}
        >
          Next
        </button>
        <button onClick={() => {
          props.setRoute('about')
        }}>
          Change Route
        </button>
      </div>
    </div>
  )
}
