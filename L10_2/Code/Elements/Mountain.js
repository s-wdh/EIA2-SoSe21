"use strict";
var L10_2_FlowerMeadow;
(function (L10_2_FlowerMeadow) {
    class Mountain extends L10_2_FlowerMeadow.Static {
        constructor(_position) {
            super(_position);
        }
        draw() {
            L10_2_FlowerMeadow.crc2.save();
            L10_2_FlowerMeadow.crc2.translate(this.position.x, this.position.y);
            /* let scaleFactor: number = Math.floor(Math.random() * 3);

            if (_i < 25) {
                crc2.scale(scaleFactor, scaleFactor);
            } else {
                crc2.scale(1, 1);
            } */
            L10_2_FlowerMeadow.crc2.beginPath();
            L10_2_FlowerMeadow.crc2.lineTo(25, -80);
            L10_2_FlowerMeadow.crc2.lineTo(50, 0);
            L10_2_FlowerMeadow.crc2.lineTo(0, 0);
            L10_2_FlowerMeadow.crc2.closePath();
            L10_2_FlowerMeadow.crc2.strokeStyle = "#3b3b3b";
            L10_2_FlowerMeadow.crc2.lineWidth = 2;
            L10_2_FlowerMeadow.crc2.stroke();
            L10_2_FlowerMeadow.crc2.fillStyle = "#878787";
            L10_2_FlowerMeadow.crc2.fill();
            L10_2_FlowerMeadow.crc2.restore();
        }
    }
    L10_2_FlowerMeadow.Mountain = Mountain;
})(L10_2_FlowerMeadow || (L10_2_FlowerMeadow = {})); //namespace
//# sourceMappingURL=Mountain.js.map