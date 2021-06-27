"use strict";
var L11_2_FlowerMeadow;
(function (L11_2_FlowerMeadow) {
    class Tree extends L11_2_FlowerMeadow.Static {
        constructor(_position) {
            super(_position);
        }
        draw() {
            L11_2_FlowerMeadow.crc2.save();
            L11_2_FlowerMeadow.crc2.translate(this.position.x, this.position.y);
            L11_2_FlowerMeadow.crc2.fillStyle = "#542405";
            L11_2_FlowerMeadow.crc2.fillRect(-5, 0, 10, 25);
            L11_2_FlowerMeadow.crc2.beginPath();
            L11_2_FlowerMeadow.crc2.arc(0, -10, 12.5, 0, Math.PI * 360);
            L11_2_FlowerMeadow.crc2.closePath();
            L11_2_FlowerMeadow.crc2.fillStyle = "#075200";
            L11_2_FlowerMeadow.crc2.fill();
            L11_2_FlowerMeadow.crc2.restore();
        }
    }
    L11_2_FlowerMeadow.Tree = Tree;
})(L11_2_FlowerMeadow || (L11_2_FlowerMeadow = {})); //namespace
//# sourceMappingURL=Tree.js.map