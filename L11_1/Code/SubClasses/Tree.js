"use strict";
var L11_1_FlowerMeadow;
(function (L11_1_FlowerMeadow) {
    class Tree extends L11_1_FlowerMeadow.Static {
        constructor(_position) {
            super(_position);
        }
        draw() {
            L11_1_FlowerMeadow.crc2.save();
            L11_1_FlowerMeadow.crc2.translate(this.position.x, this.position.y);
            L11_1_FlowerMeadow.crc2.fillStyle = "#542405";
            L11_1_FlowerMeadow.crc2.fillRect(-5, 0, 10, 25);
            L11_1_FlowerMeadow.crc2.beginPath();
            L11_1_FlowerMeadow.crc2.arc(0, -10, 12.5, 0, Math.PI * 360);
            L11_1_FlowerMeadow.crc2.closePath();
            L11_1_FlowerMeadow.crc2.fillStyle = "#075200";
            L11_1_FlowerMeadow.crc2.fill();
            L11_1_FlowerMeadow.crc2.restore();
        }
    }
    L11_1_FlowerMeadow.Tree = Tree;
})(L11_1_FlowerMeadow || (L11_1_FlowerMeadow = {})); //namespace
//# sourceMappingURL=Tree.js.map