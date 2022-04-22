import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import { useDispatch } from "react-redux";
import { useSelector } from "../store/store";
import { removeAllFavorites } from "../actions/personajesActions";

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 *
 * Uso:
 * ``` <PaginaFavoritos /> ```
 *
 * @returns la pagina de favoritos
 */

const PaginaFavoritos = () => {
  const { favorites } = useSelector((state) => state.characters);
  const dispatch = useDispatch();

  const removeFavoritesHandler = () => {
    dispatch(removeAllFavorites());
  };

  return (
    <div className="container">
      <div className="actions">
        <h3>Personajes Favoritos</h3>
        <button className="danger" onClick={removeFavoritesHandler}>
          Eliminar todos
        </button>
      </div>
      <GrillaPersonajes characters={favorites} status={""} />
    </div>
  );
};

export default PaginaFavoritos;
