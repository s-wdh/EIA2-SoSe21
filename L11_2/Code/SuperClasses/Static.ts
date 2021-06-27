namespace L11_2_FlowerMeadow {
    export abstract class Static {
        public position: Vector;

        constructor(_position: Vector) {
            this.position = _position.clone();
        }

        public abstract draw(): void;
    }
} //namespace