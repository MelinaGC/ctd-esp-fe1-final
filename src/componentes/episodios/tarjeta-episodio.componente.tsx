import { FC } from 'react';
import Episode from '../../types/episode.types';
import './tarjeta-episodio.css';
import {
    TypedUseSelectorHook,
    useSelector as useReduxSelector,
  } from "react-redux";
  import { IRootState } from "../../store/store";

/**
 * Tarjeta para cada episodio dentro de la vista de personaje.
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los episodios
 * 
 * 
 * @returns un JSX element 
 */
 export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;

const TarjetaEpisodio: FC<{episode: Episode}> = ({episode}) => {

    return <div className="tarjeta-episodio">
            <h4>{episode.name}</h4>
            <div>
                <span>{episode.episode}</span>
                <span>Lanzado el: {episode.air_date}</span>
            </div>
    </div>
}

export default TarjetaEpisodio;