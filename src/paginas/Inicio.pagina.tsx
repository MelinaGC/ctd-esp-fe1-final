import React, { FC, useState, useEffect } from "react";
import Filtros from "../componentes/personajes/filtros.componente";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { fetchCharactersThunk } from "../actions/personajesActions";
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector as useReduxSelector,
} from "react-redux";
import { IRootState } from "../store/store";

/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 *
 * Uso:
 * ``` <PaginaInicio /> ```
 *
 * @returns la pagina de inicio
 */

 export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;

const PaginaInicio: FC = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const { characters, status, search } = useSelector((state) => state.characters);

  const handleDeleteFilters = async () => {
    setPage(1);
    dispatch(fetchCharactersThunk(""));
  };

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
