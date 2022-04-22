import React, { FC, useState, useEffect } from "react";
import Filtros from "../componentes/personajes/filtros.componente";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { fetchCharactersThunk } from "../actions/personajesActions";
import { useDispatch } from "react-redux";
import { useSelector } from "../store/store";

/**
 * Main page, contains the filter panel and grid of characters.
 *
 * @returns main page.
 */

const PaginaInicio: FC = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const { characters, status, search } = useSelector((state) => state.characters);

  /**
   * Function that when the button to delete the filter value on the input to search for a character name
   * dispatches the action to delete the filter and get all the characters available and resets the page
   * of the web to the first.
   */
  const handleDeleteFilters = async () => {
    setPage(1);
    dispatch(fetchCharactersThunk(""));
  };

  /**
   * Function that is passed to the filter component and recibes the value of the input from the user to
   * search characters by their name and dispatches the action to fetch those characters.
   * @param {Event} e
   */
  const handleCharacterSearch = async (filterValue: string) => {
    dispatch(fetchCharactersThunk(filterValue));
  };

  useEffect(() => {
    dispatch(fetchCharactersThunk(search, page));
  }, [dispatch, page]);

  return (
    <div className="container">
      <div className="actions">
        <h3>Catálogo de Personajes</h3>
        <button className="danger" onClick={handleDeleteFilters}>
          Limpiar Filtros
        </button>
      </div>
      <Filtros
        filterValue={search}
        handleCharacterSearch={handleCharacterSearch}
      />
      <Paginacion currentPage={page} setCurrentPage={setPage} characters={characters}/>
      <GrillaPersonajes characters={characters} status={status}/> 
      <Paginacion currentPage={page} setCurrentPage={setPage} characters={characters}/>
    </div>
  );
};

export default PaginaInicio;
