import { FC } from "react";
import Character from "../../types/character.types";
import BotonFavorito from "../botones/boton-favorito.componente";
import "./tarjeta-personaje.css";
import { useNavigate } from "react-router-dom";

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes.
 *
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 *
 *
 * @returns un JSX element
 */

const TarjetaPersonaje: FC<{ character: Character }> = ({ character }) => {
  const navigate = useNavigate();

  return (
    <div className="tarjeta-personaje">
      <img
        src={character.image}
        alt={character.name}
        onClick={() => navigate(`/detalle/${character.id}`)}
      />
      <div className="tarjeta-personaje-body">
        <span>{character.name}</span>
        <BotonFavorito character={character} />
      </div>
    </div>
  );
};

export default TarjetaPersonaje;
