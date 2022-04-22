import React, { FC } from "react";
import "./grilla-personajes.css";
import TarjetaPersonaje from "./tarjeta-personaje.componente";
import Character from "../../types/character.types";

/**
 * Component that render the grid of characters on the home page.
 * @param {Character[]} characters
 * @param {string} status - to know if the characters where fetched succesfully or not in order to render
 *                          the characters or a message according to the status of the request.
 * @returns {JSX.Element}
 */

const GrillaPersonajes: FC<{ characters: Character[]; status: string }> = ({
  characters,
  status,
}) => {
  if (status === "LOADING") return <div>Cargando personajes...</div>;
  if (status === "FAILED") return <div>No se pudo cargar los personajes.</div>;
  if (!characters || characters.length === 0)
    return <>No se encontraron personajes.</>;

  return (
    <div className="grilla-personajes">
      {characters.map((character: Character) => {
        return <TarjetaPersonaje key={character.id} character={character} />;
      })}
    </div>
  );
};

export default GrillaPersonajes;
