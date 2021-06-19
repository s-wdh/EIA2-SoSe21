namespace L11_1_FlowerMeadow {
    export abstract class NectarProducer extends Static {
        public nectarAmount: number;

        constructor(_position: Vector) {
            super(_position);
            this.nectarAmount = 0;
        }

        public abstract draw(): void;

        public adjustNectar(_nectar: number): void {
            if ((this.nectarAmount + _nectar) < 1) {
                this.nectarAmount += _nectar;
            } else {
                this.nectarAmount = 1;
            }
        }
    }
} //namespace