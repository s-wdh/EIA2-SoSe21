namespace L11_1_FlowerMeadow {
    export class Tulip extends NectarProducer {

        constructor(_position: Vector) {
            super(_position);
        }

        public draw(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            let gradient: CanvasGradient;
            gradient = crc2.createLinearGradient(-4, 20, -4, 0);
            gradient.addColorStop(0, "#0ea800");
            gradient.addColorStop(this.nectarAmount, "#0ea800");
            gradient.addColorStop(this.nectarAmount, "#ffffff");
            gradient.addColorStop(1, "#ffffff");

            crc2.scale(2, 2);
            crc2.fillStyle = gradient;
            crc2.fillRect(3, 0, 4, 20);
            crc2.closePath();
            crc2.beginPath();
            crc2.quadraticCurveTo(5, 5, 10, 0);
            crc2.lineTo(10, -10);
            crc2.lineTo(7.5, -2);
            crc2.lineTo(5, -10);
            crc2.lineTo(2.5, -2);
            crc2.lineTo(0, -10);
            crc2.lineTo(0, 0);
            crc2.fillStyle = "#ff6000";
            crc2.fill();
            crc2.closePath();
            crc2.restore();
        }

        public adjustNectar(_nectar: number): void {
            super.adjustNectar(_nectar);
        }
    }
} //namespace