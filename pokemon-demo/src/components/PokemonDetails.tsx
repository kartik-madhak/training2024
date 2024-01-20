import {Pokemon} from "../models/Pokemon";
import './PokemonDetails.css';

interface PokemonDetailsProps {
    pokemon: Pokemon
}

export const PokemonDetails = (props: PokemonDetailsProps) => {
    const pokemon = props.pokemon;
    return (
        <div className={'container pokemon-details-container bg-info'}>
            <div>Pokemon Id: {pokemon.id}</div>
            <div>Pokemon Name: {pokemon.name}</div>
        </div>
    );
}