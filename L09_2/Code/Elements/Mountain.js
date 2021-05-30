"use strict";
var L09_2_FlowerMeadow;
(function (L09_2_FlowerMeadow) {
    class Mountain {
        constructor(_position) {
            console.log("Mountain constructor");
            this.position = _position;
        }
        draw(_position, _i) {
            L09_2_FlowerMeadow.crc2.save();
            L09_2_FlowerMeadow.crc2.translate(_position.x, _position.y);
            let scaleFactor = Math.floor(Math.random() * 3);
            if (_i < 25) {
                L09_2_FlowerMeadow.crc2.scale(scaleFactor, scaleFactor);
            }
            else {
                L09_2_FlowerMeadow.crc2.scale(1, 1);
            }
            L09_2_FlowerMeadow.crc2.beginPath();
            L09_2_FlowerMeadow.crc2.lineTo(25, -80);
            L09_2_FlowerMeadow.crc2.lineTo(50, 0);
            L09_2_FlowerMeadow.crc2.lineTo(0, 0);
            L09_2_FlowerMeadow.crc2.closePath();
            L09_2_FlowerMeadow.crc2.strokeStyle = "#3b3b3b";
            L09_2_FlowerMeadow.crc2.lineWidth = 2;
            L09_2_FlowerMeadow.crc2.stroke();
            L09_2_FlowerMeadow.crc2.fillStyle = "#878787";
            L09_2_FlowerMeadow.crc2.fill();
            L09_2_FlowerMeadow.crc2.restore();
        }
    }
    L09_2_FlowerMeadow.Mountain = Mountain;
})(L09_2_FlowerMeadow || (L09_2_FlowerMeadow = {})); //namespace
//# sourceMappingURL=Mountain.js.map