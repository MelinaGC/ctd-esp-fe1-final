import React, { FC} from "react";
import "./grilla-personajes.css";
import TarjetaPersonaje from "./tarjeta-personaje.componente";
/* import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector as useReduxSelector,
} from "react-redux";
import { IRootState } from "../../store/store"; */
import Character from "../../types/character.types";

/**
 * Grilla de personajes para la pagina de inicio
 *
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 *
 *
 * @returns un JSX element
 */

const GrillaPersonajes: FC<{characters: Character[], status: string}> = ({characters, status}) => {

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
