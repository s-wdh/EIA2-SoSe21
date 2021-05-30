namespace L09_2_FlowerMeadow {
    export class Cloud {
        position: Vector;
        velocity: Vector;

        constructor(_position: Vector) {
            console.log("Cloud constructor");
            this.position = _position;
            this.velocity = new Vector(0, 0);
            this.velocity.random(10, 0);
        }

        draw(_position: Vector): void {
            crc2.save();
            crc2.translate(_position.x, _position.y);

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
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            //offset.scale(_timeslice);
            //_timeslice = Math.abs(_timeslice);
            offset.x *= _timeslice;
            offset.y *= 0;
            this.position.add(offset);

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
        }
    }
} //namespace