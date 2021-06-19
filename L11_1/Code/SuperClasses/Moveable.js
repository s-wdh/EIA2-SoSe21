"use strict";
var L11_1_FlowerMeadow;
(function (L11_1_FlowerMeadow) {
    class Moveable {
        constructor(_position) {
            this.position = _position.clone();
            this.velocity = new L11_1_FlowerMeadow.Vector(0, 0);
        }
        move(_timesliceX, _tymesliceY) {
            let offset = this.velocity.clone();
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
    L11_1_FlowerMeadow.Moveable = Moveable;
})(L11_1_FlowerMeadow || (L11_1_FlowerMeadow = {})); //namespace
//# sourceMappingURL=Moveable.js.map