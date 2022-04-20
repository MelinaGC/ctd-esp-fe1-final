import "./Detalle.css";
import BotonFavorito from "../componentes/botones/boton-favorito.componente";
import TarjetaEpisodio from "../componentes/episodios/tarjeta-episodio.componente";
import { useParams } from "react-router-dom";
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector as useReduxSelector,
} from "react-redux";
import { IRootState } from "../store/store";
import { useEffect, useState } from "react";
import { fetchEpisodesThunk } from "../actions/episodeActions";
import Episode from "../types/episode.types";
import GrillaEpisodios from "../componentes/episodios/grilla-episodios.componente";

/**
 * Esta es la pagina de detalle. Aqui se puede mostrar la vista sobre el personaje seleccionado junto con la lista de episodios en los que aparece
 *
 * EL TRABAJO SOBRE ESTE ARCHIVO ES OPCIONAL Y NO ES REQUISITO DE APROBACION
 *
 *
 *
 * Uso:
 * ``` <PaginaDetalle /> ```
 *
 * @returns la pagina de detalle
 */

export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;

const PaginaDetalle = () => {
  const [characterIdDetail, setCharacterIdDetail] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const { characters, favorites } = useSelector((state) => state.characters);
  const { status } = useSelector((state) => state.episodes);
  const dispatch = useDispatch();
  const arrayEpisodesId: number[] = [];

  const { characterId } = useParams();

  useEffect(() => {
    if (characterId) {
      setCharacterIdDetail(parseInt(characterId));
    } 
  }, [characterId, dispatch]);

  const characterDetail = characters.find(
    (character) => character.id === characterIdDetail
  );

  if (characterDetail) {
    characterDetail.episode.map((episode) => {
      return arrayEpisodesId.push(parseInt(episode.substring(episode.lastIndexOf("/") + 1)))
    });
  }

 useEffect(() => {
   if(arrayEpisodesId.length === characterDetail?.episode.length)
   {
     dispatch(fetchEpisodesThunk(arrayEpisodesId))
   }
/*    if(characterDetail && favorites.includes(characterDetail)){
    setIsFavorite(true)
  } else {
    setIsFavorite(false)
  } */
    
  }, [characterDetail])   

  return (
    <div className="container">
      <h3>{characterDetail?.name}</h3>
     {characterDetail && <div className={"detalle"}>
        <div className={"detalle-header"}>
          <img src={characterDetail?.image} alt={characterDetail?.name} />
          <div className={"detalle-header-texto"}>
            <p>{characterDetail?.name}</p>
            <p>Planeta: {characterDetail?.origin.name}</p>
            <p>Genero: {characterDetail?.gender}</p>
          </div>
          <BotonFavorito /* isFavorite={isFavorite}  */character={characterDetail} />
        </div>
      </div>} 
      <h4>Lista de episodios donde apareció el personaje</h4>
      <GrillaEpisodios status={status}/>
    </div>
  );
};

export default PaginaDetalle;
