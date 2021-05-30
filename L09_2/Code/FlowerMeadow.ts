namespace L09_2_FlowerMeadow {
    /*
    Aufgabe: L09.2: Blumenwiese
    Name: Sarah Weidenhiller
    Matrikel: 263128
    Datum: 29.05.2021
    Quellen: -
    */

    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
    export let width: number = window.innerWidth;
    export let heigth: number = window.innerHeight;

    let mountains: Mountain[] = [];
    let trees: Tree[] = [];
    let clouds: Cloud[] = [];
    let flowers: Flower[] = [];
    let tulips: Tulip[] = [];
    let bees: Bee[] = [];

    let imgData: ImageData;

    function handleLoad(): void {
        console.log("start");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        drawBackground(canvas);
        positions();
        window.setInterval(animation, 30);
    }

    function drawBackground(_canvas: HTMLCanvasElement): void {
        console.log("background");

        crc2.fillStyle = "#81b5df";
        crc2.fillRect(0, 0, width, heigth);

        crc2.fillStyle = "#6cf82a";
        crc2.fillRect(0, (heigth / 4), width, (heigth / 0.75));
        //sun
        crc2.restore();
        crc2.save();
        crc2.translate(690, 30);
        crc2.beginPath();
        crc2.arc(0, 0, 15, 0, 2 * Math.PI);
        crc2.fillStyle = "#f8de00";
        crc2.fill();
        crc2.closePath();
        for (let i: number = 0; i < 8; i++) {
            crc2.beginPath();
            crc2.rotate(0.9);
            crc2.moveTo(0, 15);
            crc2.lineTo(0, 25);
            crc2.strokeStyle = "#f8de00";
            crc2.lineWidth = 3;
            crc2.stroke();
            crc2.closePath();
        }
        crc2.restore();

        imgData = crc2.getImageData(0, 0, width, heigth);
    }

    function positions(): void {
        // mountains
        for (let i: number = 0; i < 50; i++) {
            let x: number;
            let y: number;
            x = (Math.random() * width);
            y = (heigth / 4);
            let position: Vector = new Vector(x, y);
            let mountain: Mountain = new Mountain(position);
            mountain.draw(position, i);
            mountains.push(mountain);
        }

        // trees
        for (let i: number = 0; i < 100; i++) {
            let x: number;
            let y: number;
            x = (Math.random() * width);
            y = (heigth / 5) + (Math.random() * 40);
            let position: Vector = new Vector(x, y);
            let tree: Tree = new Tree(position);
            tree.draw(position);
            trees.push(tree);
        }

        // flowers
        for (let i: number = 0; i < 400; i++) {
            let x: number;
            let y: number;
            x = (Math.random() * width);
            y = (heigth / 3) + ((heigth / 1.5) * Math.random());
            let position: Vector = new Vector(x, y);
            let flower: Flower = new Flower(position);
            flower.draw(position, i);
            flowers.push(flower);
        } 

        // tulips
        for (let i: number = 0; i < 100; i++) {
            let x: number;
            let y: number;
            x = (Math.random() * width);
            y = (heigth / 3) + ((heigth / 1.5) * Math.random());
            let position: Vector = new Vector(x, y);
            let tulip: Tulip = new Tulip(position);
            tulip.draw(position);
            tulips.push(tulip);
        }

        imgData = crc2.getImageData(0, 0, width, heigth);

        // clouds
        for (let i: number = 0; i < 10; i++) {
            let x: number;
            let y: number;
            x = (Math.random() * width);
            y = 0 + (Math.random() * 50);
            let position: Vector = new Vector(x, y);
            let cloud: Cloud = new Cloud(position);
            cloud.draw(position);
            clouds.push(cloud);
        }

        // bees
        for (let i: number = 0; i < 20; i++) {
            let x: number;
            let y: number;
            x = (Math.random() * width);
            y = (Math.random() * heigth);
            let position: Vector = new Vector(x, y);
            let bee: Bee = new Bee(position);
            bee.draw(position);
            bees.push(bee);
        }
    }

    function animation(): void {
        crc2.putImageData(imgData, 0, 0);

        for (let cloud of clouds) {
            cloud.move(1 / 10);
            cloud.draw(cloud.position);
        }
        for (let bee of bees) {
            bee.move(1 / 8);
            bee.draw(bee.position);
        }
    }
} //namespace