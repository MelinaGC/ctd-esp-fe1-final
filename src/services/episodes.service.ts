import Episode from "../types/episode.types";

export const getEpisodesAPI = async (
  episodesId: number[]
): Promise<Episode[]> => {
  return fetch(`https://rickandmortyapi.com/api/episode/[${episodesId}]`)
    .then((data) => data.json())
    .then((data) => data);
};
