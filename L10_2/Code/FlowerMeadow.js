"use strict";
var L10_2_FlowerMeadow;
(function (L10_2_FlowerMeadow) {
    /*
    Aufgabe: L010.2: Blumenwiese
    Name: Sarah Weidenhiller
    Matrikel: 263128
    Datum: 12.06.2021
    */
    window.addEventListener("load", handleLoad);
    L10_2_FlowerMeadow.canvas = document.querySelector("canvas");
    L10_2_FlowerMeadow.width = window.innerWidth;
    L10_2_FlowerMeadow.heigth = window.innerHeight;
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
        if (!L10_2_FlowerMeadow.canvas)
            return;
        L10_2_FlowerMeadow.crc2 = L10_2_FlowerMeadow.canvas.getContext("2d");
        drawBackground(L10_2_FlowerMeadow.canvas);
        positions();
        window.setInterval(animation, 30);
    }
    function drawBackground(_canvas) {
        console.log("background");
        L10_2_FlowerMeadow.crc2.fillStyle = "#81b5df";
        L10_2_FlowerMeadow.crc2.fillRect(0, 0, L10_2_FlowerMeadow.width, L10_2_FlowerMeadow.heigth);
        L10_2_FlowerMeadow.crc2.fillStyle = "#6cf82a";
        L10_2_FlowerMeadow.crc2.fillRect(0, (L10_2_FlowerMeadow.heigth / 4), L10_2_FlowerMeadow.width, (L10_2_FlowerMeadow.heigth / 0.75));
        //sun
        L10_2_FlowerMeadow.crc2.restore();
        L10_2_FlowerMeadow.crc2.save();
        L10_2_FlowerMeadow.crc2.translate(690, 30);
        L10_2_FlowerMeadow.crc2.beginPath();
        L10_2_FlowerMeadow.crc2.arc(0, 0, 15, 0, 2 * Math.PI);
        L10_2_FlowerMeadow.crc2.fillStyle = "#f8de00";
        L10_2_FlowerMeadow.crc2.fill();
        L10_2_FlowerMeadow.crc2.closePath();
        for (let i = 0; i < 8; i++) {
            L10_2_FlowerMeadow.crc2.beginPath();
            L10_2_FlowerMeadow.crc2.rotate(0.9);
            L10_2_FlowerMeadow.crc2.moveTo(0, 15);
            L10_2_FlowerMeadow.crc2.lineTo(0, 25);
            L10_2_FlowerMeadow.crc2.strokeStyle = "#f8de00";
            L10_2_FlowerMeadow.crc2.lineWidth = 3;
            L10_2_FlowerMeadow.crc2.stroke();
            L10_2_FlowerMeadow.crc2.closePath();
        }
        L10_2_FlowerMeadow.crc2.restore();
        imgData = L10_2_FlowerMeadow.crc2.getImageData(0, 0, L10_2_FlowerMeadow.width, L10_2_FlowerMeadow.heigth);
    }
    function positions() {
        // mountains
        for (let i = 0; i < 50; i++) {
            let x;
            let y;
            x = (Math.random() * L10_2_FlowerMeadow.width);
            y = (L10_2_FlowerMeadow.heigth / 4);
            let position = new L10_2_FlowerMeadow.Vector(x, y);
            let mountain = new L10_2_FlowerMeadow.Mountain(position);
            mountain.draw();
            statics.push(mountain);
        }
        // trees
        for (let i = 0; i < 100; i++) {
            let x;
            let y;
            x = (Math.random() * L10_2_FlowerMeadow.width);
            y = (L10_2_FlowerMeadow.heigth / 5) + (Math.random() * 40);
            let position = new L10_2_FlowerMeadow.Vector(x, y);
            let tree = new L10_2_FlowerMeadow.Tree(position);
            tree.draw();
            statics.push(tree);
        }
        // flowers
        for (let i = 0; i < 400; i++) {
            let x;
            let y;
            x = (Math.random() * L10_2_FlowerMeadow.width);
            y = (L10_2_FlowerMeadow.heigth / 3) + ((L10_2_FlowerMeadow.heigth / 1.5) * Math.random());
            let position = new L10_2_FlowerMeadow.Vector(x, y);
            let flower = new L10_2_FlowerMeadow.Flower(position);
            flower.draw();
            statics.push(flower);
        }
        // tulips
        for (let i = 0; i < 100; i++) {
            let x;
            let y;
            x = (Math.random() * L10_2_FlowerMeadow.width);
            y = (L10_2_FlowerMeadow.heigth / 3) + ((L10_2_FlowerMeadow.heigth / 1.5) * Math.random());
            let position = new L10_2_FlowerMeadow.Vector(x, y);
            let tulip = new L10_2_FlowerMeadow.Tulip(position);
            tulip.draw();
            statics.push(tulip);
        }
        imgData = L10_2_FlowerMeadow.crc2.getImageData(0, 0, L10_2_FlowerMeadow.width, L10_2_FlowerMeadow.heigth);
        // clouds
        for (let i = 0; i < 10; i++) {
            let x;
            let y;
            x = (Math.random() * L10_2_FlowerMeadow.width);
            y = 0 + (Math.random() * 50);
            let position = new L10_2_FlowerMeadow.Vector(x, y);
            let cloud = new L10_2_FlowerMeadow.Cloud(position);
            cloud.draw();
            moveables.push(cloud);
        }
        // bees
        for (let i = 0; i < 20; i++) {
            let x;
            let y;
            x = (Math.random() * L10_2_FlowerMeadow.width);
            y = (Math.random() * L10_2_FlowerMeadow.heigth);
            let position = new L10_2_FlowerMeadow.Vector(x, y);
            let bee = new L10_2_FlowerMeadow.Bee(position);
            bee.draw();
            moveables.push(bee);
        }
    }
    function animation() {
        L10_2_FlowerMeadow.crc2.putImageData(imgData, 0, 0);
        for (let element of moveables) {
            if (element instanceof L10_2_FlowerMeadow.Cloud) {
                element.move(1 / 10);
            }
            else if (element instanceof L10_2_FlowerMeadow.Bee) {
                element.move(1 / 8);
            }
            element.draw();
        }
    }
})(L10_2_FlowerMeadow || (L10_2_FlowerMeadow = {})); //namespace
//# sourceMappingURL=FlowerMeadow.js.map