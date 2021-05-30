namespace L09_2_FlowerMeadow {
    export class Tree {
        position: Vector;

        constructor(_position: Vector) {
            console.log("Tree constructor");
            this.position = _position;
        }

        draw(_position: Vector): void {
            crc2.save();
            crc2.translate(_position.x, _position.y);

            crc2.fillStyle = "#542405";
            crc2.fillRect(-5, 0, 10, 25);
            crc2.beginPath();
            crc2.arc(0, -10, 12.5, 0, Math.PI * 360);
            crc2.closePath();
            crc2.fillStyle = "#075200";
            crc2.fill();
            crc2.restore();
        }
    }
} //namespace