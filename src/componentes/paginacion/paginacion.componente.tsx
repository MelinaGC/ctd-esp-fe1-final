import { FC } from "react";
import Character from "../../types/character.types";
import "./paginacion.css";

/**
 * Component that render the buttons for the user to move to other pages to get more characters.
 * @param {number} currentPage - current page on display
 * @param {Character[]} characters - to get the amount of characters on display to know if its necessary 
 *                                   to disable the button for the next page. *
 * @returns {JSX.Element}
 */

const Paginacion: FC<{
  currentPage: number;
  setCurrentPage: any;
  characters: Character[];
}> = ({ currentPage, setCurrentPage, characters }) => {
  // this variable is used so that if a filter is applied and there are less than 20 characters on screen the 'next button' is disabled.
  const totalPages = characters.length / 20;

  return (
    <div className="paginacion">
      <button
        disabled={currentPage === 1 ? true : false}
        className={"primary"}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Anterior
      </button>
      <button
        disabled={totalPages < 1 ? true : false}
        className={"primary"}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Paginacion;
