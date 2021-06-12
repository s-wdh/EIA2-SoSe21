"use strict";
var L10_2_FlowerMeadow;
(function (L10_2_FlowerMeadow) {
    class Bee extends L10_2_FlowerMeadow.Moveable {
        constructor(_position) {
            super(_position);
            this.velocity.random(20, 20);
        }
        draw() {
            L10_2_FlowerMeadow.crc2.save();
            L10_2_FlowerMeadow.crc2.translate(this.position.x, this.position.y);
            //Flügel 1
            L10_2_FlowerMeadow.crc2.beginPath();
            L10_2_FlowerMeadow.crc2.moveTo(-60, -30);
            L10_2_FlowerMeadow.crc2.bezierCurveTo(-85, -70, 5, -70, -15, -25);
            L10_2_FlowerMeadow.crc2.fillStyle = "#eeffff";
            L10_2_FlowerMeadow.crc2.fill();
            L10_2_FlowerMeadow.crc2.stroke();
            L10_2_FlowerMeadow.crc2.closePath();
            //Flügel 2
            L10_2_FlowerMeadow.crc2.beginPath();
            L10_2_FlowerMeadow.crc2.moveTo(-70, -25);
            L10_2_FlowerMeadow.crc2.bezierCurveTo(-95, -80, -20, -80, -35, -30);
            L10_2_FlowerMeadow.crc2.fillStyle = "#eeffff";
            L10_2_FlowerMeadow.crc2.fill();
            L10_2_FlowerMeadow.crc2.stroke();
            L10_2_FlowerMeadow.crc2.closePath();
            //Körper
            L10_2_FlowerMeadow.crc2.beginPath();
            let linearGradient = L10_2_FlowerMeadow.crc2.createLinearGradient(-90, -30, 10, 30);
            linearGradient.addColorStop(0, "#ffff00");
            linearGradient.addColorStop(0.1, "#ffff00");
            linearGradient.addColorStop(0.11, "#000000");
            linearGradient.addColorStop(0.2, "#000000");
            linearGradient.addColorStop(0.21, "#ffff00");
            linearGradient.addColorStop(0.3, "#ffff00");
            linearGradient.addColorStop(0.31, "#000000");
            linearGradient.addColorStop(0.4, "#000000");
            linearGradient.addColorStop(0.41, "#ffff00");
            linearGradient.addColorStop(0.5, "#ffff00");
            linearGradient.addColorStop(0.51, "#000000");
            linearGradient.addColorStop(0.6, "#000000");
            linearGradient.addColorStop(0.61, "#ffff00");
            linearGradient.addColorStop(0.7, "#ffff00");
            linearGradient.addColorStop(0.71, "#000000");
            linearGradient.addColorStop(0.8, "#000000");
            linearGradient.addColorStop(0.81, "#ffff00");
            linearGradient.addColorStop(0.9, "#ffff00");
            linearGradient.addColorStop(0.91, "#000000");
            linearGradient.addColorStop(1, "#000000");
            L10_2_FlowerMeadow.crc2.ellipse(-40, 0, 50, 30, 0, 0, 2 * Math.PI);
            L10_2_FlowerMeadow.crc2.fillStyle = linearGradient;
            L10_2_FlowerMeadow.crc2.strokeStyle = "#000000";
            L10_2_FlowerMeadow.crc2.fill();
            L10_2_FlowerMeadow.crc2.stroke();
            L10_2_FlowerMeadow.crc2.closePath();
            //Kopf
            L10_2_FlowerMeadow.crc2.beginPath();
            L10_2_FlowerMeadow.crc2.arc(0, 0, 20, 0, 2 * Math.PI);
            L10_2_FlowerMeadow.crc2.fillStyle = "#ffff00";
            L10_2_FlowerMeadow.crc2.fill();
            L10_2_FlowerMeadow.crc2.stroke();
            L10_2_FlowerMeadow.crc2.closePath();
            //Fühler
            L10_2_FlowerMeadow.crc2.beginPath();
            L10_2_FlowerMeadow.crc2.fillStyle = "#000000";
            L10_2_FlowerMeadow.crc2.strokeStyle = "#000000";
            L10_2_FlowerMeadow.crc2.moveTo(-2, -18);
            L10_2_FlowerMeadow.crc2.lineTo(-5, -35);
            L10_2_FlowerMeadow.crc2.arc(-3.5, -35, 3, 0, 2 * Math.PI);
            L10_2_FlowerMeadow.crc2.moveTo(2, -18);
            L10_2_FlowerMeadow.crc2.lineTo(5, -35);
            L10_2_FlowerMeadow.crc2.arc(6.5, -35, 3, 0, 2 * Math.PI);
            L10_2_FlowerMeadow.crc2.stroke();
            L10_2_FlowerMeadow.crc2.fill();
            L10_2_FlowerMeadow.crc2.closePath();
            //Gesicht
            L10_2_FlowerMeadow.crc2.beginPath();
            L10_2_FlowerMeadow.crc2.rotate(0.5 * Math.PI);
            L10_2_FlowerMeadow.crc2.font = "20px Arial black";
            L10_2_FlowerMeadow.crc2.fillStyle = "#000000";
            L10_2_FlowerMeadow.crc2.fillText(": )", -8, 5);
            L10_2_FlowerMeadow.crc2.closePath();
            L10_2_FlowerMeadow.crc2.restore();
        }
        move(_timeslice) {
            /* let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.x *= _timeslice;
            offset.y *= _timeslice;
            this.position.add(offset); */
            super.move(_timeslice);
            if (this.position.x < 0)
                this.position.x += L10_2_FlowerMeadow.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L10_2_FlowerMeadow.crc2.canvas.height;
            if (this.position.x > L10_2_FlowerMeadow.crc2.canvas.width)
                this.position.x -= L10_2_FlowerMeadow.crc2.canvas.width;
            if (this.position.y > L10_2_FlowerMeadow.crc2.canvas.height)
                this.position.y -= L10_2_FlowerMeadow.crc2.canvas.height;
        }
    }
    L10_2_FlowerMeadow.Bee = Bee;
})(L10_2_FlowerMeadow || (L10_2_FlowerMeadow = {}));
//# sourceMappingURL=Bee.js.map