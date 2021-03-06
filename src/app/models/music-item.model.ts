export interface MusicItem
{
    subscribe();
    id: number;
    name: string;
    price: number;
    idInCart: number;
    picture: string;
    author: string;
    releaseDate: string;
    awards: string;
    genre: string;
    rate: number;
    link: string;
}
