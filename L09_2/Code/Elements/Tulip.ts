namespace L09_2_FlowerMeadow {
    export class Tulip {
        position: Vector;

        constructor(_position: Vector) {
            console.log("Tulip constructor");
            this.position = _position;
        }

        draw(_position: Vector): void {
            crc2.save();
            crc2.translate(_position.x, _position.y);

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