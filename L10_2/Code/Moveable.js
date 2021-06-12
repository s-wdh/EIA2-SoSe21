"use strict";
var L10_2_FlowerMeadow;
(function (L10_2_FlowerMeadow) {
    class Moveable {
        constructor(_position) {
            this.position = _position.clone();
            this.velocity = new L10_2_FlowerMeadow.Vector(0, 0);
        }
        draw() {
            //draw
        }
        move(_timeslice) {
            let offset = this.velocity.clone();
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
    L10_2_FlowerMeadow.Moveable = Moveable;
})(L10_2_FlowerMeadow || (L10_2_FlowerMeadow = {})); //namespace
//# sourceMappingURL=Moveable.js.map