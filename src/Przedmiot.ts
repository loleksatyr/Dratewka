export class Przedmiot
{
    id: number;
    opis: string;
    flaga: number;
    nazwa: string;

    constructor(id: number, opis: string, flaga: number, nazwa: string)
    {
        this.id = id;
        this.opis = opis;
        this.flaga = flaga;
        this.nazwa = nazwa;
    }

}
