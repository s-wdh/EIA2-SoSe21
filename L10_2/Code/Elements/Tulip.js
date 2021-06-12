"use strict";
var L10_2_FlowerMeadow;
(function (L10_2_FlowerMeadow) {
    class Tulip extends L10_2_FlowerMeadow.Static {
        constructor(_position) {
            super(_position);
        }
        draw() {
            L10_2_FlowerMeadow.crc2.save();
            L10_2_FlowerMeadow.crc2.translate(this.position.x, this.position.y);
            L10_2_FlowerMeadow.crc2.beginPath();
            L10_2_FlowerMeadow.crc2.fillStyle = "#0ea800";
            L10_2_FlowerMeadow.crc2.fillRect(3, 0, 4, 15);
            L10_2_FlowerMeadow.crc2.closePath();
            L10_2_FlowerMeadow.crc2.beginPath();
            L10_2_FlowerMeadow.crc2.quadraticCurveTo(5, 5, 10, 0);
            L10_2_FlowerMeadow.crc2.lineTo(10, -10);
            L10_2_FlowerMeadow.crc2.lineTo(7.5, -2);
            L10_2_FlowerMeadow.crc2.lineTo(5, -10);
            L10_2_FlowerMeadow.crc2.lineTo(2.5, -2);
            L10_2_FlowerMeadow.crc2.lineTo(0, -10);
            L10_2_FlowerMeadow.crc2.lineTo(0, 0);
            L10_2_FlowerMeadow.crc2.fillStyle = "#ff6000";
            L10_2_FlowerMeadow.crc2.fill();
            L10_2_FlowerMeadow.crc2.closePath();
            L10_2_FlowerMeadow.crc2.restore();
        }
    }
    L10_2_FlowerMeadow.Tulip = Tulip;
})(L10_2_FlowerMeadow || (L10_2_FlowerMeadow = {})); //namespace
//# sourceMappingURL=Tulip.js.map