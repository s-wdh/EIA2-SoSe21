"use strict";
var L11_2_FlowerMeadow;
(function (L11_2_FlowerMeadow) {
    /*
    Aufgabe: L11.2: Blumenwiese Intelligent
    Name: Sarah Weidenhiller
    Matrikel: 263128
    Datum: 26.06.2021
    */
    window.addEventListener("load", handleLoad);
    L11_2_FlowerMeadow.canvas = document.querySelector("canvas");
    L11_2_FlowerMeadow.width = window.innerWidth;
    L11_2_FlowerMeadow.heigth = window.innerHeight;
    let honeycomb;
    let statics = [];
    let moveables = [];
    /* let mountains: Mountain[] = [];
    let trees: Tree[] = [];
    let clouds: Cloud[] = [];
    let flowers: Flower[] = [];
    let tulips: Tulip[] = [];
    let bees: Bee[] = []; */
    let imgData;
    function handleLoad() {
        console.log("start");
        if (!L11_2_FlowerMeadow.canvas)
            return;
        L11_2_FlowerMeadow.crc2 = L11_2_FlowerMeadow.canvas.getContext("2d");
        drawBackground(L11_2_FlowerMeadow.canvas);
        positions();
        window.setInterval(animation, 30);
        L11_2_FlowerMeadow.canvas.addEventListener("click", addBee);
    }
    function drawBackground(_canvas) {
        console.log("background");
        L11_2_FlowerMeadow.crc2.beginPath();
        L11_2_FlowerMeadow.crc2.fillStyle = "#81b5df";
        L11_2_FlowerMeadow.crc2.fillRect(0, 0, L11_2_FlowerMeadow.width, L11_2_FlowerMeadow.heigth);
        L11_2_FlowerMeadow.crc2.fillStyle = "#6cf82a";
        L11_2_FlowerMeadow.crc2.fillRect(0, (L11_2_FlowerMeadow.heigth / 4), L11_2_FlowerMeadow.width, (L11_2_FlowerMeadow.heigth / 0.75));
        L11_2_FlowerMeadow.crc2.closePath();
        L11_2_FlowerMeadow.crc2.restore();
        //sun
        L11_2_FlowerMeadow.crc2.save();
        L11_2_FlowerMeadow.crc2.translate(690, 30);
        L11_2_FlowerMeadow.crc2.beginPath();
        L11_2_FlowerMeadow.crc2.arc(0, 0, 15, 0, 2 * Math.PI);
        L11_2_FlowerMeadow.crc2.fillStyle = "#f8de00";
        L11_2_FlowerMeadow.crc2.fill();
        L11_2_FlowerMeadow.crc2.closePath();
        for (let i = 0; i < 8; i++) {
            L11_2_FlowerMeadow.crc2.beginPath();
            L11_2_FlowerMeadow.crc2.rotate(0.9);
            L11_2_FlowerMeadow.crc2.moveTo(0, 15);
            L11_2_FlowerMeadow.crc2.lineTo(0, 25);
            L11_2_FlowerMeadow.crc2.strokeStyle = "#f8de00";
            L11_2_FlowerMeadow.crc2.lineWidth = 3;
            L11_2_FlowerMeadow.crc2.stroke();
            L11_2_FlowerMeadow.crc2.closePath();
        }
        L11_2_FlowerMeadow.crc2.restore();
        //honeyomb
        L11_2_FlowerMeadow.crc2.save();
        honeycomb = new L11_2_FlowerMeadow.Vector(90, L11_2_FlowerMeadow.heigth - 100);
        L11_2_FlowerMeadow.crc2.translate(honeycomb.x, honeycomb.y);
        L11_2_FlowerMeadow.crc2.beginPath();
        L11_2_FlowerMeadow.crc2.ellipse(0, 0, 60, 30, 0, 0, 2 * Math.PI);
        L11_2_FlowerMeadow.crc2.ellipse(0, -40, 40, 20, 0, 0, 2 * Math.PI);
        L11_2_FlowerMeadow.crc2.arc(0, -70, 15, 0, 2 * Math.PI);
        L11_2_FlowerMeadow.crc2.fillStyle = "#c89f04";
        L11_2_FlowerMeadow.crc2.fill();
        L11_2_FlowerMeadow.crc2.closePath();
        L11_2_FlowerMeadow.crc2.restore();
        imgData = L11_2_FlowerMeadow.crc2.getImageData(0, 0, L11_2_FlowerMeadow.width, L11_2_FlowerMeadow.heigth);
    }
    function positions() {
        // mountains
        for (let i = 0; i < 30; i++) {
            let x;
            let y;
            x = (Math.random() * L11_2_FlowerMeadow.width);
            y = (L11_2_FlowerMeadow.heigth / 4);
            let position = new L11_2_FlowerMeadow.Vector(x, y);
            let mountain = new L11_2_FlowerMeadow.Mountain(position);
            mountain.draw();
            statics.push(mountain);
        }
        // trees
        for (let i = 0; i < 70; i++) {
            let x;
            let y;
            x = (Math.random() * L11_2_FlowerMeadow.width);
            y = (L11_2_FlowerMeadow.heigth / 5) + (Math.random() * 40);
            let position = new L11_2_FlowerMeadow.Vector(x, y);
            let tree = new L11_2_FlowerMeadow.Tree(position);
            tree.draw();
            statics.push(tree);
        }
        imgData = L11_2_FlowerMeadow.crc2.getImageData(0, 0, L11_2_FlowerMeadow.width, L11_2_FlowerMeadow.heigth);
        // flowers
        for (let i = 0; i < 150; i++) {
            let x;
            let y;
            x = (Math.random() * L11_2_FlowerMeadow.width);
            y = (L11_2_FlowerMeadow.heigth / 3) + ((L11_2_FlowerMeadow.heigth / 1.5) * Math.random());
            let position = new L11_2_FlowerMeadow.Vector(x, y);
            let flower = new L11_2_FlowerMeadow.Flower(position);
            flower.setColor();
            flower.draw();
            statics.push(flower);
        }
        // tulips
        for (let i = 0; i < 50; i++) {
            let x;
            let y;
            x = (Math.random() * L11_2_FlowerMeadow.width);
            y = (L11_2_FlowerMeadow.heigth / 3) + ((L11_2_FlowerMeadow.heigth / 1.5) * Math.random());
            let position = new L11_2_FlowerMeadow.Vector(x, y);
            let tulip = new L11_2_FlowerMeadow.Tulip(position);
            tulip.draw();
            statics.push(tulip);
        }
        // clouds
        for (let i = 0; i < 10; i++) {
            let x;
            let y;
            x = (Math.random() * L11_2_FlowerMeadow.width);
            y = 0 + (Math.random() * 50);
            let position = new L11_2_FlowerMeadow.Vector(x, y);
            let cloud = new L11_2_FlowerMeadow.Cloud(position);
            cloud.draw();
            moveables.push(cloud);
        }
        // bees
        for (let i = 0; i < 20; i++) {
            let x;
            let y;
            x = (Math.random() * L11_2_FlowerMeadow.width);
            y = (Math.random() * L11_2_FlowerMeadow.heigth);
            let position = new L11_2_FlowerMeadow.Vector(x, y);
            let bee = new L11_2_FlowerMeadow.Bee(position);
            bee.draw();
            moveables.push(bee);
        }
    }
    function addBee(_event) {
        let position = new L11_2_FlowerMeadow.Vector(_event.clientX, _event.clientY);
        let bee = new L11_2_FlowerMeadow.Bee(position);
        bee.draw();
        moveables.push(bee);
    }
    function animation() {
        L11_2_FlowerMeadow.crc2.putImageData(imgData, 0, 0);
        for (let element of statics) {
            if (element instanceof L11_2_FlowerMeadow.Flower) {
                if (element.nectarStatus == L11_2_FlowerMeadow.NECTARSTATUS.PRODUCING) {
                    element.adjustNectar(1 / 2000);
                }
            }
            else if (element instanceof L11_2_FlowerMeadow.Tulip) {
                if (element.nectarStatus == L11_2_FlowerMeadow.NECTARSTATUS.PRODUCING) {
                    element.adjustNectar(7 / 6000);
                }
            }
            element.draw();
        }
        for (let element of moveables) {
            if (element instanceof L11_2_FlowerMeadow.Cloud) {
                element.move(1 / 10);
            }
            else if (element instanceof L11_2_FlowerMeadow.Bee) {
                switch (element.activity) {
                    case L11_2_FlowerMeadow.ACTIVITY.SEARCHING: {
                        for (let flower of statics) {
                            if (flower instanceof L11_2_FlowerMeadow.Tulip || flower instanceof L11_2_FlowerMeadow.Flower) {
                                if (flower.nectarStatus == L11_2_FlowerMeadow.NECTARSTATUS.FULL) {
                                    element.fly(flower.position);
                                    flower.nectarStatus = L11_2_FlowerMeadow.NECTARSTATUS.GET_EMPTIED;
                                }
                            }
                            else {
                                element.move(1 / 800);
                            }
                        }
                        break;
                    }
                    case L11_2_FlowerMeadow.ACTIVITY.FLYING_HOME: {
                        element.fly(honeycomb);
                        break;
                    }
                    case L11_2_FlowerMeadow.ACTIVITY.EATING: {
                        element.move(0);
                        break;
                    }
                    case L11_2_FlowerMeadow.ACTIVITY.PUKING: {
                        element.move(0);
                        break;
                    }
                }
            }
            element.draw();
            changeActivity();
        }
    }
    function changeActivity() {
        for (let element of moveables) {
            if (element instanceof L11_2_FlowerMeadow.Bee) {
                switch (element.activity) {
                    case L11_2_FlowerMeadow.ACTIVITY.SEARCHING: {
                        for (let flower of statics) {
                            if (flower instanceof L11_2_FlowerMeadow.Tulip || flower instanceof L11_2_FlowerMeadow.Flower) {
                                if (element.position == flower.position) {
                                    element.activity = L11_2_FlowerMeadow.ACTIVITY.EATING;
                                }
                            }
                        }
                        break;
                    }
                    case L11_2_FlowerMeadow.ACTIVITY.FLYING_HOME: {
                        if (element.position == honeycomb) {
                            element.activity = L11_2_FlowerMeadow.ACTIVITY.PUKING;
                        }
                        break;
                    }
                    case L11_2_FlowerMeadow.ACTIVITY.EATING: {
                        for (let flower of statics) {
                            if (flower instanceof L11_2_FlowerMeadow.Tulip || flower instanceof L11_2_FlowerMeadow.Flower) {
                                if (element.position == flower.position) {
                                    window.setTimeout(function eating(element, flower) {
                                        element.activity = L11_2_FlowerMeadow.ACTIVITY.FLYING_HOME;
                                        flower.nectarStatus = L11_2_FlowerMeadow.NECTARSTATUS.EMPTY;
                                        flower.nectarAmount = 0;
                                        window.setTimeout(function status(flower) {
                                            flower.nectarStatus = L11_2_FlowerMeadow.NECTARSTATUS.PRODUCING;
                                        }, 2000);
                                    }, 5000);
                                }
                            }
                        }
                        break;
                    }
                    case L11_2_FlowerMeadow.ACTIVITY.PUKING: {
                        window.setTimeout(function status(element) {
                            element.activity = L11_2_FlowerMeadow.ACTIVITY.SEARCHING;
                        }, 3000);
                        break;
                    }
                }
            }
        }
    }
})(L11_2_FlowerMeadow || (L11_2_FlowerMeadow = {})); //namespace
//# sourceMappingURL=FlowerMeadow.js.map