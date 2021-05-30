"use strict";
var L09_2_FlowerMeadow;
(function (L09_2_FlowerMeadow) {
    /*
    Aufgabe: L09.2: Blumenwiese
    Name: Sarah Weidenhiller
    Matrikel: 263128
    Datum: 29.05.2021
    Quellen: -
    */
    window.addEventListener("load", handleLoad);
    L09_2_FlowerMeadow.canvas = document.querySelector("canvas");
    L09_2_FlowerMeadow.width = window.innerWidth;
    L09_2_FlowerMeadow.heigth = window.innerHeight;
    let mountains = [];
    let trees = [];
    let clouds = [];
    let flowers = [];
    let tulips = [];
    let bees = [];
    let imgData;
    function handleLoad() {
        console.log("start");
        if (!L09_2_FlowerMeadow.canvas)
            return;
        L09_2_FlowerMeadow.crc2 = L09_2_FlowerMeadow.canvas.getContext("2d");
        drawBackground(L09_2_FlowerMeadow.canvas);
        positions();
        window.setInterval(animation, 30);
    }
    function drawBackground(_canvas) {
        console.log("background");
        L09_2_FlowerMeadow.crc2.fillStyle = "#81b5df";
        L09_2_FlowerMeadow.crc2.fillRect(0, 0, L09_2_FlowerMeadow.width, L09_2_FlowerMeadow.heigth);
        L09_2_FlowerMeadow.crc2.fillStyle = "#6cf82a";
        L09_2_FlowerMeadow.crc2.fillRect(0, (L09_2_FlowerMeadow.heigth / 4), L09_2_FlowerMeadow.width, (L09_2_FlowerMeadow.heigth / 0.75));
        //sun
        L09_2_FlowerMeadow.crc2.restore();
        L09_2_FlowerMeadow.crc2.save();
        L09_2_FlowerMeadow.crc2.translate(690, 30);
        L09_2_FlowerMeadow.crc2.beginPath();
        L09_2_FlowerMeadow.crc2.arc(0, 0, 15, 0, 2 * Math.PI);
        L09_2_FlowerMeadow.crc2.fillStyle = "#f8de00";
        L09_2_FlowerMeadow.crc2.fill();
        L09_2_FlowerMeadow.crc2.closePath();
        for (let i = 0; i < 8; i++) {
            L09_2_FlowerMeadow.crc2.beginPath();
            L09_2_FlowerMeadow.crc2.rotate(0.9);
            L09_2_FlowerMeadow.crc2.moveTo(0, 15);
            L09_2_FlowerMeadow.crc2.lineTo(0, 25);
            L09_2_FlowerMeadow.crc2.strokeStyle = "#f8de00";
            L09_2_FlowerMeadow.crc2.lineWidth = 3;
            L09_2_FlowerMeadow.crc2.stroke();
            L09_2_FlowerMeadow.crc2.closePath();
        }
        L09_2_FlowerMeadow.crc2.restore();
        imgData = L09_2_FlowerMeadow.crc2.getImageData(0, 0, L09_2_FlowerMeadow.width, L09_2_FlowerMeadow.heigth);
    }
    function positions() {
        // mountains
        for (let i = 0; i < 50; i++) {
            let x;
            let y;
            x = (Math.random() * L09_2_FlowerMeadow.width);
            y = (L09_2_FlowerMeadow.heigth / 4);
            let position = new L09_2_FlowerMeadow.Vector(x, y);
            let mountain = new L09_2_FlowerMeadow.Mountain(position);
            mountain.draw(position, i);
            mountains.push(mountain);
        }
        // trees
        for (let i = 0; i < 100; i++) {
            let x;
            let y;
            x = (Math.random() * L09_2_FlowerMeadow.width);
            y = (L09_2_FlowerMeadow.heigth / 5) + (Math.random() * 40);
            let position = new L09_2_FlowerMeadow.Vector(x, y);
            let tree = new L09_2_FlowerMeadow.Tree(position);
            tree.draw(position);
            trees.push(tree);
        }
        // flowers
        for (let i = 0; i < 400; i++) {
            let x;
            let y;
            x = (Math.random() * L09_2_FlowerMeadow.width);
            y = (L09_2_FlowerMeadow.heigth / 3) + ((L09_2_FlowerMeadow.heigth / 1.5) * Math.random());
            let position = new L09_2_FlowerMeadow.Vector(x, y);
            let flower = new L09_2_FlowerMeadow.Flower(position);
            flower.draw(position, i);
            flowers.push(flower);
        }
        // tulips
        for (let i = 0; i < 100; i++) {
            let x;
            let y;
            x = (Math.random() * L09_2_FlowerMeadow.width);
            y = (L09_2_FlowerMeadow.heigth / 3) + ((L09_2_FlowerMeadow.heigth / 1.5) * Math.random());
            let position = new L09_2_FlowerMeadow.Vector(x, y);
            let tulip = new L09_2_FlowerMeadow.Tulip(position);
            tulip.draw(position);
            tulips.push(tulip);
        }
        imgData = L09_2_FlowerMeadow.crc2.getImageData(0, 0, L09_2_FlowerMeadow.width, L09_2_FlowerMeadow.heigth);
        // clouds
        for (let i = 0; i < 10; i++) {
            let x;
            let y;
            x = (Math.random() * L09_2_FlowerMeadow.width);
            y = 0 + (Math.random() * 50);
            let position = new L09_2_FlowerMeadow.Vector(x, y);
            let cloud = new L09_2_FlowerMeadow.Cloud(position);
            cloud.draw(position);
            clouds.push(cloud);
        }
        // bees
        for (let i = 0; i < 20; i++) {
            let x;
            let y;
            x = (Math.random() * L09_2_FlowerMeadow.width);
            y = (Math.random() * L09_2_FlowerMeadow.heigth);
            let position = new L09_2_FlowerMeadow.Vector(x, y);
            let bee = new L09_2_FlowerMeadow.Bee(position);
            bee.draw(position);
            bees.push(bee);
        }
    }
    function animation() {
        L09_2_FlowerMeadow.crc2.putImageData(imgData, 0, 0);
        for (let cloud of clouds) {
            cloud.move(1 / 10);
            cloud.draw(cloud.position);
        }
        for (let bee of bees) {
            bee.move(1 / 8);
            bee.draw(bee.position);
        }
    }
})(L09_2_FlowerMeadow || (L09_2_FlowerMeadow = {})); //namespace
//# sourceMappingURL=FlowerMeadow.js.map