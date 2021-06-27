"use strict";
var L11_2_FlowerMeadow;
(function (L11_2_FlowerMeadow) {
    let NECTARSTATUS;
    (function (NECTARSTATUS) {
        NECTARSTATUS[NECTARSTATUS["EMPTY"] = 0] = "EMPTY";
        NECTARSTATUS[NECTARSTATUS["PRODUCING"] = 1] = "PRODUCING";
        NECTARSTATUS[NECTARSTATUS["FULL"] = 2] = "FULL";
        NECTARSTATUS[NECTARSTATUS["GET_EMPTIED"] = 3] = "GET_EMPTIED";
    })(NECTARSTATUS = L11_2_FlowerMeadow.NECTARSTATUS || (L11_2_FlowerMeadow.NECTARSTATUS = {}));
    class NectarProducer extends L11_2_FlowerMeadow.Static {
        constructor(_position) {
            super(_position);
            this.nectarAmount = 0;
            this.nectarStatus = NECTARSTATUS.PRODUCING;
        }
        adjustNectar(_nectar) {
            if ((this.nectarAmount + _nectar) < 1) {
                this.nectarAmount += _nectar;
            }
            else {
                this.nectarAmount = 1;
                this.nectarStatus = NECTARSTATUS.FULL;
            }
        }
    }
    L11_2_FlowerMeadow.NectarProducer = NectarProducer;
})(L11_2_FlowerMeadow || (L11_2_FlowerMeadow = {})); //namespace
//# sourceMappingURL=NectarProducer.js.map