namespace L10_2_FlowerMeadow {
    export class Moveable {
        position: Vector;
        velocity: Vector;

        constructor(_position: Vector) {
            this.position = _position.clone();
            this.velocity = new Vector(0, 0);
        }

        draw(): void {
            //draw
        }

        move(_timeslice: number): void {
            let offset: Vector = this.velocity.clone();
            offset.scale(_timeslice);
            this.position.add(offset);

            /* 
            Überprüfung, ob das Element noch auf dem Canvas liegt,muss in die Subklassen, 
            da nicht jedes Element sich auf dem ganzen Canvas frei herumbewegen darf, 
            sondern manche nur in einem bestimmten ihnen zugeteilten Bereich.
            */
            /* if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height; */
        }

    }
} //namespace