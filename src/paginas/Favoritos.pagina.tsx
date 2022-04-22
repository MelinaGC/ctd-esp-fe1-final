import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import { useDispatch } from "react-redux";
import { useSelector } from "../store/store";
import { removeAllFavorites } from "../actions/personajesActions";

/**
 * Renders the favorite page and it is where all the favorite characters should be seen.
 *
 * @returns favorite characters page
 */

const PaginaFavoritos = () => {
  const { favorites } = useSelector((state) => state.characters);
  const dispatch = useDispatch();

  /**
   * Function that when the button to delete all favorites in clicked dispatches the action to delete all
   * characters from the favorite array.
   */
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
