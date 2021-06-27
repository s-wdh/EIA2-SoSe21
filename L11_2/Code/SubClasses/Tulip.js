"use strict";
var L11_2_FlowerMeadow;
(function (L11_2_FlowerMeadow) {
    class Tulip extends L11_2_FlowerMeadow.NectarProducer {
        constructor(_position) {
            super(_position);
        }
        draw() {
            L11_2_FlowerMeadow.crc2.save();
            L11_2_FlowerMeadow.crc2.translate(this.position.x, this.position.y);
            L11_2_FlowerMeadow.crc2.beginPath();
            let gradient;
            gradient = L11_2_FlowerMeadow.crc2.createLinearGradient(-4, 20, -4, 0);
            gradient.addColorStop(0, "#0ea800");
            gradient.addColorStop(this.nectarAmount, "#0ea800");
            gradient.addColorStop(this.nectarAmount, "#ffffff");
            gradient.addColorStop(1, "#ffffff");
            L11_2_FlowerMeadow.crc2.scale(2, 2);
            L11_2_FlowerMeadow.crc2.fillStyle = gradient;
            L11_2_FlowerMeadow.crc2.fillRect(3, 0, 4, 20);
            L11_2_FlowerMeadow.crc2.closePath();
            L11_2_FlowerMeadow.crc2.beginPath();
            L11_2_FlowerMeadow.crc2.quadraticCurveTo(5, 5, 10, 0);
            L11_2_FlowerMeadow.crc2.lineTo(10, -10);
            L11_2_FlowerMeadow.crc2.lineTo(7.5, -2);
            L11_2_FlowerMeadow.crc2.lineTo(5, -10);
            L11_2_FlowerMeadow.crc2.lineTo(2.5, -2);
            L11_2_FlowerMeadow.crc2.lineTo(0, -10);
            L11_2_FlowerMeadow.crc2.lineTo(0, 0);
            L11_2_FlowerMeadow.crc2.fillStyle = "#ff6000";
            L11_2_FlowerMeadow.crc2.fill();
            L11_2_FlowerMeadow.crc2.closePath();
            L11_2_FlowerMeadow.crc2.restore();
        }
        adjustNectar(_nectar) {
            super.adjustNectar(_nectar);
        }
    }
    L11_2_FlowerMeadow.Tulip = Tulip;
})(L11_2_FlowerMeadow || (L11_2_FlowerMeadow = {})); //namespace
//# sourceMappingURL=Tulip.js.map