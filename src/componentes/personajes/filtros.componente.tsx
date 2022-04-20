import { FC } from "react";
import "./filtros.css";

const Filtros: FC<{
  filterValue: string;
  handleCharacterSearch: (filterName: string) => {};
}> = ({ filterValue, handleCharacterSearch }) => {
  return (
    <div className="filtros">
      <label htmlFor="nombre">Filtrar por nombre:</label>
      <input
        type="text"
        placeholder="Rick, Morty, Beth, Alien, ...etc"
        name="nombre"
        onChange={(e) => {
          handleCharacterSearch(e.target.value);
        }}
        value={filterValue}
      />
    </div>
  );
};

export default Filtros;
