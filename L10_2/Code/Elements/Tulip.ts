namespace L10_2_FlowerMeadow {
    export class Tulip extends Static {

        constructor(_position: Vector) {
            super(_position);
        }

        draw(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);

            crc2.beginPath();
            crc2.fillStyle = "#0ea800";
            crc2.fillRect(3, 0, 4, 15);
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
    }
} //namespace