"use strict";
var L10_2_FlowerMeadow;
(function (L10_2_FlowerMeadow) {
    class Cloud extends L10_2_FlowerMeadow.Moveable {
        constructor(_position) {
            super(_position);
            this.velocity.random(10, 0);
        }
        draw() {
            L10_2_FlowerMeadow.crc2.save();
            L10_2_FlowerMeadow.crc2.translate(this.position.x, this.position.y);
            L10_2_FlowerMeadow.crc2.beginPath();
            L10_2_FlowerMeadow.crc2.moveTo(0, 0);
            L10_2_FlowerMeadow.crc2.arc(0, 0, 12, 0, Math.PI * 2);
            L10_2_FlowerMeadow.crc2.arc(10, -10, 12, 0, Math.PI * 2);
            L10_2_FlowerMeadow.crc2.arc(10, 10, 12, 0, Math.PI * 2);
            L10_2_FlowerMeadow.crc2.arc(20, 0, 12, 0, Math.PI * 2);
            L10_2_FlowerMeadow.crc2.arc(30, -10, 12, 0, Math.PI * 2);
            L10_2_FlowerMeadow.crc2.arc(30, 10, 12, 0, Math.PI * 2);
            L10_2_FlowerMeadow.crc2.arc(40, 0, 12, 0, Math.PI * 2);
            L10_2_FlowerMeadow.crc2.fillStyle = "#ffffff";
            L10_2_FlowerMeadow.crc2.fill();
            L10_2_FlowerMeadow.crc2.closePath();
            L10_2_FlowerMeadow.crc2.restore();
        }
        move(_timeslice) {
            super.move(_timeslice);
            if (this.position.x < 0)
                this.position.x += L10_2_FlowerMeadow.crc2.canvas.width;
            if (this.position.x > L10_2_FlowerMeadow.crc2.canvas.width)
                this.position.x -= L10_2_FlowerMeadow.crc2.canvas.width;
        }
    }
    L10_2_FlowerMeadow.Cloud = Cloud;
})(L10_2_FlowerMeadow || (L10_2_FlowerMeadow = {})); //namespace
//# sourceMappingURL=Cloud.js.map