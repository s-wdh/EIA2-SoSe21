namespace L11_2_FlowerMeadow {
    export enum NECTARSTATUS {
        EMPTY,
        PRODUCING,
        FULL,
        GET_EMPTIED
    }
    export abstract class NectarProducer extends Static {
        public nectarAmount: number;
        public nectarStatus: NECTARSTATUS;

        constructor(_position: Vector) {
            super(_position);
            this.nectarAmount = 0;
            this.nectarStatus = NECTARSTATUS.PRODUCING;
        }

        public abstract draw(): void;

        public adjustNectar(_nectar: number): void {
            if ((this.nectarAmount + _nectar) < 1) {
                this.nectarAmount += _nectar;
            } else {
                this.nectarAmount = 1;
                this.nectarStatus = NECTARSTATUS.FULL;
            }
        }
    }
} //namespace