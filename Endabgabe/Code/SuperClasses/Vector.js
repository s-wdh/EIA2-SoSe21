"use strict";
var Football;
(function (Football) {
    class Vector {
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        static getDifference(_v0, _v1) {
            let vector = new Vector(_v0.x - _v1.x, _v0.y - _v1.y);
            return vector;
        }
        static getRandom(_minLength, _maxLength) {
            let vector = new Vector(0, 0);
            let length = _minLength + Math.random() * (_maxLength - _minLength);
            let direction = Math.random() * 2 * Math.PI;
            vector.set(Math.cos(direction), Math.sin(direction));
            vector.scale(length);
            return vector;
        }
        get length() {
            return Math.hypot(this.x, this.y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        clone() {
            return new Vector(this.x, this.y);
        }
    }
    Football.Vector = Vector;
})(Football || (Football = {})); //namespace
//# sourceMappingURL=Vector.js.map