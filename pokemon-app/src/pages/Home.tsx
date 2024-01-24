import { useEffect, useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import PokeCard from "../components/PokeCard";
import { fetchPokemons } from "../api";
import { Pokemon } from "../types/Pokemon";



export const Home = () => {

  const [index, setIndex] = useState<number>(0);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const effectCallback = async () => {
    const response = await fetchPokemons(); 
    setPokemons(response);
  }

  useEffect(() => {
    effectCallback();
  }, [])

  const nextPokemon = () => setIndex(index + 1);
  const previousPokemon = () => setIndex(index - 1);
  const isFirstPokemon = index == 0;
  const isLastPokemon = index == pokemons.length - 1;

  return (
    <div className="container d-flex flex-column align-items-center">
      {pokemons.length > 0 ?
        <PokeCard key={pokemons[index].name} pokemon={pokemons[index]} />
        :
        <div>Loading...</div>
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
      </div>
    </div>
  );
};
