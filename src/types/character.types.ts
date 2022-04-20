interface Character {
    id: number;
    name: string;
    status: string;
    image: string;
    species: string;
    episode: string[];
    gender: string;
    origin: {name: string, url:string};
}

export default Character;