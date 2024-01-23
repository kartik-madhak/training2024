import { Pokemon, PokemonType } from "../types/Pokemon";
import "./PokeCard.css";

export interface PokeCardProps {
  pokemon: Pokemon;
}

const PokeCard = ({ pokemon }: PokeCardProps) => {
  const { id, height, imageUrl, name, types, weight } = pokemon;
  const imageSize = 100;

  return (
    <div className="d-flex flex-column align-items-center bg-primary-subtle rounded-4 pokemon-card p-4 mt-4">
      <div>#{id}</div>
      <img
        src={imageUrl}
        alt="PokemonImage"
        height={imageSize}
        width={imageSize}
      />
      <div>{name}</div>
      <div>Height: {height} ft</div>
      <div>Weight: {weight} kgs</div>
      <div>
        Type:{" "}
        {types.map((type) => (
          <span
            key={type}
            className={` rounded ms-1 px-2 ${getTypeClassName(type)}`}
          >
            {type}
          </span>
        ))}
      </div>
    </div>
  );
};

const getTypeClassName = (type: PokemonType): string => {
  switch (type) {
    case PokemonType.Grass:
      return "bg-success text-light";
    case PokemonType.Poison:
      return "bg-dark text-light";
    case PokemonType.Fire:
      return "bg-danger text-light";
    case PokemonType.Normal:
      return "bg-secondary text-light";
    case PokemonType.Water:
      return "bg-info text-light";
    case PokemonType.Rock:
      return "bg-secondary-subtle";
    default:
      return "bg-secondary";
  }
};

export default PokeCard;
