namespace L11_2_FlowerMeadow {
    /*
    Aufgabe: L11.2: Blumenwiese Intelligent
    Name: Sarah Weidenhiller
    Matrikel: 263128
    Datum: 26.06.2021
    */

    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
    export let width: number = window.innerWidth;
    export let heigth: number = window.innerHeight;
    let honeycomb: Vector;

    let statics: Static[] = [];
    let moveables: Moveable[] = [];
    /* let mountains: Mountain[] = [];
    let trees: Tree[] = [];
    let clouds: Cloud[] = [];
    let flowers: Flower[] = [];
    let tulips: Tulip[] = [];
    let bees: Bee[] = []; */

    let imgData: ImageData;

    function handleLoad(): void {
        console.log("start");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        drawBackground(canvas);
        positions();
        window.setInterval(animation, 30);
        canvas.addEventListener("click", addBee);
    }

    function drawBackground(_canvas: HTMLCanvasElement): void {
        console.log("background");

        crc2.beginPath();
        crc2.fillStyle = "#81b5df";
        crc2.fillRect(0, 0, width, heigth);

        crc2.fillStyle = "#6cf82a";
        crc2.fillRect(0, (heigth / 4), width, (heigth / 0.75));
        crc2.closePath();
        crc2.restore();
        //sun
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
        //honeyomb
        crc2.save();
        honeycomb = new Vector(90, heigth - 100);
        crc2.translate(honeycomb.x, honeycomb.y);
        crc2.beginPath();
        crc2.ellipse(0, 0, 60, 30, 0, 0, 2 * Math.PI);
        crc2.ellipse(0, -40, 40, 20, 0, 0, 2 * Math.PI);
        crc2.arc(0, -70, 15, 0, 2 * Math.PI);
        crc2.fillStyle = "#c89f04";
        crc2.fill();
        crc2.closePath();
        crc2.restore();

        imgData = crc2.getImageData(0, 0, width, heigth);
    }

    function positions(): void {
        // mountains
        for (let i: number = 0; i < 30; i++) {
            let x: number;
            let y: number;
            x = (Math.random() * width);
            y = (heigth / 4);
            let position: Vector = new Vector(x, y);
            let mountain: Mountain = new Mountain(position);
            mountain.draw();
            statics.push(mountain);
        }

        // trees
        for (let i: number = 0; i < 70; i++) {
            let x: number;
            let y: number;
            x = (Math.random() * width);
            y = (heigth / 5) + (Math.random() * 40);
            let position: Vector = new Vector(x, y);
            let tree: Tree = new Tree(position);
            tree.draw();
            statics.push(tree);
        }

        imgData = crc2.getImageData(0, 0, width, heigth);

        // flowers
        for (let i: number = 0; i < 150; i++) {
            let x: number;
            let y: number;
            x = (Math.random() * width);
            y = (heigth / 3) + ((heigth / 1.5) * Math.random());
            let position: Vector = new Vector(x, y);
            let flower: Flower = new Flower(position);
            flower.setColor();
            flower.draw();
            statics.push(flower);
        }

        // tulips
        for (let i: number = 0; i < 50; i++) {
            let x: number;
            let y: number;
            x = (Math.random() * width);
            y = (heigth / 3) + ((heigth / 1.5) * Math.random());
            let position: Vector = new Vector(x, y);
            let tulip: Tulip = new Tulip(position);
            tulip.draw();
            statics.push(tulip);
        }

        // clouds
        for (let i: number = 0; i < 10; i++) {
            let x: number;
            let y: number;
            x = (Math.random() * width);
            y = 0 + (Math.random() * 50);
            let position: Vector = new Vector(x, y);
            let cloud: Cloud = new Cloud(position);
            cloud.draw();
            moveables.push(cloud);
        }

        // bees
        for (let i: number = 0; i < 20; i++) {
            let x: number;
            let y: number;
            x = (Math.random() * width);
            y = (Math.random() * heigth);
            let position: Vector = new Vector(x, y);
            let bee: Bee = new Bee(position);
            bee.draw();
            moveables.push(bee);
        }
    }

    function addBee(_event: MouseEvent): void {
        let position: Vector = new Vector(_event.clientX, _event.clientY);
        let bee: Bee = new Bee(position);
        bee.draw();
        moveables.push(bee);
    }

    function animation(): void {
        crc2.putImageData(imgData, 0, 0);

        for (let element of statics) {
            if (element instanceof Flower) {
                if (element.nectarStatus == NECTARSTATUS.PRODUCING) {
                    element.adjustNectar(1 / 2000);
                }
            } else if (element instanceof Tulip) {
                if (element.nectarStatus == NECTARSTATUS.PRODUCING) {
                    element.adjustNectar(7 / 6000);
                }
            }
            element.draw();
        }

        for (let element of moveables) {
            if (element instanceof Cloud) {
                element.move(1 / 10);
            } else if (element instanceof Bee) {
                switch (element.activity) {
                    case ACTIVITY.SEARCHING: {
                        for (let flower of statics) {
                            if (flower instanceof Tulip || flower instanceof Flower) {
                                if (flower.nectarStatus == NECTARSTATUS.FULL) {
                                    element.fly(flower.position);
                                    flower.nectarStatus = NECTARSTATUS.GET_EMPTIED;
                                }
                            } else {
                                element.move(1 / 800);
                            }
                        }
                        break;
                    }
                    case ACTIVITY.FLYING_HOME: {
                        element.fly(honeycomb);
                        break;
                    }
                    case ACTIVITY.EATING: {
                        element.move(0);
                        break;
                    }
                    case ACTIVITY.PUKING: {
                        element.move(0);
                        break;
                    }
                }
            }
            element.draw();
            changeActivity();
        }
    }

    function changeActivity(): void {
        for (let element of moveables) {
            if (element instanceof Bee) {
                switch (element.activity) {
                    case ACTIVITY.SEARCHING: {
                        for (let flower of statics) {
                            if (flower instanceof Tulip || flower instanceof Flower) {
                                if (element.position == flower.position) {
                                    element.activity = ACTIVITY.EATING;
                                }
                            }
                        }
                        break;
                    }
                    case ACTIVITY.FLYING_HOME: {
                        if (element.position == honeycomb) {
                            element.activity = ACTIVITY.PUKING;
                        }
                        break;
                    }
                    case ACTIVITY.EATING: {
                        for (let flower of statics) {
                            if (flower instanceof Tulip || flower instanceof Flower) {
                                if (element.position == flower.position) {
                                    window.setTimeout(function eating(element: Bee, flower: NectarProducer): void {
                                        element.activity = ACTIVITY.FLYING_HOME;
                                        flower.nectarStatus = NECTARSTATUS.EMPTY;
                                        flower.nectarAmount = 0;
                                        window.setTimeout(function status(flower: NectarProducer): void {
                                            flower.nectarStatus = NECTARSTATUS.PRODUCING;
                                        }, 2000);
                                    }, 5000);


                                }
                            }
                        }
                        break;
                    }
                    case ACTIVITY.PUKING: {
                        window.setTimeout(function status(element: Bee): void {
                            element.activity = ACTIVITY.SEARCHING;
                        }, 3000);
                        break;
                    }
                }
            }
        }
    }
} //namespace