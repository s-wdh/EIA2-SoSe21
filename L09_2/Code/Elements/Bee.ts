namespace L09_2_FlowerMeadow {
    export class Bee {
        position: Vector;
        velocity: Vector;

        constructor(_position: Vector) {
            console.log("Bee PROTOTYPE constructor");
            this.position = _position;
            this.velocity = new Vector(0, 0);
            this.velocity.random(20, 20);
        }

        draw(_position: Vector): void {
            crc2.save();
            crc2.translate(_position.x, _position.y);

            //Flügel 1
            crc2.beginPath();
            crc2.moveTo(-60, -30);
            crc2.bezierCurveTo(-85, -70, 5, -70, -15, -25);
            crc2.fillStyle = "#eeffff";
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
            //Flügel 2
            crc2.beginPath();
            crc2.moveTo(-70, -25);
            crc2.bezierCurveTo(-95, -80, -20, -80, -35, -30);
            crc2.fillStyle = "#eeffff";
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
            //Körper
            crc2.beginPath();
            let linearGradient: CanvasGradient = crc2.createLinearGradient(-90, -30, 10, 30);
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
            crc2.ellipse(-40, 0, 50, 30, 0, 0, 2 * Math.PI);
            crc2.fillStyle = linearGradient;
            crc2.strokeStyle = "#000000";
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
            //Kopf
            crc2.beginPath();
            crc2.arc(0, 0, 20, 0, 2 * Math.PI);
            crc2.fillStyle = "#ffff00";
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
            //Fühler
            crc2.beginPath();
            crc2.fillStyle = "#000000";
            crc2.strokeStyle = "#000000";
            crc2.moveTo(-2, -18);
            crc2.lineTo(-5, -35);
            crc2.arc(-3.5, -35, 3, 0, 2 * Math.PI);
            crc2.moveTo(2, -18);
            crc2.lineTo(5, -35);
            crc2.arc(6.5, -35, 3, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
            //Gesicht
            crc2.beginPath();
            crc2.rotate(0.5 * Math.PI);
            crc2.font = "20px Arial black";
            crc2.fillStyle = "#000000";
            crc2.fillText(": )", -8, 5);
            crc2.closePath();
            crc2.restore();
        }

        move(_timeslice: number): void {
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.x *= _timeslice;
            offset.y *= _timeslice;
            this.position.add(offset);

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;
        }
    }
}