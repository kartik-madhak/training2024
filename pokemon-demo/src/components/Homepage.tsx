import {PokemonDetails} from "./PokemonDetails";
import {Pokemon} from "../models/Pokemon";

export const Homepage = () => {
    const pokemon1: Pokemon = {
        id: 1,
        name: 'Bulbasaur',
        type: ['grass', 'poison']
    };

    const pokemon2: Pokemon = {
        id: 2,
        name: 'Charmandar',
        type: ['fire']
    };

    const pokemon3: Pokemon = {
        id: 3,
        name: 'Squirtle',
        type: ['water']
    };

    return (
        <div className={'d-flex flex-column align-items-center'}>
            <h1>Pokemon Homepage</h1>
            <PokemonDetails pokemon={pokemon1}/>
            <PokemonDetails pokemon={pokemon2}/>
            <PokemonDetails pokemon={pokemon3}/>
        </div>
    );
}