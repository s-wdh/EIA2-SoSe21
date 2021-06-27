namespace L11_2_FlowerMeadow {
    export abstract class Moveable {
        public position: Vector;
        public velocity: Vector;

        constructor(_position: Vector) {
            this.position = _position.clone();
            this.velocity = new Vector(0, 0);
        }

        public abstract draw(): void;

        public move(_timesliceX: number, _tymesliceY: number): void {
            let offset: Vector = this.velocity.clone();
            offset.x *= _timesliceX;
            offset.y *= _tymesliceY;
            this.position.add(offset);

            /* 
            Überprüfung, ob das Element noch auf dem Canvas liegt, muss in die Subklassen, 
            da nicht jedes Element sich auf dem ganzen Canvas frei herumbewegen darf, 
            sondern manche nur in einem bestimmten ihnen zugeteilten Bereich.
            */
        }

    }
} //namespace