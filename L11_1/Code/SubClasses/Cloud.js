"use strict";
var L11_1_FlowerMeadow;
(function (L11_1_FlowerMeadow) {
    class Cloud extends L11_1_FlowerMeadow.Moveable {
        constructor(_position) {
            super(_position);
            this.velocity = L11_1_FlowerMeadow.Vector.getRandom(10, 0);
        }
        draw() {
            L11_1_FlowerMeadow.crc2.save();
            L11_1_FlowerMeadow.crc2.translate(this.position.x, this.position.y);
            L11_1_FlowerMeadow.crc2.beginPath();
            L11_1_FlowerMeadow.crc2.moveTo(0, 0);
            L11_1_FlowerMeadow.crc2.arc(0, 0, 12, 0, Math.PI * 2);
            L11_1_FlowerMeadow.crc2.arc(10, -10, 12, 0, Math.PI * 2);
            L11_1_FlowerMeadow.crc2.arc(10, 10, 12, 0, Math.PI * 2);
            L11_1_FlowerMeadow.crc2.arc(20, 0, 12, 0, Math.PI * 2);
            L11_1_FlowerMeadow.crc2.arc(30, -10, 12, 0, Math.PI * 2);
            L11_1_FlowerMeadow.crc2.arc(30, 10, 12, 0, Math.PI * 2);
            L11_1_FlowerMeadow.crc2.arc(40, 0, 12, 0, Math.PI * 2);
            L11_1_FlowerMeadow.crc2.fillStyle = "#ffffff";
            L11_1_FlowerMeadow.crc2.fill();
            L11_1_FlowerMeadow.crc2.closePath();
            L11_1_FlowerMeadow.crc2.restore();
        }
        move(_timeslice) {
            let timesliceX = _timeslice;
            let timesliceY = 0;
            super.move(timesliceX, timesliceY);
            if (this.position.x < 0)
                this.position.x += L11_1_FlowerMeadow.crc2.canvas.width;
            if (this.position.x > L11_1_FlowerMeadow.crc2.canvas.width)
                this.position.x -= L11_1_FlowerMeadow.crc2.canvas.width;
        }
    }
    L11_1_FlowerMeadow.Cloud = Cloud;
})(L11_1_FlowerMeadow || (L11_1_FlowerMeadow = {})); //namespace
//# sourceMappingURL=Cloud.js.map