import { Przedmiot } from "./Przedmiot";
import { Lokacja } from "./Lokacja";
import { Main } from "./Main";

export class Gra
{
    main: Main;
    x: number = 3;
    y: number = 6;
    acc: number = 0;
    kierunek: string[] = ["NORTH", "SOUTH", "WEST", "EAST"];
    ekwipunek = [];
    zdobyte = [];

    constructor(main: Main)
    {
        this.main = main;
    }

    przedmioty: Przedmiot[] = [
        new Przedmiot(10, "a KEY", 1, "KEY"),
        new Przedmiot(11, "an AXE", 1, "AXE"),
        new Przedmiot(12, "STICKS", 1, "STICKS"),
        new Przedmiot(13, "sheeplegs", 0, "sheeplegs"),
        new Przedmiot(14, "MUSHROOMS", 1, "MUSHROOMS"),
        new Przedmiot(15, "MONEY", 1, "MONEY"),
        new Przedmiot(16, "a BARREL", 1, "BARREL"),
        new Przedmiot(17, "a sheeptrunk", 0, "sheeptrunk"),
        new Przedmiot(18, "BERRIES", 1, "BERRIES"),
        new Przedmiot(19, "WOOL", 1, "WOOL"),
        new Przedmiot(20, "a sheepskin", 0, "sheepskin"),
        new Przedmiot(21, "a BAG", 1, "BAG"),
        new Przedmiot(22, "a RAG", 1, "RAG"),
        new Przedmiot(23, "a sheephead", 0, "sheephead"),
        new Przedmiot(24, "a SPADE", 1, "SPADE"),
        new Przedmiot(25, "SULPHUR", 1, "SULPHUR"),
        new Przedmiot(26, "a solid poison", 0, "solid poison"),
        new Przedmiot(27, "a BUCKET", 1, "BUCKET"),
        new Przedmiot(28, "TAR", 1, "TAR"),
        new Przedmiot(29, "a liquid poison", 0, "liquid poison"),
        new Przedmiot(30, "a dead dragon", 0, "dead dragon"),
        new Przedmiot(31, "a STONE", 1, "STONE"),
        new Przedmiot(32, "a FISH", 1, "FISH"),
        new Przedmiot(33, "a KNIFE", 1, "KNIFE"),
        new Przedmiot(34, "a DRAGONSKIN", 1, "DRAGONSKIN"),
        new Przedmiot(35, "a dragonskin SHOES", 1, "SHOES"),
        new Przedmiot(36, "a PRIZE", 1, "PRIZE"),
        new Przedmiot(37, "a SHEEP", 1, "SHEEP")
    ];

    lokacja: Lokacja[][] = [
        [new Lokacja("You are inside a brimstone mine", [0, 0, 0, 1], "gfx/11.gif", "rgb(235,211,64)", []),
        new Lokacja("You are at the entrance to the mine", [0, 0, 1, 1], "gfx/12.gif", "rgb(89,93,87)", []),
        new Lokacja("A hill", [0, 1, 1, 1], "gfx/13.gif", "rgb(117,237,243)", [31]),
        new Lokacja("Some bushes", [0, 0, 1, 1], "gfx/14.gif", "rgb(202,230,51)", []),
        new Lokacja("An old deserted hut", [0, 0, 1, 1], "gfx/15.gif", "rgb(220,204,61)", [27]),
        new Lokacja("The edge of a forest", [0, 0, 1, 1], "gfx/16.gif", "rgb(167,245,63)", []),
        new Lokacja("A dark forest", [0, 1, 1, 0], "gfx/17.gif", "rgb(140,253,99)", [14]),],
        [new Lokacja("A man nearby making tar", [0, 1, 0, 1], "gfx/21.gif", "rgb(255,190,99)", []),
        new Lokacja("A timber yard", [0, 1, 1, 1], "gfx/22.gif", "rgb(255,190,99)", []),
        new Lokacja("You are by a roadside shrine", [1, 1, 1, 1], "gfx/23.gif", "rgb(167,245,63)", [10]),
        new Lokacja("You are by a small chapel", [0, 0, 1, 1], "gfx/24.gif", "rgb(212,229,36)", []),
        new Lokacja("You are on a road leading to a wood", [0, 1, 1, 1], "gfx/25.gif", "rgb(167,245,63)", []),
        new Lokacja("You are in a forest", [0, 0, 1, 1], "gfx/26 i 65.gif", "rgb(167,245,63)", []),
        new Lokacja("You are in a deep forest", [1, 0, 1, 0], "gfx/27 i 67.gif", "rgb(140,253,99)", [18]),],
        [new Lokacja("You are by the Vistula River", [1, 0, 0, 1], "gfx/31.gif", "rgb(122,232,252)", []),
        new Lokacja("You are by the Vistula River", [1, 0, 1, 0], "gfx/32.gif", "rgb(140,214,255)", [32]),
        new Lokacja("You are on a bridge over river", [1, 1, 0, 0], "gfx/33.gif", "rgb(108,181,242)", []),
        new Lokacja("You are by the old tavern", [0, 0, 0, 1], "gfx/34.gif", "rgb(255,189,117)", []),
        new Lokacja("You are at the town's end", [1, 1, 1, 0], "gfx/35.gif", "rgb(255,190,99)", []),
        new Lokacja("You are in a butcher's shop", [0, 1, 0, 0], "gfx/36.gif", "rgb(255,188,102)", []),
        new Lokacja("You are in a cooper's house", [0, 1, 0, 0], "gfx/37.gif", "rgb(255,188,102)", []),],
        [new Lokacja("You are in the Wawel Castle", [0, 0, 0, 1], "gfx/41.gif", "rgb(255,176,141)", []),
        new Lokacja("You are inside a dragon's cave", [0, 0, 1, 1], "gfx/42.gif", "rgb(198,205,193)", []),
        new Lokacja("A perfect place to set a trap", [1, 0, 1, 0], "gfx/43.gif", "rgb(255,176,141)", []),
        new Lokacja("You are by the water mill", [0, 0, 0, 1], "gfx/44.gif", "rgb(255,190,99)", [21]),
        new Lokacja("You are at a main crossroad", [1, 1, 1, 1], "gfx/45.gif", "rgb(255,190,99)", []),
        new Lokacja("You are on a town street", [1, 0, 1, 1], "gfx/46.gif", "rgb(255,190,99)", []),
        new Lokacja("You are in a frontyard of your house", [1, 1, 1, 0], "gfx/47.gif", "rgb(255,190,99)", []),],
        [new Lokacja(),
        new Lokacja(),
        new Lokacja(),
        new Lokacja("You are by a swift stream", [0, 0, 0, 1], "gfx/54.gif", "rgb(108,181,242)", []),
        new Lokacja("You are on a street leading forest", [1, 1, 1, 0], "gfx/55.gif", "rgb(255,190,99)", [33]),
        new Lokacja("You are in a woodcutter's backyard", [0, 1, 0, 0], "gfx/56.gif", "rgb(255,190,99)", []),
        new Lokacja("You are in a shoemaker's house", [1, 0, 0, 0], "gfx/57.gif", "rgb(254,194,97)", []),],
        [new Lokacja(),
        new Lokacja(),
        new Lokacja(),
        new Lokacja("You are in a bleak funeral house", [0, 0, 0, 1], "gfx/64.gif", "rgb(254,194,97)", [24]),
        new Lokacja("You are on a path leading to the wood", [1, 0, 1, 1], "gfx/26 i 65.gif", "rgb(167,245,63)", []),
        new Lokacja("You are at the edge of a forest", [1, 0, 1, 1], "gfx/66.gif", "rgb(167,245,63)", []),
        new Lokacja("You are in a deep forest", [0, 0, 1, 0], "gfx/27 i 67.gif", "rgb(140,253,99)", []),]
    ];

    comm(e)
    {
        let uItem: any;

        if (this.main.vocaCtrl == 1)
        {
            document.getElementById("voca").style.display = "none";
            this.main.vocaCtrl = 0;
        }
        if (this.main.gossCtrl == 1)
        {
            document.getElementById("goss").style.display = "none";
            this.main.gossCtrl = 0;
        }
        if (e.which == 13)
        {
            let vall = (<any>document.getElementById("inp")).value;
            let val = vall.split(" ");
            (<any>document.getElementById("inp")).value = "";
            let cItem: any = "nope";
           
            for (let i = 0; i < this.przedmioty.length; i++)
            {
                if (val[1] == this.przedmioty[i].nazwa)
                {
                    cItem = i;
                }
            }
            if (cItem != "nope")
            {
                for (let i = 0; i < this.uzycia.length; i++)
                {
                    if (this.przedmioty[cItem].id == this.uzycia[i][0])
                    {
                        uItem = i;
                        this.komendy[6][2] = <string>this.uzycia[uItem][3];
                    }
                }
            }
            else
            {
                uItem = "nope";
            }

            if (val[0] == this.komendy[0][0] || val[0] == this.komendy[0][1])
            {
                if (this.lokacja[this.x][this.y].kierunek[0] == 1)
                {
                    this.text(0, 2, "");
                    this.x--;
                }
                else
                {
                    this.text(0, 3, "");
                }
            }
            if (val[0] == this.komendy[1][0] || val[0] == this.komendy[1][1])
            {
                if (this.lokacja[this.x][this.y].kierunek[1] == 1)
                {
                    this.text(1, 2, "");
                    this.x++;
                }
                else
                {
                    this.text(1, 3, "");
                }
            }
            if (val[0] == this.komendy[2][0] || val[0] == this.komendy[2][1])
            {
                if (this.lokacja[this.x][this.y].kierunek[2] == 1)
                {
                    this.text(2, 2, "");
                    this.y--;
                }
                else
                {
                    this.text(2, 3, "");
                }
            }
            if (val[0] == this.komendy[3][0] || val[0] == this.komendy[3][1])
            {
                if (this.lokacja[this.x][this.y].kierunek[3] == 1)
                {
                    this.text(3, 2, "");
                    this.y++;
                }
                else
                {
                    this.text(3, 3, "");
                }
            }
            if (val[0] == this.komendy[4][0] || val[0] == this.komendy[4][1])
            {
               
                if (cItem != "nope")
                {
                    if (this.ekwipunek.length != 1)
                    {
                        if (this.przedmioty[cItem].flaga == 0)
                        {
                            this.text(4, 4, "");
                        }
                        else
                        {
                            if (this.lokacja[this.x][this.y].eq[0] == this.przedmioty[cItem].id || this.lokacja[this.x][this.y].eq[1] == this.przedmioty[cItem].id || this.lokacja[this.x][this.y].eq[2] == this.przedmioty[cItem].id)
                            {
                                this.text(4, 2, this.przedmioty[cItem].opis);
                                let a: any = this.lokacja[this.x][this.y].eq.indexOf(this.przedmioty[cItem].id);
                                this.lokacja[this.x][this.y].eq.splice(a, 1);
                                this.ekwipunek[0] = this.przedmioty[cItem].id;
                            }
                            else
                            {
                                this.text(4, 5, "");
                            }
                        }
                    }
                    else
                    {
                        this.text(4, 3, "");
                    }
                }
                else
                {
                    this.text(4, 5, "");
                }
            }
            if (val[0] == this.komendy[5][0] || val[0] == this.komendy[5][1])
            {
               
                if (this.ekwipunek.length != 0)
                {
                    if (cItem != "nope" && this.przedmioty[cItem].id == this.ekwipunek[0])
                    {
                        if (this.lokacja[this.x][this.y].eq.length == 3)
                        {
                            this.text(5, 4, "");
                        }
                        else
                        {
                            this.text(5, 2, this.przedmioty[cItem].opis);
                            let a = this.ekwipunek[0];
                            this.ekwipunek.splice(0, 1);
                            this.lokacja[this.x][this.y].eq.push(this.przedmioty[cItem].id);
                        }
                    }
                    else
                    {
                        this.text(5, 5, "");
                    }
                }
                else
                {
                    this.text(5, 3, "");
                }
            }
            if (val[0] == this.komendy[6][0] || val[0] == this.komendy[6][1])
            {
               
                if (cItem != "nope" && this.przedmioty[cItem].id == this.ekwipunek[0])
                {
                    if (this.ekwipunek.length == 0)
                    {
                        this.text(6, 3, "");
                    }
                    else
                    {
                        switch (uItem)
                        {
                            case 10:
                                if (this.x + 1 != this.uzycia[uItem][1][0] || this.y + 1 != this.uzycia[uItem][1][1])
                                {
                                    this.text(6, 4, "");
                                }
                                else
                                {
                                    this.komendy[6][2] = this.special[0][0];
                                    this.text(6, 2, "");
                                    setTimeout(function ()
                                    {
                                        this.komendy[6][2] = this.special[0][1]; this.text(6, 2, "");
                                        setTimeout(function ()
                                        {
                                            this.komendy[6][2] = this.special[0][2];
                                            this.text(6, 2, "");
                                            this.ekwipunek.splice(0, 1);
                                            this.ekwipunek.push(this.uzycia[uItem][2]);
                                            this.laduj_lokacje();
                                        }, 1500);
                                    }, 1500);

                                }
                                break;
                            case 15:
                                if (this.x + 1 != this.uzycia[uItem][1][0] || this.y + 1 != this.uzycia[uItem][1][1])
                                {
                                    this.text(6, 4, "");
                                }
                                else
                                {
                                    this.komendy[6][2] = this.special[1][0];
                                    this.text(6, 2, "");
                                    setTimeout(function ()
                                    {
                                        this.komendy[6][2] = this.special[1][1];
                                        this.text(6, 2, "");
                                        (<any>document.getElementById("gfx")).src = "gfx/smok.bmp";
                                        this.lokacja[3][2].gfx = "gfx/smok.bmp";
                                        this.ekwipunek.splice(0, 1);
                                        this.ekwipunek.push("30");
                                    }, 1500);
                                }
                                break;
                            case 19:
                                console.log("Wygrałeś");
                                break;
                            case 16:
                                if (this.x + 1 != this.uzycia[uItem][1][0] || this.y + 1 != this.uzycia[uItem][1][1])
                                {
                                    this.text(6, 4, "");
                                }
                                else
                                {
                                    if (this.acc == 6)
                                    {
                                        this.text(6, 2, "");
                                        this.ekwipunek.splice(0, 1);
                                        this.ekwipunek.push("34");
                                    }
                                    else
                                    {
                                        this.text(6, 4, "");
                                    }
                                }
                                break;
                            default:
                                if (this.x + 1 != this.uzycia[uItem][1][0] || this.y + 1 != this.uzycia[uItem][1][1])
                                {
                                    this.text(6, 4, "");
                                }
                                else
                                {
                                    this.text(6, 2, "");
                                    this.ekwipunek.splice(0, 1);
                                    if (this.uzycia[uItem][5] != 1)
                                    {

                                        this.ekwipunek.push(this.uzycia[uItem][2]);
                                    }
                                    else
                                    {
                                        this.acc++;
                                        for (let i = 0; i < this.przedmioty.length; i++)
                                        {
                                            if (this.przedmioty[i].id == this.uzycia[uItem][2])
                                            {
                                                this.zdobyte.push(this.przedmioty[i].opis);
                                            }
                                        }

                                        if (this.acc == 6)
                                        {
                                            setTimeout(function ()
                                            {
                                                this.komendy[6][2] = <string>this.uzycia[14][3];
                                                this.text(6, 2, "");
                                                this.ekwipunek.push(37);
                                                this.laduj_lokacje;
                                            }, 1500);
                                        }
                                    }
                                }
                                break;
                        }
                    }
                }
                else
                {
                    this.text(6, 3, "");
                }
            }
            if (val[0] == this.komendy[7][0] || val[0] == this.komendy[7][1])
            {
                document.getElementById("goss").style.display = "block";
                this.main.gossCtrl = 1;
            }
            if (val[0] == this.komendy[8][0] || val[0] == this.komendy[8][1])
            {
                document.getElementById("voca").style.display = "block";
                this.main.vocaCtrl = 1;
            }
            this.laduj_lokacje();
        }

    }

    uzycia = [
        [10, [5, 6], 11, "You opened a tool shed and took an axe", 0, 0],
        [11, [6, 7], 12, "You cut sticks for sheeplegs", 0, 0],
        [12, [4, 3], 13, "You prepared legs for your fake sheep", 1, 1],
        [14, [3, 4], 15, "The tavern owner paid you money", 0, 0],
        [15, [3, 7], 16, "The cooper sold you a new barrel", 0, 0],
        [16, [4, 3], 17, "You made a nice sheeptrunk", 1, 1],
        [18, [3, 6], 19, "The butcher gave you wool", 0, 0],
        [19, [4, 3], 20, "You prepared skin for your fake sheep", 1, 1],
        [21, [5, 7], 22, "You used your tools to make a rag", 0, 0],
        [22, [4, 3], 23, "You made a fake sheephead", 1, 1],
        [24, [1, 1], 25, "You are digging... (timeout) and digging... (timeout) That's enough sulphur for you", 1, 0],
        [25, [4, 3], 26, "You prepared a solid poison", 0, 1],
        [27, [2, 1], 28, "You got a bucket full of tar", 0],
        [28, [4, 3], 29, "You prepared a liquid poison", 1, 1],
        [6, [4, 3], 37, "Your fake sheep is full of poison and ready to be eaten by the dragon", 0, 0],
        [37, [4, 3], 30, "The dragon noticed your gift... (timeout) The dragon ate your sheep and died! - podmiana grafiki na lokacji (martwy smok)!", 0, 1],
        [33, [4, 3], 34, "You cut a piece of dragon's skin", 0, 0],
        [34, [5, 7], 35, "You used your tools to make shoes", 0, 0],
        [35, [4, 1], 36, "The King is impressed by your shoes", 0, 0],
        [36, 0, 0, "-> koniec gry - załadowanie odpowiedniej grafiki"]
    ];

    special = [
        ["You are digging...", "and digging...", "That's enough sulphur for you"],
        ["The dragon noticed your gift...", "The dragon ate your sheep and died!"]
    ];

    komendy = [
        ["NORTH", "N", "You are going north", "You can't go that way"],
        ["SOUTH", "S", "You are going south", "You can't go that way"],
        ["WEST", "W", "You are going west", "You can't go that way"],
        ["EAST", "E", "You are going east", "You can't go that way"],
        ["TAKE", "T", "You are taking ", "You are carrying something", "You can't carry it", "There isn't anything like that here "],
        ["DROP", "D", "You are about to drop ", "You are not carrying anything", "You can't store any more here", "You are not carrying it"],
        ["USE", "U", "", "You aren't carrying anything like that", "Nothing happened"],
        ["GOSSIPS", "G"],
        ["VOCABULARY", "V"],
    ];

    text(x, y, z)
    {
        let div = document.getElementById("komunikat");
        div.innerHTML = this.komendy[x][y] + " " + z;
        div.style.display = "block";
        setTimeout(function () { div.style.display = "none"; }, 1500);
    }

    laduj_lokacje()
    {

        document.getElementById("opis").innerHTML = this.lokacja[this.x][this.y].opis;
        (<any>document.getElementById("gfx")).src = this.lokacja[this.x][this.y].gfx;
        document.getElementById("gfx").style.background = this.lokacja[this.x][this.y].kolor;
        let zmKier = "You can go ";
        for (let i = 0; i < 4; i++)
        {
            if (this.lokacja[this.x][this.y].kierunek[i] == 1)
            {
                zmKier = zmKier + this.kierunek[i] + " ";

            }
        }
        document.getElementById("kierunek").innerHTML = zmKier;
        let przed = "You see ";
        if (this.lokacja[this.x][this.y].eq.length == 0 && this.zdobyte.length == 0)
        {
            przed = przed + "nothing";
        }
        else
        {
            for (let j = 0; j < this.lokacja[this.x][this.y].eq.length; j++)
            {
                let idp = this.lokacja[this.x][this.y].eq[j];
                for (let i = 0; i < this.przedmioty.length; i++)
                {

                    if (this.przedmioty[i].id == idp)
                    {
                        przed = przed + this.przedmioty[i].opis + " ";
                    }
                }
            }
        }
        przed = przed + " " + this.zdobyte;
        document.getElementById("eq").innerHTML = przed;
        przed = "You are carrying ";
        if (this.ekwipunek.length == 0)
        {
            przed = przed + "nothing";
        }
        else
        {
            for (let i = 0; i < this.przedmioty.length; i++)
            {
                if (this.przedmioty[i].id == this.ekwipunek[0])
                {
                    przed = przed + this.przedmioty[i].opis;
                }
            }
        }
        document.getElementById("carry").innerHTML = przed;
        for (let i = 0; i < 4; i++)
        {
            let x = i + 1;
            if (this.lokacja[this.x][this.y].kierunek[i] == 1)
            {
                document.getElementById("blank" + x).style.display = "none";

            }
            else
            {
                document.getElementById("blank" + x).style.display = "block";
            }
        }
    }

    start()
    {
        let bg = document.createElement("audio");
        bg.id = "bg";
        let serc = document.createElement("source");
        serc.src = "hej.mp3";
        serc.type = "audio/mp3";
        bg.appendChild(serc);
        document.getElementById("pole").appendChild(bg);
        let vid: any = document.getElementById("bg");
        vid.volume = 0.1;
        vid.play();
        let czol: any = document.getElementById("czol");
        czol.style.display = "block";
        czol.src = "gfx/czołówka.jpg";
        setTimeout(function ()
        {
            czol.src = "gfx/OPIS_A.jpg";
            setTimeout(function ()
            {
                czol.src = "gfx/OPIS_B.jpg";
                setTimeout(function ()
                {
                    czol.style.display = "none";
                    vid.pause();
                }, 5000);
            }, 5000);
        }, 5000);
    }
}
