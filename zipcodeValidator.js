"use strict";
exports.__esModule = true;
//zipcodeValidator.ts
exports.numberRegxp = /^[0-9]+$/;
var ZipcodeValidator = /** @class */ (function () {
    function ZipcodeValidator() {
    }
    ZipcodeValidator.prototype.isAcceptable = function (s) {
        return s.length === 5 && exports.numberRegxp.test(s); //=== 강제 형변환 하지말라는뜻
    };
    return ZipcodeValidator;
}());
exports.ZipcodeValidator = ZipcodeValidator;
