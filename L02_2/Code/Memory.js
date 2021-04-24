"use strict";
var L02_2_Memory;
(function (L02_2_Memory) {
    let allCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
    let gameCards = [];
    //let startTime: Date;
    //let gameSpace: HTMLDivElement = <HTMLDivElement>document.getElementById("gamespace");
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        let start = document.getElementById("start");
        start?.addEventListener("click", prepareGame);
    }
    function prepareGame() {
        let pairs;
        let pairsInput = document.getElementById("pairs");
        pairs = pairsInput.getAttribute.length;
        for (let i = 0; i < pairs; i++) {
            let card = allCards.splice(0);
            gameCards.push(card);
        }
        gameCards = gameCards.concat(gameCards);
    }
})(L02_2_Memory || (L02_2_Memory = {})); //namespace
//# sourceMappingURL=Memory.js.map