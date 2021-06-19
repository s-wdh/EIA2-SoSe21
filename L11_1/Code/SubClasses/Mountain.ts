namespace L11_1_FlowerMeadow {
    export class Mountain extends Static {

        constructor(_position: Vector) {
            super(_position);
        }

        public draw(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            /* let scaleFactor: number = Math.floor(Math.random() * 3);

            if (_i < 25) {
                crc2.scale(scaleFactor, scaleFactor);
            } else {
                crc2.scale(1, 1);
            } */

            crc2.beginPath();
            crc2.lineTo(25, -80);
            crc2.lineTo(50, 0);
            crc2.lineTo(0, 0);
            crc2.closePath();
            crc2.strokeStyle = "#3b3b3b";
            crc2.lineWidth = 2;
            crc2.stroke();
            crc2.fillStyle = "#878787";
            crc2.fill();
            crc2.restore();
        }
    }
} //namespace