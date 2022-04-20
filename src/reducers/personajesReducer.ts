import { Reducer } from "@reduxjs/toolkit";
import { CharacterActions } from "../actions/personajesActions";
import Character from "../types/character.types";

export interface PersonajesState {
  status: "IDLE" | "LOADING" | "COMPLETED" | "FAILED";
  search: string;
  characters: Character[];
  favorites: Character[];
  errorMessage: string | null;
}

const initialState: PersonajesState = {
  status: "IDLE",
  search: "",
  characters: [],
  favorites: [],
  errorMessage: null
};

const charactersReducer: Reducer<PersonajesState, CharacterActions> = (
  state = initialState,
  action
): PersonajesState => {
  switch (action.type) {
    case "FETCH_CHARACTERS_PENDING":
      return {
        ...state,
        status: "LOADING",
        search: action.query,
        characters: [],
        errorMessage: null
      };
    case "FETCH_CHARACTERS_SUCCESS":
      return {
        ...state,
        status: "COMPLETED",
        characters: action.characters
      };
    case "FETCH_CHARACTERS_FAILED":
      return {
        ...state,
        status: "FAILED",
        errorMessage: action.error
      };
    case "ADD_FAVORITE_CHARACTER":
      return {
        ...state,
        favorites: [...state.favorites.filter(character => character.id !== action.favorite.id), action.favorite]
      }
    case "REMOVE_FAVORITE_CHARACTER":
      return {
        ...state,
        favorites: [...state.favorites.filter(character => character.id !== action.favorite.id)]
      }
    case "REMOVE_ALL_FAVORITES":
      return{
        ...state,
        favorites: []
      }
    default:
      return state;
  }
};
export default charactersReducer;