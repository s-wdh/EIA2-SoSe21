"use strict";
var L09_2_FlowerMeadow;
(function (L09_2_FlowerMeadow) {
    class Tulip {
        constructor(_position) {
            console.log("Tulip constructor");
            this.position = _position;
        }
        draw(_position) {
            L09_2_FlowerMeadow.crc2.save();
            L09_2_FlowerMeadow.crc2.translate(_position.x, _position.y);
            L09_2_FlowerMeadow.crc2.beginPath();
            L09_2_FlowerMeadow.crc2.fillStyle = "#0ea800";
            L09_2_FlowerMeadow.crc2.fillRect(3, 0, 4, 15);
            L09_2_FlowerMeadow.crc2.closePath();
            L09_2_FlowerMeadow.crc2.beginPath();
            L09_2_FlowerMeadow.crc2.quadraticCurveTo(5, 5, 10, 0);
            L09_2_FlowerMeadow.crc2.lineTo(10, -10);
            L09_2_FlowerMeadow.crc2.lineTo(7.5, -2);
            L09_2_FlowerMeadow.crc2.lineTo(5, -10);
            L09_2_FlowerMeadow.crc2.lineTo(2.5, -2);
            L09_2_FlowerMeadow.crc2.lineTo(0, -10);
            L09_2_FlowerMeadow.crc2.lineTo(0, 0);
            L09_2_FlowerMeadow.crc2.fillStyle = "#ff6000";
            L09_2_FlowerMeadow.crc2.fill();
            L09_2_FlowerMeadow.crc2.closePath();
            L09_2_FlowerMeadow.crc2.restore();
        }
    }
    L09_2_FlowerMeadow.Tulip = Tulip;
})(L09_2_FlowerMeadow || (L09_2_FlowerMeadow = {})); //namespace
//# sourceMappingURL=Tulip.js.map