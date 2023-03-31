import { character } from "./card/types/type";

export const getCharactersApi = async(): Promise<Array<character>> => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    console.log(data.results);
    return data.results;
}
