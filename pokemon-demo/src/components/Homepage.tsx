import {Pokemon} from "../models/Pokemon";

export const Homepage = () => {
    const pokemon: Pokemon = {
        id: 1,
        name: 'Bulbasaur'
    };

    return (
        <div>
            <h1>Pokemon Homepage</h1>
            <div>Pokemon Id: {pokemon.id}</div>
            <div>Pokemon Name: {pokemon.name}</div>
        </div>
    );
}