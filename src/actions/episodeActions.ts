import { Action, ActionCreator, ThunkAction } from "@reduxjs/toolkit";
import { getEpisodesAPI } from "../services/episodes.service";
import { IRootState } from "../store/store";
import Episode from "../types/episode.types";

interface FetchEpisodesPendingAction extends Action {
  type: "FETCH_EPISODES_PENDING";
  query: string;
}

interface FetchEpisodesSuccessAction extends Action {
  type: "FETCH_EPISODES_SUCCESS";
  episodes: Episode[];
}

interface FetchEpisodesFailedAction extends Action {
  type: "FETCH_EPISODES_FAILED";
  error: string;
}

const fetchEpisodesPending: ActionCreator<FetchEpisodesPendingAction> = (
  query: string
) => {
  return {
    type: "FETCH_EPISODES_PENDING",
    query: query
  };
};

const fetchEpisodesSuccess: ActionCreator<FetchEpisodesSuccessAction> = (
  episodes: Episode[]
) => {
  return {
    type: "FETCH_EPISODES_SUCCESS",
    episodes: episodes
  };
};

const fetchEpisodesFailure: ActionCreator<FetchEpisodesFailedAction> = (
  error: string
) => {
  return {
    type: "FETCH_EPISODES_FAILED",
    error: error
  };
};

export type EpisodeActions =
  | ReturnType<typeof fetchEpisodesPending>
  | ReturnType<typeof fetchEpisodesSuccess>
  | ReturnType<typeof fetchEpisodesFailure>;

interface FetchEpisodesThunkAction
  extends ThunkAction<void, IRootState, unknown, EpisodeActions> {}

export const fetchEpisodesThunk = (
  query: number[]
): FetchEpisodesThunkAction => {
  return async (dispatch) => {
    dispatch(fetchEpisodesPending(query));
    try {
      const episodes: Episode[] = await getEpisodesAPI(query);
      dispatch(fetchEpisodesSuccess(episodes));
    } catch (e) {
      dispatch(fetchEpisodesFailure(e));
    }
  };
};
