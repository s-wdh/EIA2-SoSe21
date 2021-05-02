"use strict";
var L03_Memory;
(function (L03_Memory) {
    let allCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
    let gameCards = [];
    let startTime;
    let gameSpace = document.getElementById("gamespace");
    let info = document.getElementById("info");
    let form = document.getElementById("form");
    let data = new FormData(document.forms[0]);
    let cardexample = document.getElementById("card");
    let cardtext = document.getElementById("cardamount");
    let size;
    let backgroundColor;
    let cardbackColor;
    let fontColor;
    let font;
    let counter = 0;
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        form.addEventListener("input", getFormData);
        let start = document.getElementById("start");
        start?.addEventListener("click", prepareGame);
    }
    function getFormData(_event) {
        for (let entry of data) {
            let setting = "[value='" + entry[1] + "']";
            let item = document.querySelector(setting);
            console.log(item);
            switch (entry[0]) {
                case "pairs":
                    let pairsamount = Number(data.get("#pairs"));
                    cardtext.innerHTML = "" + pairsamount;
                    break;
                case "cardsize":
                    size = Number(data.get("#cardsize"));
                    break;
                case "background-color":
                    backgroundColor = String(data.get("#background-color"));
                    break;
                case "cardback-color":
                    cardbackColor = String(data.get("#cardback-color"));
                    break;
                case "font-color":
                    fontColor = String(data.get("#font-color"));
                    break;
                case "font":
                    font = String(item.getAttribute("value"));
                    if (font == "arial") {
                        cardtext.classList.add("arial");
                    }
                    else if (font == "times") {
                        cardtext.classList.add("times");
                    }
                    else if (font == "fantasy") {
                        cardtext.classList.add("fantasy");
                    }
                    break;
            }
        }
    }
    function prepareGame() {
        info.innerHTML = "click on the cards and try to find pairs...";
        form.innerHTML = "";
        let pairsamount = Number(data.get("#pairs"));
        for (let i = 0; i < pairsamount; i++) {
            let card = allCards.splice(0);
            gameCards.push(card);
        }
        gameCards = gameCards.concat(gameCards);
        for (let k = 0; k < gameCards.length; k++) {
            let position = Math.floor(Math.random() * gameCards.length);
            let card = document.createElement("div");
            card.classList.add(gameCards(position).valueOf);
            gameCards.splice(position);
            gameSpace.appendChild(card);
            card.addEventListener("click", showCard);
        }
    }
    function showCard(_event) {
        let card1 = "";
        let card2 = "";
        if (counter < 2) {
            if (counter == 0) {
                let target1 = _event.target;
                target1.textContent = target1.className;
                card1 = target1.className;
            }
            else {
                let target2 = _event.target;
                target2.textContent = target2.className;
                card2 = target2.className;
            }
            counter++;
        }
        gameEnd();
    }
    function gameEnd() {
        if (gameSpace.children.length < 1) {
            let endTime;
            let gameTime = endTime - startTime;
            let playedPairs = 25 - allCards.length;
            window.prompt("You finished the game with " + playedPairs + " pairs in " + gameTime);
        }
    }
})(L03_Memory || (L03_Memory = {})); //namespace
//# sourceMappingURL=Memory.js.map