import { FC } from "react";
import Episode from "../../types/episode.types";
import "./tarjeta-episodio.css";

/**
 * Card for each episode in the character detail view.
 * @param {Episode} episode
 * @returns {JSX.Element}
 */

const TarjetaEpisodio: FC<{ episode: Episode }> = ({ episode }) => {
  return (
    <div className="tarjeta-episodio">
      <h4>{episode.name}</h4>
      <div>
        <span>{episode.episode}</span>
        <span>Lanzado el: {episode.air_date}</span>
      </div>
    </div>
  );
};

export default TarjetaEpisodio;
