import { Gra } from "./Gra";
export class Main
{
    gossCtrl = 0;
    vocaCtrl = 0;
    gra = new Gra(this);

    constructor()
    {
        let a = 3;
        let b = 6;
        this.gossCtrl = 0;
        this.vocaCtrl = 0;
        let div1 = document.createElement("div");
        div1.id = "pole";
        div1.style.width = "600px";
        div1.style.height = "400px";
        div1.style.background = "black";
        div1.style.color = "#1ec503";
        document.body.appendChild(div1);
        let div2 = document.createElement("div");
        div2.id = "opis";
        div2.innerHTML = this.gra.lokacja[a][b].opis;
        document.getElementById("pole").appendChild(div2);
        let img = document.createElement("img");
        img.id = "gfx";
        img.src = this.gra.lokacja[a][b].gfx;
        img.style.background = this.gra.lokacja[a][b].kolor;
        document.getElementById("pole").appendChild(img);
        let img2 = document.createElement("img");
        img2.id = "kompas";
        img2.src = "gfx/kompas.bmp";
        document.getElementById("pole").appendChild(img2);
        let div3 = document.createElement("div");
        div3.id = "kierunek";
        let zmKier = "You can go ";
        for (let i = 0; i < 4; i++)
        {
            if (this.gra.lokacja[a][b].kierunek[i] == 1)
            {
                zmKier = zmKier + this.gra.kierunek[i] + " ";

            }
        }
        div3.innerHTML = zmKier;
        document.getElementById("pole").appendChild(div3);
        let div4 = document.createElement("div");
        div4.id = "eq";
        if (this.gra.lokacja[a][b].eq.length == 0)
        {
            div4.innerHTML = "You see nothing";
        }
        else
        {
            let idp = this.gra.lokacja[a][b].eq[0];

            for (let i = 0; i < this.gra.przedmioty.length; i++)
            {
                if (this.gra.przedmioty[i].id == idp)
                {
                    div4.innerHTML = "You see " + this.gra.przedmioty[i].opis;
                }
            }
        }
        document.getElementById("pole").appendChild(div4);
        let div5 = document.createElement("div");
        div5.id = "carry";
        let przed = "You are carrying ";
        if (this.gra.ekwipunek.length == 0)
        {
            przed = przed + "nothing";
        }
        else
        {
            for (let i = 0; i < this.gra.przedmioty.length; i++)
            {
                if (this.gra.przedmioty[i].id == this.gra.ekwipunek[0])
                {
                    przed = przed + this.gra.przedmioty[i].opis;
                }
            }
        }
        div5.innerHTML = przed;
        document.getElementById("pole").appendChild(div5);
        let div6 = document.createElement("div");
        div6.id = "what";
        div6.innerHTML = "What now?";
        document.getElementById("pole").appendChild(div6);
        let input = document.createElement("input");
        input.id = "inp";
        input.setAttribute("type", "text");
        input.onkeydown = this.OnKeyDownHandle.bind(this);
        input.onblur = function () { document.getElementById("inp").focus(); };
        document.getElementById("pole").appendChild(input);
        document.getElementById("inp").focus();
        let div7 = document.createElement("div");
        div7.id = "komunikat";
        document.getElementById("pole").appendChild(div7);

        let blank1 = document.createElement("div");
        blank1.className = "blank";
        blank1.id = "blank1";
        document.getElementById("pole").appendChild(blank1);
        let blank2 = document.createElement("div");
        blank2.className = "blank";
        blank2.id = "blank2";
        document.getElementById("pole").appendChild(blank2);
        let blank3 = document.createElement("div");
        blank3.className = "blank";
        blank3.id = "blank3";
        document.getElementById("pole").appendChild(blank3);
        let blank4 = document.createElement("div");
        blank4.className = "blank";
        blank4.id = "blank4";
        document.getElementById("pole").appendChild(blank4);


        let goss = document.createElement("div");
        goss.id = "goss";
        goss.innerHTML = '"The  woodcutter lost  his home key..."</br></br>"The butcher likes fruit... The cooper"</br></br>"is greedy... Dratewka plans to make a"</br></br>"poisoned  bait for the dragon...  The"</br></br>"tavern owner is buying food  from the"</br></br>"pickers... Making a rag from a bag..."</br></br>"Press any key"';
        document.getElementById("pole").appendChild(goss);
        let voca = document.createElement("div");
        voca.id = "voca";
        voca.innerHTML = '"NORTH or N, SOUTH or S"<br/><br/>"WEST or W, EAST or E"<br/><br/>"TAKE (object) or T (object)"<br/><br/>"DROP (object) or D (object)"<br/><br/>"USE (object) or U (object)"<br/><br/>"GOSSIPS or G, VOCABULARY or V"<br/><br/>	"Press any key"';
        document.getElementById("pole").appendChild(voca);
        let czol = document.createElement("img");
        czol.id = "czol";
        document.getElementById("pole").appendChild(czol);
        this.gra.laduj_lokacje();
        this.gra.start();
    }

    OnKeyDownHandle(e: any)
    {

        this.gra.comm(e);
    }

    comm(e: any)
    {
      
    }
}
