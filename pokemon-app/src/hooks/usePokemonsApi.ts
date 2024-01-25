import { useEffect, useState } from 'react'
import { type PokemonDto } from '../types/Pokemon.ts'
import axios from 'axios'

export const usePokemonsApi = (): {
  pokemons: PokemonDto[]
  error: any
  isLoading: boolean
} => {
  const [pokemons, setPokemons] = useState<PokemonDto[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<any>(null)

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=20')
      .then((response) => {
        const allPokemons: PokemonDto[] = response?.data?.results?.map((dto: PokemonDto, index: number) => ({
          ...dto,
          id: index + 1
        }))
        setPokemons(allPokemons)
        setIsLoading(false)
        setError(null)
      })
      .catch(error => {
        setPokemons([])
        setIsLoading(false)
        setError(error)
      })
  }, [])

  return { pokemons, isLoading, error }
}
