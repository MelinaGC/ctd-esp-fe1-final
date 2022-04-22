import Character from "../types/character.types";

export const getCharactersAPI = async (
    nombre?: string,
    page?: number
): Promise<Character[]> => {
  let params = `?page=${page ? page : 1}`;
  if (nombre) {
    params += `&name=${nombre}`;
  }
  return fetch(`https://rickandmortyapi.com/api/character/${params}`)
    .then((data) => data.json())
    .then((data) => data.results);
};
