import {Pokemon} from "../models/Pokemon";

export const PokemonDetails = () => {
    const pokemon: Pokemon = {
        id: 1,
        name: 'Bulbasaur'
    };

    return (
        <div>
            <div>Pokemon Id: {pokemon.id}</div>
            <div>Pokemon Name: {pokemon.name}</div>
        </div>
    );
}