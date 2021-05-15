"use strict";
var L08_2_FlowerMeadow;
(function (L08_2_FlowerMeadow) {
    /*
    Aufgabe: L08.2: Blumenwiese
    Name: Sarah Weidenhiller
    Matrikel: 263128
    Datum: 15.05.2021
    Quellen: -
    */
    window.addEventListener("load", handleLoad);
    let crc2;
    /* screen size of the end device, so it can be changed quickly */
    let width = window.innerWidth;
    let heigth = window.innerHeight;
    function handleLoad() {
        console.log("start");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        drawBackground(canvas);
        positions();
    }
    function drawBackground(_canvas) {
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
        for (let i = 0; i < 8; i++) {
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
    }
    function positions() {
        // mountains
        for (let i = 0; i < 50; i++) {
            let x;
            let y;
            x = (Math.random() * width);
            y = (heigth / 4);
            createMountains(x, y, i);
        }
        // trees
        for (let i = 0; i < 100; i++) {
            let x;
            let y;
            x = (Math.random() * width);
            y = (heigth / 5) + (Math.random() * 40);
            createTrees(x, y);
        }
        // clouds
        for (let i = 0; i < 10; i++) {
            let x;
            let y;
            x = (Math.random() * width);
            y = 0 + (Math.random() * 50);
            createClouds(x, y);
        }
        // flowers
        for (let i = 0; i < 400; i++) {
            let x;
            let y;
            x = (Math.random() * width);
            y = (heigth / 3) + ((heigth / 1.5) * Math.random());
            createFlowers(x, y, i);
        }
        // tulips
        for (let i = 0; i < 100; i++) {
            let x;
            let y;
            x = (Math.random() * width);
            y = (heigth / 3) + ((heigth / 1.5) * Math.random());
            createTulips(x, y);
        }
        // bees
        // beehive
    }
    function createTrees(_x, _y) {
        console.log("trees");
        crc2.restore();
        crc2.save();
        crc2.translate(_x, _y);
        crc2.fillStyle = "#542405";
        crc2.fillRect(-5, 0, 10, 25);
        crc2.beginPath();
        crc2.arc(0, -10, 12.5, 0, Math.PI * 360);
        crc2.closePath();
        crc2.fillStyle = "#075200";
        crc2.fill();
        crc2.restore();
    }
    function createClouds(_x, _y) {
        console.log("clouds");
        crc2.restore();
        crc2.save();
        crc2.translate(_x, _y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.arc(0, 0, 12, 0, Math.PI * 360);
        crc2.arc(10, -10, 12, 0, Math.PI * 360);
        crc2.arc(10, 10, 12, 0, Math.PI * 360);
        crc2.arc(20, 0, 12, 0, Math.PI * 360);
        crc2.arc(30, -10, 12, 0, Math.PI * 360);
        crc2.arc(30, 10, 12, 0, Math.PI * 360);
        crc2.arc(40, 0, 12, 0, Math.PI * 360);
        crc2.closePath();
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        crc2.restore();
        /* crc2.bezierCurveTo(0, 30, 40, 30, 45, 0);
        crc2.moveTo(35, 0);
        crc2.bezierCurveTo(40, 30, 80, 30, 80, 0);
        crc2.moveTo(70, 15);
        crc2.bezierCurveTo(100, 20, 100, -20, 70, -15);
        crc2.moveTo(80, 0);
        crc2.bezierCurveTo(80, -30, 40, -30, 35, 0);
        crc2.moveTo(45, 0);
        crc2.bezierCurveTo(40, -30, 0, -30, 0, 0);
        crc2.moveTo(10, -15);
        crc2.bezierCurveTo(-20, -20, -20, 20, 10, 15); */
    }
    function createMountains(_x, _y, _i) {
        console.log("mountains");
        // create scale factor
        let scaleFactor = Math.floor(Math.random() * 3);
        crc2.restore();
        crc2.save();
        crc2.translate(_x, _y);
        if (_i < 25) {
            crc2.scale(scaleFactor, scaleFactor);
        }
        else {
            crc2.scale(1, 1);
        }
        crc2.beginPath();
        crc2.lineTo(25, -80);
        crc2.lineTo(50, 0);
        crc2.lineTo(0, 0);
        crc2.closePath();
        crc2.strokeStyle = "#3b3b3b";
        crc2.lineWidth = 2;
        crc2.stroke();
        crc2.fillStyle = "#878787";
        crc2.fill();
        crc2.restore();
    }
    function createFlowers(_x, _y, _i) {
        console.log("flowers");
        crc2.restore();
        crc2.save();
        crc2.translate(_x, _y);
        crc2.beginPath();
        crc2.fillStyle = "#0ea800";
        crc2.fillRect(-1.5, 0, 3, 15);
        for (let i = 0; i < 8; i++) {
            crc2.beginPath();
            crc2.rotate(0.9);
            if (_i < 100) {
                crc2.fillStyle = "#ac0000";
            }
            else if (99 < _i && _i < 200) {
                crc2.fillStyle = "#eddb00";
            }
            else if (199 < _i && _i < 300) {
                crc2.fillStyle = "#a7009a";
            }
            else if (299 < _i) {
                crc2.fillStyle = "#ff0077";
            }
            crc2.ellipse(0, 3, 2, 5, 0, 0, Math.PI * 360);
            crc2.fill();
            crc2.closePath();
        }
        crc2.arc(0, 0, 3, 0, Math.PI * 360);
        crc2.fillStyle = "#913f08";
        crc2.fill();
        crc2.restore();
    }
    function createTulips(_x, _y) {
        console.log("tulips");
        crc2.restore();
        crc2.save();
        crc2.translate(_x, _y);
        crc2.beginPath();
        crc2.fillStyle = "#0ea800";
        crc2.fillRect(3, 0, 4, 15);
        crc2.quadraticCurveTo(5, 5, 10, 0);
        crc2.lineTo(10, -10);
        crc2.lineTo(7.5, -2);
        crc2.lineTo(5, -10);
        crc2.lineTo(2.5, -2);
        crc2.lineTo(0, -10);
        crc2.lineTo(0, 0);
        crc2.closePath();
        crc2.fillStyle = "#ff6000";
        crc2.fill();
    }
})(L08_2_FlowerMeadow || (L08_2_FlowerMeadow = {})); //namespace
//# sourceMappingURL=FlowerMeadow.js.map