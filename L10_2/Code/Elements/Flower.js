"use strict";
var L10_2_FlowerMeadow;
(function (L10_2_FlowerMeadow) {
    class Flower extends L10_2_FlowerMeadow.Static {
        constructor(_position) {
            super(_position);
        }
        draw() {
            L10_2_FlowerMeadow.crc2.save();
            L10_2_FlowerMeadow.crc2.translate(this.position.x, this.position.y);
            L10_2_FlowerMeadow.crc2.beginPath();
            L10_2_FlowerMeadow.crc2.fillStyle = "#0ea800";
            L10_2_FlowerMeadow.crc2.fillRect(-1.5, 0, 3, 15);
            L10_2_FlowerMeadow.crc2.closePath();
            for (let i = 0; i < 8; i++) {
                L10_2_FlowerMeadow.crc2.beginPath();
                L10_2_FlowerMeadow.crc2.rotate(0.9);
                //if (_i < 100) {
                L10_2_FlowerMeadow.crc2.fillStyle = "#ac0000";
                /* } else if (99 < _i && _i < 200) {
                    crc2.fillStyle = "#eddb00";
                } else if (199 < _i && _i < 300) {
                    crc2.fillStyle = "#a7009a";
                } else if (299 < _i) {
                    crc2.fillStyle = "#ff0077";
                } */
                L10_2_FlowerMeadow.crc2.ellipse(0, 3, 2, 5, 0, 0, Math.PI * 360);
                L10_2_FlowerMeadow.crc2.fill();
                L10_2_FlowerMeadow.crc2.closePath();
            }
            L10_2_FlowerMeadow.crc2.beginPath();
            L10_2_FlowerMeadow.crc2.arc(0, 0, 3, 0, Math.PI * 360);
            L10_2_FlowerMeadow.crc2.fillStyle = "#913f08";
            L10_2_FlowerMeadow.crc2.fill();
            L10_2_FlowerMeadow.crc2.closePath();
            L10_2_FlowerMeadow.crc2.restore();
        }
    }
    L10_2_FlowerMeadow.Flower = Flower;
})(L10_2_FlowerMeadow || (L10_2_FlowerMeadow = {})); //namespace
//# sourceMappingURL=Flower.js.map