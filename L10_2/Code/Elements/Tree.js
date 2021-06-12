"use strict";
var L10_2_FlowerMeadow;
(function (L10_2_FlowerMeadow) {
    class Tree extends L10_2_FlowerMeadow.Static {
        constructor(_position) {
            super(_position);
        }
        draw() {
            L10_2_FlowerMeadow.crc2.save();
            L10_2_FlowerMeadow.crc2.translate(this.position.x, this.position.y);
            L10_2_FlowerMeadow.crc2.fillStyle = "#542405";
            L10_2_FlowerMeadow.crc2.fillRect(-5, 0, 10, 25);
            L10_2_FlowerMeadow.crc2.beginPath();
            L10_2_FlowerMeadow.crc2.arc(0, -10, 12.5, 0, Math.PI * 360);
            L10_2_FlowerMeadow.crc2.closePath();
            L10_2_FlowerMeadow.crc2.fillStyle = "#075200";
            L10_2_FlowerMeadow.crc2.fill();
            L10_2_FlowerMeadow.crc2.restore();
        }
    }
    L10_2_FlowerMeadow.Tree = Tree;
})(L10_2_FlowerMeadow || (L10_2_FlowerMeadow = {})); //namespace
//# sourceMappingURL=Tree.js.map