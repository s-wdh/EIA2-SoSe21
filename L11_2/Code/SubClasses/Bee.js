"use strict";
var L11_2_FlowerMeadow;
(function (L11_2_FlowerMeadow) {
    let ACTIVITY;
    (function (ACTIVITY) {
        ACTIVITY[ACTIVITY["SEARCHING"] = 0] = "SEARCHING";
        ACTIVITY[ACTIVITY["EATING"] = 1] = "EATING";
        ACTIVITY[ACTIVITY["FLYING_HOME"] = 2] = "FLYING_HOME";
        ACTIVITY[ACTIVITY["PUKING"] = 3] = "PUKING";
    })(ACTIVITY = L11_2_FlowerMeadow.ACTIVITY || (L11_2_FlowerMeadow.ACTIVITY = {}));
    class Bee extends L11_2_FlowerMeadow.Moveable {
        constructor(_position) {
            super(_position);
            this.velocity = L11_2_FlowerMeadow.Vector.getRandom(20, 20);
            this.activity = ACTIVITY.SEARCHING;
        }
        draw() {
            L11_2_FlowerMeadow.crc2.save();
            L11_2_FlowerMeadow.crc2.translate(this.position.x, this.position.y);
            L11_2_FlowerMeadow.crc2.scale(0.8, 0.8);
            //Flügel 1
            L11_2_FlowerMeadow.crc2.beginPath();
            L11_2_FlowerMeadow.crc2.moveTo(-60, -30);
            L11_2_FlowerMeadow.crc2.bezierCurveTo(-85, -70, 5, -70, -15, -25);
            L11_2_FlowerMeadow.crc2.fillStyle = "#eeffff";
            L11_2_FlowerMeadow.crc2.fill();
            L11_2_FlowerMeadow.crc2.stroke();
            L11_2_FlowerMeadow.crc2.closePath();
            //Flügel 2
            L11_2_FlowerMeadow.crc2.beginPath();
            L11_2_FlowerMeadow.crc2.moveTo(-70, -25);
            L11_2_FlowerMeadow.crc2.bezierCurveTo(-95, -80, -20, -80, -35, -30);
            L11_2_FlowerMeadow.crc2.fillStyle = "#eeffff";
            L11_2_FlowerMeadow.crc2.fill();
            L11_2_FlowerMeadow.crc2.stroke();
            L11_2_FlowerMeadow.crc2.closePath();
            //Körper
            L11_2_FlowerMeadow.crc2.beginPath();
            let linearGradient = L11_2_FlowerMeadow.crc2.createLinearGradient(-90, -30, 10, 30);
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
            L11_2_FlowerMeadow.crc2.ellipse(-40, 0, 50, 30, 0, 0, 2 * Math.PI);
            L11_2_FlowerMeadow.crc2.fillStyle = linearGradient;
            L11_2_FlowerMeadow.crc2.strokeStyle = "#000000";
            L11_2_FlowerMeadow.crc2.fill();
            L11_2_FlowerMeadow.crc2.stroke();
            L11_2_FlowerMeadow.crc2.closePath();
            //Kopf
            L11_2_FlowerMeadow.crc2.beginPath();
            L11_2_FlowerMeadow.crc2.arc(0, 0, 20, 0, 2 * Math.PI);
            L11_2_FlowerMeadow.crc2.fillStyle = "#ffff00";
            L11_2_FlowerMeadow.crc2.fill();
            L11_2_FlowerMeadow.crc2.stroke();
            L11_2_FlowerMeadow.crc2.closePath();
            //Fühler
            L11_2_FlowerMeadow.crc2.beginPath();
            L11_2_FlowerMeadow.crc2.fillStyle = "#000000";
            L11_2_FlowerMeadow.crc2.strokeStyle = "#000000";
            L11_2_FlowerMeadow.crc2.moveTo(-2, -18);
            L11_2_FlowerMeadow.crc2.lineTo(-5, -35);
            L11_2_FlowerMeadow.crc2.arc(-3.5, -35, 3, 0, 2 * Math.PI);
            L11_2_FlowerMeadow.crc2.moveTo(2, -18);
            L11_2_FlowerMeadow.crc2.lineTo(5, -35);
            L11_2_FlowerMeadow.crc2.arc(6.5, -35, 3, 0, 2 * Math.PI);
            L11_2_FlowerMeadow.crc2.stroke();
            L11_2_FlowerMeadow.crc2.fill();
            L11_2_FlowerMeadow.crc2.closePath();
            //Gesicht
            L11_2_FlowerMeadow.crc2.beginPath();
            L11_2_FlowerMeadow.crc2.rotate(0.5 * Math.PI);
            L11_2_FlowerMeadow.crc2.font = "20px Arial black";
            L11_2_FlowerMeadow.crc2.fillStyle = "#000000";
            L11_2_FlowerMeadow.crc2.fillText(": )", -8, 5);
            L11_2_FlowerMeadow.crc2.closePath();
            L11_2_FlowerMeadow.crc2.restore();
        }
        move(_timeslice) {
            let timesliceX = Math.abs(_timeslice);
            let timesliceY = _timeslice;
            super.move(timesliceX, timesliceY);
            if (this.position.x < 0)
                this.position.x += L11_2_FlowerMeadow.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L11_2_FlowerMeadow.crc2.canvas.height;
            if (this.position.x > L11_2_FlowerMeadow.crc2.canvas.width)
                this.position.x -= L11_2_FlowerMeadow.crc2.canvas.width;
            if (this.position.y > L11_2_FlowerMeadow.crc2.canvas.height)
                this.position.y -= L11_2_FlowerMeadow.crc2.canvas.height;
        }
        fly(_aim) {
            /* _aim = Vector.getDifference(_aim, this.position);
            this.position.add(_aim); */
            this.position = _aim;
        }
    }
    L11_2_FlowerMeadow.Bee = Bee;
})(L11_2_FlowerMeadow || (L11_2_FlowerMeadow = {}));
//# sourceMappingURL=Bee.js.map