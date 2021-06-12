namespace L10_2_FlowerMeadow {
    export class Cloud extends Moveable {

        constructor(_position: Vector) {
            super(_position);
            this.velocity.random(10, 0);
        }

        draw(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);

            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.arc(0, 0, 12, 0, Math.PI * 2);
            crc2.arc(10, -10, 12, 0, Math.PI * 2);
            crc2.arc(10, 10, 12, 0, Math.PI * 2);
            crc2.arc(20, 0, 12, 0, Math.PI * 2);
            crc2.arc(30, -10, 12, 0, Math.PI * 2);
            crc2.arc(30, 10, 12, 0, Math.PI * 2);
            crc2.arc(40, 0, 12, 0, Math.PI * 2);
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.closePath();
            crc2.restore();
        }

        move(_timeslice: number): void {
            super.move(_timeslice);

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
        }
    }
} //namespace