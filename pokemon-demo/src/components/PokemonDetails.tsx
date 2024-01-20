import {Pokemon} from "../models/Pokemon";
import './PokemonDetails.css';

interface PokemonDetailsProps {
    pokemon: Pokemon
}

export const PokemonDetails = (props: PokemonDetailsProps) => {
    const pokemon = props.pokemon;
    return (
        <div className={'container pokemon-details-container bg-primary-subtle'}>
            <div>Pokemon Id: {pokemon.id}</div>
            <div className={'mt-2'}>Pokemon Name: {pokemon.name}</div>
            <div className={'mt-2'}>Pokemon Type: {pokemon.type.map(type => <span className={`badge ms-1 ${getTypeClass(type)}`}>{type}</span>)}</div>
        </div>
    );
}

const getTypeClass = (type: string) => {
    switch (type) {
        case 'grass':
            return 'bg-success text-light';
        case 'poison':
            return 'bg-dark text-light';
        case 'fire':
            return 'bg-danger';
        case 'water':
            return 'bg-info';
        default:
            return 'bg-secondary';
    }
}