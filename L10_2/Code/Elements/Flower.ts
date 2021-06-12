namespace L10_2_FlowerMeadow {
    export class Flower extends Static {

        constructor(_position: Vector) {
            super(_position);
        }

        draw(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);

            crc2.beginPath();
            crc2.fillStyle = "#0ea800";
            crc2.fillRect(-1.5, 0, 3, 15);
            crc2.closePath();

            for (let i: number = 0; i < 8; i++) {
                crc2.beginPath();
                crc2.rotate(0.9);
                //if (_i < 100) {
                crc2.fillStyle = "#ac0000";
                /* } else if (99 < _i && _i < 200) {
                    crc2.fillStyle = "#eddb00";
                } else if (199 < _i && _i < 300) {
                    crc2.fillStyle = "#a7009a";
                } else if (299 < _i) {
                    crc2.fillStyle = "#ff0077";
                } */
                crc2.ellipse(0, 3, 2, 5, 0, 0, Math.PI * 360);
                crc2.fill();
                crc2.closePath();
            }

            crc2.beginPath();
            crc2.arc(0, 0, 3, 0, Math.PI * 360);
            crc2.fillStyle = "#913f08";
            crc2.fill();
            crc2.closePath();
            crc2.restore();
        }
    }
} //namespace