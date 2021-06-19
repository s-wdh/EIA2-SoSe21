"use strict";
var L11_1_FlowerMeadow;
(function (L11_1_FlowerMeadow) {
    class Flower extends L11_1_FlowerMeadow.NectarProducer {
        constructor(_position) {
            super(_position);
        }
        setColor() {
            let colornum;
            colornum = Math.floor(Math.random() * 4);
            switch (colornum) {
                case 0:
                    this.color = "#ac0000";
                    break;
                case 1:
                    this.color = "#eddb00";
                    break;
                case 2:
                    this.color = "#a7009a";
                    break;
                case 3:
                    this.color = "#ff0077";
                    break;
            }
        }
        draw() {
            L11_1_FlowerMeadow.crc2.save();
            L11_1_FlowerMeadow.crc2.translate(this.position.x, this.position.y);
            L11_1_FlowerMeadow.crc2.beginPath();
            let gradient;
            gradient = L11_1_FlowerMeadow.crc2.createLinearGradient(-4, 40, -4, 0);
            gradient.addColorStop(0, "#0ea800");
            gradient.addColorStop(this.nectarAmount, "#0ea800");
            gradient.addColorStop(this.nectarAmount, "#ffffff");
            gradient.addColorStop(1, "#ffffff");
            L11_1_FlowerMeadow.crc2.fillStyle = gradient;
            L11_1_FlowerMeadow.crc2.fillRect(-4, 0, 8, 40);
            L11_1_FlowerMeadow.crc2.closePath();
            for (let i = 0; i < 8; i++) {
                L11_1_FlowerMeadow.crc2.beginPath();
                L11_1_FlowerMeadow.crc2.rotate(0.9);
                L11_1_FlowerMeadow.crc2.fillStyle = this.color;
                L11_1_FlowerMeadow.crc2.ellipse(10, 0, 4, 10, -0.9, 0, Math.PI * 360);
                L11_1_FlowerMeadow.crc2.fill();
                L11_1_FlowerMeadow.crc2.closePath();
            }
            L11_1_FlowerMeadow.crc2.beginPath();
            L11_1_FlowerMeadow.crc2.arc(0, 0, 6, 0, Math.PI * 360);
            L11_1_FlowerMeadow.crc2.fillStyle = "#913f08";
            L11_1_FlowerMeadow.crc2.fill();
            L11_1_FlowerMeadow.crc2.closePath();
            L11_1_FlowerMeadow.crc2.restore();
        }
        adjustNectar(_nectar) {
            super.adjustNectar(_nectar);
        }
    }
    L11_1_FlowerMeadow.Flower = Flower;
})(L11_1_FlowerMeadow || (L11_1_FlowerMeadow = {})); //namespace
//# sourceMappingURL=Flower.js.map