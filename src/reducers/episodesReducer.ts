import { Reducer } from "@reduxjs/toolkit";
import { EpisodeActions } from "../actions/episodeActions";
import Episode from "../types/episode.types";

export interface EpisodesState {
  status: "IDLE" | "LOADING" | "COMPLETED" | "FAILED";
  episodes: Episode[];
  errorMessage: string | null;
}

const initialState: EpisodesState = {
  status: "IDLE",
  episodes: [],
  errorMessage: null
};

const episodesReducer: Reducer<EpisodesState, EpisodeActions> = (
  state = initialState,
  action
): EpisodesState => {
  switch (action.type) {
    case "FETCH_EPISODES_PENDING":
      return {
        ...state,
        status: "LOADING",
        episodes: [],
        errorMessage: null
      };
    case "FETCH_EPISODES_SUCCESS":
      return {
        ...state,
        status: "COMPLETED",
        episodes: action.episodes
      };
    case "FETCH_EPISODES_FAILED":
      return {
        ...state,
        status: "FAILED",
        errorMessage: action.error
      };
    default:
      return state;
  }
};
export default episodesReducer;