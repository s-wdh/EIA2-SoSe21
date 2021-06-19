namespace L11_1_FlowerMeadow {
    export class Flower extends NectarProducer {
        private color: string;

        constructor(_position: Vector) {
            super(_position);
        }

        public setColor(): void {
            let colornum: number;
            colornum = Math.floor(Math.random() * 4);
            switch (colornum) {
                case 0:
                    this.color = "#ac0000";
                    break;
                case 1:
                    this.color = "#eddb00";
                    break;
                case 2:
                    this.color = "#a7009a";
                    break;
                case 3:
                    this.color = "#ff0077";
                    break;
            }
        }

        public draw(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);

            crc2.beginPath();
            let gradient: CanvasGradient;
            gradient = crc2.createLinearGradient(-4, 40, -4, 0);
            gradient.addColorStop(0, "#0ea800");
            gradient.addColorStop(this.nectarAmount, "#0ea800");
            gradient.addColorStop(this.nectarAmount, "#ffffff");
            gradient.addColorStop(1, "#ffffff");

            crc2.fillStyle = gradient;
            crc2.fillRect(-4, 0, 8, 40);
            crc2.closePath();

            for (let i: number = 0; i < 8; i++) {
                crc2.beginPath();
                crc2.rotate(0.9);
                crc2.fillStyle = this.color;
                crc2.ellipse(10, 0, 4, 10, -0.9, 0, Math.PI * 360);
                crc2.fill();
                crc2.closePath();
            }

            crc2.beginPath();
            crc2.arc(0, 0, 6, 0, Math.PI * 360);
            crc2.fillStyle = "#913f08";
            crc2.fill();
            crc2.closePath();
            crc2.restore();
        }
        
        public adjustNectar(_nectar: number): void {
            super.adjustNectar(_nectar);
        }
    }
} //namespace