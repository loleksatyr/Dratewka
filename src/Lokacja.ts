export class Lokacja
{
    opis: string;
    kierunek: number[];
    gfx: string;
    kolor: string;
    eq: number[];

    constructor();
    constructor(opis: string, kierunek: number[], gfx: string, kolor: string, eq: number[]);
    constructor(opis: string = "", kierunek: number[] = [], gfx: string = "", kolor: string = "", eq: number[] = [])
    {
        this.opis = opis;
        this.kierunek = kierunek;
        this.gfx = gfx;
        this.kolor = kolor;
        this.eq = eq;
    }
}
