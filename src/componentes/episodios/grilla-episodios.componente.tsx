import React, { FC } from "react";
import TarjetaEpisodio from "./tarjeta-episodio.componente";
import { useSelector } from "../../store/store";
import Episode from "../../types/episode.types";

/**
 * Component that render the grid of episodes on the character detail.
 * @param {string} status - to know if the episodes where fetched succesfully or not in order to render
 *                          the episodes or a message according to the status of the request. 
 * @returns {JSX.Element}
 */

const GrillaEpisodios: FC<{ status: string }> = ({ status }) => {
  const { episodes } = useSelector((state) => state.episodes);

  if (status === "LOADING") return <div>Cargando episodios...</div>;
  if (status === "FAILED") return <div>No se pudo cargar los episodios.</div>;
  if (!episodes || episodes.length === 0)
    return <>No se encontraron episodios.</>;

  return (
    <div className={"episodios-grilla"}>
      {episodes.map((episode: Episode) => {
        return <TarjetaEpisodio key={episode.id} episode={episode} />;
      })}
    </div>
  );
};

export default GrillaEpisodios;
