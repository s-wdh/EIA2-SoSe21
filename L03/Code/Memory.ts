namespace L03_Memory {
    let allCards: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
    let gameCards: number[] = [];
    let startTime: any;
    let gameSpace: HTMLDivElement = <HTMLDivElement>document.getElementById("gamespace");

    let info: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("info");
    let form: HTMLDivElement = <HTMLDivElement>document.getElementById("form");
    /* let pairsInput: HTMLInputElement = <HTMLInputElement>document.getElementById("pairs");
    let cardsizeInput: HTMLInputElement = <HTMLInputElement>document.getElementById("cardsize");
    let backgroundInput: HTMLInputElement = <HTMLInputElement>document.getElementById("background-color");
    let cardbackInput: HTMLInputElement = <HTMLInputElement>document.getElementById("cardback-color");
    let fontcolorInput: HTMLInputElement = <HTMLInputElement>document.getElementById("font-color");
    let fontInput: HTMLInputElement = <HTMLInputElement>document.getElementById("font"); */
    let data: FormData = new FormData(document.forms[0]);
    let cardexample: HTMLDivElement = <HTMLDivElement>document.getElementById("card");
    let cardtext: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("cardamount");
    let size: number;
    let backgroundColor: string;
    let cardbackColor: string;
    let fontColor: string;
    let font: string;
    let counter: number = 0;

    window.addEventListener("load", handleLoad);

    function handleLoad(): void {
        /* pairsInput?.addEventListener("input", getFormData);
        cardsizeInput?.addEventListener("input", getFormData);
        backgroundInput?.addEventListener("input", getFormData);
        cardbackInput?.addEventListener("input", getFormData);
        fontcolorInput?.addEventListener("input", getFormData);
        fontInput?.addEventListener("input", getFormData); */
        form?.addEventListener("input", getFormData);
        let start: HTMLButtonElement = <HTMLButtonElement>document.getElementById("start");
        start?.addEventListener("click", prepareGame);
    }

    function getFormData(_event: Event): void {
        for (let entry of data) {
            let setting: string = "[value='" + entry[1] + "']";
            let item: HTMLInputElement = <HTMLInputElement>document.querySelector(setting);
            console.log(item);

            switch (entry[0]) {
                case "pairs":
                    let pairsamount: number = Number(data.get("#pairs"));
                    cardtext.innerHTML = "" + pairsamount;
                    break;
                case "cardsize":
                    size = Number(data.get("#cardsize"));
                    break;
                case "background-color":
                    backgroundColor = String(data.get("#background-color"));
                    cardexample.style.backgroundColor = backgroundColor;
                    break;
                case "cardback-color":
                    cardbackColor = String(data.get("#cardback-color"));
                    break;
                case "font-color":
                    fontColor = String(data.get("#font-color"));
                    cardtext.style.color = fontColor;
                    break;
                case "font":
                    font = String(item.getAttribute("value"));
                    if (font == "arial") {
                        cardtext.classList.add("arial");
                    } else if (font == "times") {
                        cardtext.classList.add("times");
                    } else if (font == "fantasy") {
                        cardtext.classList.add("fantasy");
                    }
                    break;
            }
        }
    }

    function prepareGame(): void {
        info.innerHTML = "click on the cards and try to find pairs...";
        form.innerHTML = "";
        let pairsamount: number = Number(data.get("#pairs"));
        for (let i: number = 0; i < pairsamount; i++) {
            let card: any = allCards.splice(0);
            gameCards.push(card);
        }
        gameCards = gameCards.concat(gameCards);
        for (let k: number = 0; k < gameCards.length; k++) {
            let position: number = Math.floor(Math.random() * gameCards.length);
            let card: HTMLDivElement = document.createElement("div");
            let cardnumber: number = gameCards[position];
            let cardnumberstring: string = "" + cardnumber.toString;
            card.classList.add(cardnumberstring);
            gameCards.splice(position);
            gameSpace.appendChild(card);
            card.addEventListener("click", showCard);
        }
    }

    function showCard(_event: MouseEvent): void {
        let card1: string = "";
        let card2: string = "";
        if (counter < 2) {
            if (counter == 0) {
                let target1: HTMLDivElement = <HTMLDivElement>_event.target;
                target1.textContent = target1.className;
                card1 = target1.className;
            } else {
                let target2: HTMLDivElement = <HTMLDivElement>_event.target;
                target2.textContent = target2.className;
                card2 = target2.className;
            }
            counter++;
        }
        gameEnd();
    }

    function gameEnd(): void {
        if (gameSpace.children.length < 1) {
            let endTime: any;
            let gameTime: any = endTime - startTime;
            let playedPairs: number = 25 - allCards.length;
            window.prompt("You finished the game with " + playedPairs + " pairs in " + gameTime);
        }
    }
} //namespace