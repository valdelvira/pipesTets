export enum Color {
    rojo, negro, azul, verde
}


export interface Heroe {
    name: string;
    side: boolean;
    color: Color;
}