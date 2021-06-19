"use strict";
var L11_1_FlowerMeadow;
(function (L11_1_FlowerMeadow) {
    class Mountain extends L11_1_FlowerMeadow.Static {
        constructor(_position) {
            super(_position);
        }
        draw() {
            L11_1_FlowerMeadow.crc2.save();
            L11_1_FlowerMeadow.crc2.translate(this.position.x, this.position.y);
            /* let scaleFactor: number = Math.floor(Math.random() * 3);

            if (_i < 25) {
                crc2.scale(scaleFactor, scaleFactor);
            } else {
                crc2.scale(1, 1);
            } */
            L11_1_FlowerMeadow.crc2.beginPath();
            L11_1_FlowerMeadow.crc2.lineTo(25, -80);
            L11_1_FlowerMeadow.crc2.lineTo(50, 0);
            L11_1_FlowerMeadow.crc2.lineTo(0, 0);
            L11_1_FlowerMeadow.crc2.closePath();
            L11_1_FlowerMeadow.crc2.strokeStyle = "#3b3b3b";
            L11_1_FlowerMeadow.crc2.lineWidth = 2;
            L11_1_FlowerMeadow.crc2.stroke();
            L11_1_FlowerMeadow.crc2.fillStyle = "#878787";
            L11_1_FlowerMeadow.crc2.fill();
            L11_1_FlowerMeadow.crc2.restore();
        }
    }
    L11_1_FlowerMeadow.Mountain = Mountain;
})(L11_1_FlowerMeadow || (L11_1_FlowerMeadow = {})); //namespace
//# sourceMappingURL=Mountain.js.map