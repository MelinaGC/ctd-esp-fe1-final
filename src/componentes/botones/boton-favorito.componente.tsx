import { FC } from "react";
import "./boton-favorito.css";
import {
  addCharacterAsFavorite,
  removeCharacterFromFavorite,
} from "../../actions/personajesActions";
import Character from "../../types/character.types";
import { useDispatch } from "react-redux";
import { useSelector } from "../../store/store";
/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 *
 * Deberás tipar las propiedades si usas este componente
 *
 *
 * @returns un JSX element
 */

const BotonFavorito: FC<{ character: Character }> = ({ character }) => {
  const dispatch = useDispatch();

  const { favorites } = useSelector((state) => state.characters);
  const isFavorite = favorites.find((fav) => fav.id === character.id)
    ? true
    : false;

  const handleCharactersFavorites = () => {
    if (!isFavorite) {
      dispatch(addCharacterAsFavorite(character));
    } else {
      dispatch(removeCharacterFromFavorite(character));
    }
  };

  const src = isFavorite ? "/imagenes/star-filled.png" : "/imagenes/star.png";

  return (
    <div className="boton-favorito">
      <img src={src} alt={"favorito"} onClick={handleCharactersFavorites} />
    </div>
  );
};

export default BotonFavorito;
