"use strict";
var L09_2_FlowerMeadow;
(function (L09_2_FlowerMeadow) {
    class Cloud {
        constructor(_position) {
            console.log("Cloud constructor");
            this.position = _position;
            this.velocity = new L09_2_FlowerMeadow.Vector(0, 0);
            this.velocity.random(10, 0);
        }
        draw(_position) {
            L09_2_FlowerMeadow.crc2.save();
            L09_2_FlowerMeadow.crc2.translate(_position.x, _position.y);
            L09_2_FlowerMeadow.crc2.beginPath();
            L09_2_FlowerMeadow.crc2.moveTo(0, 0);
            L09_2_FlowerMeadow.crc2.arc(0, 0, 12, 0, Math.PI * 2);
            L09_2_FlowerMeadow.crc2.arc(10, -10, 12, 0, Math.PI * 2);
            L09_2_FlowerMeadow.crc2.arc(10, 10, 12, 0, Math.PI * 2);
            L09_2_FlowerMeadow.crc2.arc(20, 0, 12, 0, Math.PI * 2);
            L09_2_FlowerMeadow.crc2.arc(30, -10, 12, 0, Math.PI * 2);
            L09_2_FlowerMeadow.crc2.arc(30, 10, 12, 0, Math.PI * 2);
            L09_2_FlowerMeadow.crc2.arc(40, 0, 12, 0, Math.PI * 2);
            L09_2_FlowerMeadow.crc2.fillStyle = "#ffffff";
            L09_2_FlowerMeadow.crc2.fill();
            L09_2_FlowerMeadow.crc2.closePath();
            L09_2_FlowerMeadow.crc2.restore();
        }
        move(_timeslice) {
            let offset = new L09_2_FlowerMeadow.Vector(this.velocity.x, this.velocity.y);
            //offset.scale(_timeslice);
            //_timeslice = Math.abs(_timeslice);
            offset.x *= _timeslice;
            offset.y *= 0;
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L09_2_FlowerMeadow.crc2.canvas.width;
            if (this.position.x > L09_2_FlowerMeadow.crc2.canvas.width)
                this.position.x -= L09_2_FlowerMeadow.crc2.canvas.width;
        }
    }
    L09_2_FlowerMeadow.Cloud = Cloud;
})(L09_2_FlowerMeadow || (L09_2_FlowerMeadow = {})); //namespace
//# sourceMappingURL=Cloud.js.map