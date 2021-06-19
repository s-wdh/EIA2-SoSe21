"use strict";
var L11_1_FlowerMeadow;
(function (L11_1_FlowerMeadow) {
    /*
    Aufgabe: L11.1: Blumenwiese Advanced
    Name: Sarah Weidenhiller
    Matrikel: 263128
    Datum: 19.06.2021
    */
    window.addEventListener("load", handleLoad);
    L11_1_FlowerMeadow.canvas = document.querySelector("canvas");
    L11_1_FlowerMeadow.width = window.innerWidth;
    L11_1_FlowerMeadow.heigth = window.innerHeight;
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
        if (!L11_1_FlowerMeadow.canvas)
            return;
        L11_1_FlowerMeadow.crc2 = L11_1_FlowerMeadow.canvas.getContext("2d");
        drawBackground(L11_1_FlowerMeadow.canvas);
        positions();
        window.setInterval(animation, 30);
    }
    function drawBackground(_canvas) {
        console.log("background");
        L11_1_FlowerMeadow.crc2.beginPath();
        L11_1_FlowerMeadow.crc2.fillStyle = "#81b5df";
        L11_1_FlowerMeadow.crc2.fillRect(0, 0, L11_1_FlowerMeadow.width, L11_1_FlowerMeadow.heigth);
        L11_1_FlowerMeadow.crc2.fillStyle = "#6cf82a";
        L11_1_FlowerMeadow.crc2.fillRect(0, (L11_1_FlowerMeadow.heigth / 4), L11_1_FlowerMeadow.width, (L11_1_FlowerMeadow.heigth / 0.75));
        L11_1_FlowerMeadow.crc2.closePath();
        //sun
        L11_1_FlowerMeadow.crc2.restore();
        L11_1_FlowerMeadow.crc2.save();
        L11_1_FlowerMeadow.crc2.translate(690, 30);
        L11_1_FlowerMeadow.crc2.beginPath();
        L11_1_FlowerMeadow.crc2.arc(0, 0, 15, 0, 2 * Math.PI);
        L11_1_FlowerMeadow.crc2.fillStyle = "#f8de00";
        L11_1_FlowerMeadow.crc2.fill();
        L11_1_FlowerMeadow.crc2.closePath();
        for (let i = 0; i < 8; i++) {
            L11_1_FlowerMeadow.crc2.beginPath();
            L11_1_FlowerMeadow.crc2.rotate(0.9);
            L11_1_FlowerMeadow.crc2.moveTo(0, 15);
            L11_1_FlowerMeadow.crc2.lineTo(0, 25);
            L11_1_FlowerMeadow.crc2.strokeStyle = "#f8de00";
            L11_1_FlowerMeadow.crc2.lineWidth = 3;
            L11_1_FlowerMeadow.crc2.stroke();
            L11_1_FlowerMeadow.crc2.closePath();
        }
        L11_1_FlowerMeadow.crc2.restore();
        imgData = L11_1_FlowerMeadow.crc2.getImageData(0, 0, L11_1_FlowerMeadow.width, L11_1_FlowerMeadow.heigth);
    }
    function positions() {
        // mountains
        for (let i = 0; i < 30; i++) {
            let x;
            let y;
            x = (Math.random() * L11_1_FlowerMeadow.width);
            y = (L11_1_FlowerMeadow.heigth / 4);
            let position = new L11_1_FlowerMeadow.Vector(x, y);
            let mountain = new L11_1_FlowerMeadow.Mountain(position);
            mountain.draw();
            statics.push(mountain);
        }
        // trees
        for (let i = 0; i < 70; i++) {
            let x;
            let y;
            x = (Math.random() * L11_1_FlowerMeadow.width);
            y = (L11_1_FlowerMeadow.heigth / 5) + (Math.random() * 40);
            let position = new L11_1_FlowerMeadow.Vector(x, y);
            let tree = new L11_1_FlowerMeadow.Tree(position);
            tree.draw();
            statics.push(tree);
        }
        imgData = L11_1_FlowerMeadow.crc2.getImageData(0, 0, L11_1_FlowerMeadow.width, L11_1_FlowerMeadow.heigth);
        // flowers
        for (let i = 0; i < 150; i++) {
            let x;
            let y;
            x = (Math.random() * L11_1_FlowerMeadow.width);
            y = (L11_1_FlowerMeadow.heigth / 3) + ((L11_1_FlowerMeadow.heigth / 1.5) * Math.random());
            let position = new L11_1_FlowerMeadow.Vector(x, y);
            let flower = new L11_1_FlowerMeadow.Flower(position);
            flower.setColor();
            flower.draw();
            statics.push(flower);
        }
        // tulips
        for (let i = 0; i < 50; i++) {
            let x;
            let y;
            x = (Math.random() * L11_1_FlowerMeadow.width);
            y = (L11_1_FlowerMeadow.heigth / 3) + ((L11_1_FlowerMeadow.heigth / 1.5) * Math.random());
            let position = new L11_1_FlowerMeadow.Vector(x, y);
            let tulip = new L11_1_FlowerMeadow.Tulip(position);
            tulip.draw();
            statics.push(tulip);
        }
        // clouds
        for (let i = 0; i < 10; i++) {
            let x;
            let y;
            x = (Math.random() * L11_1_FlowerMeadow.width);
            y = 0 + (Math.random() * 50);
            let position = new L11_1_FlowerMeadow.Vector(x, y);
            let cloud = new L11_1_FlowerMeadow.Cloud(position);
            cloud.draw();
            moveables.push(cloud);
        }
        // bees
        for (let i = 0; i < 20; i++) {
            let x;
            let y;
            x = (Math.random() * L11_1_FlowerMeadow.width);
            y = (Math.random() * L11_1_FlowerMeadow.heigth);
            let position = new L11_1_FlowerMeadow.Vector(x, y);
            let bee = new L11_1_FlowerMeadow.Bee(position);
            bee.draw();
            moveables.push(bee);
        }
    }
    function animation() {
        L11_1_FlowerMeadow.crc2.putImageData(imgData, 0, 0);
        for (let element of statics) {
            if (element instanceof L11_1_FlowerMeadow.Flower) {
                element.adjustNectar(1 / 2000);
            }
            else if (element instanceof L11_1_FlowerMeadow.Tulip) {
                element.adjustNectar(7 / 6000);
            }
            element.draw();
        }
        for (let element of moveables) {
            if (element instanceof L11_1_FlowerMeadow.Cloud) {
                element.move(1 / 10);
            }
            else if (element instanceof L11_1_FlowerMeadow.Bee) {
                element.move(1 / 8);
            }
            element.draw();
        }
    }
})(L11_1_FlowerMeadow || (L11_1_FlowerMeadow = {})); //namespace
//# sourceMappingURL=FlowerMeadow.js.map