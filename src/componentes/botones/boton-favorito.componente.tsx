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
 * Button that indicates is an element is favorite or not, y allows the user to set it as favorite or remove it
 * @param {Character} character 
 * @returns {JSX.Element}
 */

const BotonFavorito: FC<{ character: Character }> = ({ character }) => {
  const dispatch = useDispatch();

  const { favorites } = useSelector((state) => state.characters);
  const isFavorite = favorites.find((fav) => fav.id === character.id)
    ? true
    : false;

  /**
   * Function that when the button to set or unset a character as favorites is clicked checks whether if
   * the character was already set as favorite or not and dispatches the action to add the character
   * as favorite or remove it.
   */
  const handleCharactersFavorites = () => {
    if (!isFavorite) {
      dispatch(addCharacterAsFavorite(character));
    } else {
      dispatch(removeCharacterFromFavorite(character));
    }
  };

  const src = isFavorite ? "/imagenes/star-filled.png" : "/imagenes/star.png";

  return (
    <div className="boton-favorito" onClick={handleCharactersFavorites}>
      <img src={src} alt={"favorito"} />
    </div>
  );
};

export default BotonFavorito;
