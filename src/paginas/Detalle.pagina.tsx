import "./Detalle.css";
import BotonFavorito from "../componentes/botones/boton-favorito.componente";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "../store/store";
import { useEffect, useState } from "react";
import { fetchEpisodesThunk } from "../actions/episodeActions";
import GrillaEpisodios from "../componentes/episodios/grilla-episodios.componente";
import Character from "../types/character.types";

/**
 * Component that render the detail page of a character with its details and episodes it appears on.
 *
 * @returns character detail page.
 */

const PaginaDetalle = () => {
  const [characterDetail, setCharacterDetail] = useState<Character>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { status } = useSelector((state) => state.episodes);
  const dispatch = useDispatch();
  const arrayEpisodesId: number[] = [];

  const { characterId } = useParams();

  useEffect(() => {
    if (characterId) {
      fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
        .then((response) => response.json())
        .then((data) => {
          setCharacterDetail(data);
          setIsLoading(false);
        });
    }
  }, [characterId]);

  if (characterDetail) {
    characterDetail.episode.map((episode) => {
      return arrayEpisodesId.push(
        parseInt(episode.substring(episode.lastIndexOf("/") + 1))
      );
    });
  }

  useEffect(() => {
    if (arrayEpisodesId.length === characterDetail?.episode.length) {
      dispatch(fetchEpisodesThunk(arrayEpisodesId));
    }
  }, [characterDetail]);

  if (isLoading) {
    return (
      <div className="container">
        <h2>Cargando personaje...</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <h3>{characterDetail?.name}</h3>
      {characterDetail && (
        <div className={"detalle"}>
          <div className={"detalle-header"}>
            <img src={characterDetail.image} alt={characterDetail.name} />
            <div className={"detalle-header-texto"}>
              <p>{characterDetail.name}</p>
              <p>Planeta: {characterDetail.origin.name}</p>
              <p>Genero: {characterDetail.gender}</p>
            </div>
            <BotonFavorito character={characterDetail} />
          </div>
        </div>
      )}
      <h4>Lista de episodios donde apareció el personaje</h4>
      <GrillaEpisodios status={status} />
    </div>
  );
};

export default PaginaDetalle;
