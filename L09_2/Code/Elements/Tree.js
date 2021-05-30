"use strict";
var L09_2_FlowerMeadow;
(function (L09_2_FlowerMeadow) {
    class Tree {
        constructor(_position) {
            console.log("Tree constructor");
            this.position = _position;
        }
        draw(_position) {
            L09_2_FlowerMeadow.crc2.save();
            L09_2_FlowerMeadow.crc2.translate(_position.x, _position.y);
            L09_2_FlowerMeadow.crc2.fillStyle = "#542405";
            L09_2_FlowerMeadow.crc2.fillRect(-5, 0, 10, 25);
            L09_2_FlowerMeadow.crc2.beginPath();
            L09_2_FlowerMeadow.crc2.arc(0, -10, 12.5, 0, Math.PI * 360);
            L09_2_FlowerMeadow.crc2.closePath();
            L09_2_FlowerMeadow.crc2.fillStyle = "#075200";
            L09_2_FlowerMeadow.crc2.fill();
            L09_2_FlowerMeadow.crc2.restore();
        }
    }
    L09_2_FlowerMeadow.Tree = Tree;
})(L09_2_FlowerMeadow || (L09_2_FlowerMeadow = {})); //namespace
//# sourceMappingURL=Tree.js.map