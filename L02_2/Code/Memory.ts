namespace L02_2_Memory {
    let allCards: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
    let gameCards: number[] = [];
    //let startTime: Date;
    //let gameSpace: HTMLDivElement = <HTMLDivElement>document.getElementById("gamespace");

    window.addEventListener("load", handleLoad);

    function handleLoad(): void {
        let start: HTMLButtonElement = <HTMLButtonElement>document.getElementById("start");
        start?.addEventListener("click", prepareGame);
    }

    function prepareGame(): void {
        let pairs: number;
        let pairsInput: HTMLInputElement = <HTMLInputElement>document.getElementById("pairs");
        pairs = pairsInput.getAttribute.length;
        for (let i = 0; i < pairs; i++) {
            let card: any = allCards.splice(0);
            gameCards.push(card);
        }
        gameCards = gameCards.concat(gameCards);
    }
} //namespace