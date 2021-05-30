"use strict";
var L09_2_FlowerMeadow;
(function (L09_2_FlowerMeadow) {
    class Flower {
        constructor(_position) {
            console.log("Flower constructor");
            this.position = _position;
        }
        draw(_position, _i) {
            L09_2_FlowerMeadow.crc2.save();
            L09_2_FlowerMeadow.crc2.translate(_position.x, _position.y);
            L09_2_FlowerMeadow.crc2.beginPath();
            L09_2_FlowerMeadow.crc2.fillStyle = "#0ea800";
            L09_2_FlowerMeadow.crc2.fillRect(-1.5, 0, 3, 15);
            L09_2_FlowerMeadow.crc2.closePath();
            for (let i = 0; i < 8; i++) {
                L09_2_FlowerMeadow.crc2.beginPath();
                L09_2_FlowerMeadow.crc2.rotate(0.9);
                if (_i < 100) {
                    L09_2_FlowerMeadow.crc2.fillStyle = "#ac0000";
                }
                else if (99 < _i && _i < 200) {
                    L09_2_FlowerMeadow.crc2.fillStyle = "#eddb00";
                }
                else if (199 < _i && _i < 300) {
                    L09_2_FlowerMeadow.crc2.fillStyle = "#a7009a";
                }
                else if (299 < _i) {
                    L09_2_FlowerMeadow.crc2.fillStyle = "#ff0077";
                }
                L09_2_FlowerMeadow.crc2.ellipse(0, 3, 2, 5, 0, 0, Math.PI * 360);
                L09_2_FlowerMeadow.crc2.fill();
                L09_2_FlowerMeadow.crc2.closePath();
            }
            L09_2_FlowerMeadow.crc2.beginPath();
            L09_2_FlowerMeadow.crc2.arc(0, 0, 3, 0, Math.PI * 360);
            L09_2_FlowerMeadow.crc2.fillStyle = "#913f08";
            L09_2_FlowerMeadow.crc2.fill();
            L09_2_FlowerMeadow.crc2.closePath();
            L09_2_FlowerMeadow.crc2.restore();
        }
    }
    L09_2_FlowerMeadow.Flower = Flower;
})(L09_2_FlowerMeadow || (L09_2_FlowerMeadow = {})); //namespace
//# sourceMappingURL=Flower.js.map