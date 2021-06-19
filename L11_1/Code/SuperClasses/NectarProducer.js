"use strict";
var L11_1_FlowerMeadow;
(function (L11_1_FlowerMeadow) {
    class NectarProducer extends L11_1_FlowerMeadow.Static {
        constructor(_position) {
            super(_position);
            this.nectarAmount = 0;
        }
        adjustNectar(_nectar) {
            if ((this.nectarAmount + _nectar) < 1) {
                this.nectarAmount += _nectar;
            }
            else {
                this.nectarAmount = 1;
            }
        }
    }
    L11_1_FlowerMeadow.NectarProducer = NectarProducer;
})(L11_1_FlowerMeadow || (L11_1_FlowerMeadow = {})); //namespace
//# sourceMappingURL=NectarProducer.js.map