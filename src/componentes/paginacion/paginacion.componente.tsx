import { FC } from 'react';
import Character from '../../types/character.types';
import './paginacion.css';

/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
 * @returns un JSX element 
 */
const Paginacion: FC<{currentPage: number, setCurrentPage: any, characters: Character[]}> = ({currentPage, setCurrentPage, characters}) => {
    const totalPages = (characters.length / 20)

    return <div className="paginacion">
        <button disabled={currentPage === 1 ? true : false} className={"primary"} onClick={() => setCurrentPage(currentPage - 1)}>Anterior</button>
        <button disabled={totalPages < 1 ? true : false} className={"primary"} onClick={() => setCurrentPage(currentPage + 1)}>Siguiente</button>
    </div>
}

export default Paginacion;