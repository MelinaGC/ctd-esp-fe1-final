import { Action, ActionCreator, ThunkAction } from "@reduxjs/toolkit";
import { buscarPersonajesAPI } from "../services/personajesrm.services";
import { IRootState } from "../store/store";
import Character from "../types/character.types";

interface FetchCharactersPendingAction extends Action {
  type: "FETCH_CHARACTERS_PENDING";
  query: string;
}

interface FetchCharactersSuccessAction extends Action {
  type: "FETCH_CHARACTERS_SUCCESS";
  characters: Character[];
}

interface FetchCharactersFailedAction extends Action {
  type: "FETCH_CHARACTERS_FAILED";
  error: string;
}

interface AddCharacterAsFavoriteAction extends Action {
  type: "ADD_FAVORITE_CHARACTER",
  favorite: Character
}

interface RemoveCharacterFromFavoriteAction extends Action {
  type: "REMOVE_FAVORITE_CHARACTER",
  favorite: Character
}

interface RemoveAllFavoritesAction extends Action {
  type: "REMOVE_ALL_FAVORITES"
}

const fetchCharactersPending: ActionCreator<FetchCharactersPendingAction> = (
  query: string
) => {
  return {
    type: "FETCH_CHARACTERS_PENDING",
    query: query
  };
};

const fetchCharactersSuccess: ActionCreator<FetchCharactersSuccessAction> = (
  characters: Character[]
) => {
  return {
    type: "FETCH_CHARACTERS_SUCCESS",
    characters: characters
  };
};

const fetchCharactersFailure: ActionCreator<FetchCharactersFailedAction> = (
  error: string
) => {
  return {
    type: "FETCH_CHARACTERS_FAILED",
    error: error
  };
};

export const addCharacterAsFavorite: ActionCreator<AddCharacterAsFavoriteAction> = (
  favorite: Character
) => {
  return {
    type: "ADD_FAVORITE_CHARACTER",
/*     character: favorite, */
    favorite: favorite
  }
}

export const removeCharacterFromFavorite: ActionCreator<RemoveCharacterFromFavoriteAction> = 
(favorite: Character) => {
  return {
    type: "REMOVE_FAVORITE_CHARACTER",
/*     character: favorite, */
    favorite: favorite
  }
}

export const removeAllFavorites: ActionCreator<RemoveAllFavoritesAction> = () =>{
  return {
    type: "REMOVE_ALL_FAVORITES"
  }
}

export type CharacterActions =
  | ReturnType<typeof fetchCharactersPending>
  | ReturnType<typeof fetchCharactersSuccess>
  | ReturnType<typeof fetchCharactersFailure>
  | ReturnType<typeof addCharacterAsFavorite>
  | ReturnType<typeof removeCharacterFromFavorite>
  | ReturnType<typeof removeAllFavorites>;

interface FetchCharactersThunkAction
  extends ThunkAction<void, IRootState, unknown, CharacterActions> {}

export const fetchCharactersThunk = (
  query: string,
  page?: number
): FetchCharactersThunkAction => {
  return async (dispatch) => {
    dispatch(fetchCharactersPending(query));
    try {
      const characters: Character[] = await buscarPersonajesAPI(query, page);
      dispatch(fetchCharactersSuccess(characters));
    } catch (e) {
      dispatch(fetchCharactersFailure(e));
    }
  };
};
